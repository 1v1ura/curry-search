import { call, put, takeLatest } from "redux-saga/effects";
import { getGeocodeFactory } from "../../domain/geocode";

import {
  getGeocode,
  GeocodeData,
  GET_GEOCODE_START
} from "../../actions/getGeocode";

function* runGetGeocode(action: ReturnType<typeof getGeocode.start>) {
  const { serachArea } = action.payload.params;
  const api = getGeocodeFactory();

  try {
    const geocodeDate = yield call(api, { address: serachArea });

    const params: GeocodeData = {
      formatted_address: geocodeDate.results[0].formatted_address,
      location: {
        lat: geocodeDate.results[0].geometry.location.lat,
        lng: geocodeDate.results[0].geometry.location.lng
      }
    };

    yield put(getGeocode.succeed({ serachArea }, params));
  } catch (error) {
    yield put(getGeocode.fail({ serachArea }, error));
  }
}

export function* watchGetGeocode() {
  yield takeLatest(GET_GEOCODE_START, runGetGeocode);
}

export default watchGetGeocode;
