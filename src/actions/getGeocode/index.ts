import { AxiosError } from "axios";

export const GET_GEOCODE_START = "GEOCODE/GET_GEOCODE_START";
export const GET_GEOCODE_SUCCEED = "GEOCODE/GET_GEOCODE_SUCCEED";
export const GET_GEOCODE_FAIL = "GEOCODE/GET_GEOCODE_FAIL";

type GeocodePrams = {
  serachArea: string;
};

export type GeocodeData = {
  formatted_address: string;
  location: {
    lat: number;
    lng: number;
  };
};

export const getGeocode = {
  start: (params: GeocodePrams) => {
    return {
      type: GET_GEOCODE_START,
      payload: { params }
    } as const;
  },

  succeed: (params: GeocodePrams, result: GeocodeData) => {
    return {
      type: GET_GEOCODE_SUCCEED,
      payload: { params, result }
    } as const;
  },

  fail: (params: GeocodePrams, error: AxiosError) => {
    return {
      type: GET_GEOCODE_FAIL,
      payload: { params, error },
      error: true
    } as const;
  }
};

export type GetGeocodeActionType =
  | ReturnType<typeof getGeocode.start>
  | ReturnType<typeof getGeocode.succeed>
  | ReturnType<typeof getGeocode.fail>;
