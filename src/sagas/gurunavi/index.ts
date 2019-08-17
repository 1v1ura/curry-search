import { call, put, takeLatest } from "redux-saga/effects";
import getShopsFactory from "../../domain/gurunavi";

import { getShops, GetShopList, GET_SHOP_START } from "../../actions/getShops";

function* runGetShopList(action: ReturnType<typeof getShops.start>) {
  yield console.log("runGetShopList");

  const { location } = action.payload.params;
  const api = getShopsFactory();

  try {
    const shopList = yield call(api, {
      lat: location.lat,
      lng: location.lng
    });

    const params: GetShopList = {
      list: shopList.rest
    };

    yield put(getShops.succeed({ location }, params));
  } catch (error) {
    yield put(getShops.fail({ location }, error));
  }
}

export function* watchGetShopList() {
  yield takeLatest(GET_SHOP_START, runGetShopList);
}

export default watchGetShopList;
