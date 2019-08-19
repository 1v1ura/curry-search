import { AxiosError } from "axios";
import { Reducer } from "redux";

import {
  GetGeocodeActionType,
  GET_GEOCODE_START,
  GET_GEOCODE_SUCCEED,
  GET_GEOCODE_FAIL
} from "../actions/getGeocode";

export type GetCodeState = {
  formatted_address: string;
  location: {
    lat: number;
    lng: number;
  };
  isLoading: boolean;
  error?: AxiosError | null;
};

export const geoCodeData: Reducer<GetCodeState, GetGeocodeActionType> = (
  state: GetCodeState = {
    formatted_address: "",
    location: { lat: 0, lng: 0 },
    isLoading: false
  },
  action: GetGeocodeActionType
): GetCodeState => {
  switch (action.type) {
    case GET_GEOCODE_START:
      return {
        ...state,
        isLoading: true
      };

    case GET_GEOCODE_SUCCEED:
      return {
        ...state,
        formatted_address: action.payload.result.formatted_address,
        location: {
          lat: action.payload.result.location.lat,
          lng: action.payload.result.location.lng
        },
        isLoading: false
      };

    case GET_GEOCODE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
};

export default geoCodeData;
