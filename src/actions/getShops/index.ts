import { AxiosError } from "axios";
import { Rest } from "./getShopsConstants";

export const GET_SHOP_START = "GURUNAVI/GET_SHOP_START";
export const GET_SHOP_SUCCEED = "GURUNAVI/GET_SHOP_SUCCEED";
export const GET_SHOP_FAIL = "GURUNAVI/GET_SHOP_FAIL";

type GetShopParams = { location: { lat: number; lng: number } };
export type GetShopList = { list: Rest[] };

export const getShops = {
  start: (params: GetShopParams) => {
    return {
      type: GET_SHOP_START,
      payload: { params }
    } as const;
  },

  succeed: (params: GetShopParams, result: GetShopList) => {
    return {
      type: GET_SHOP_SUCCEED,
      payload: { params, result }
    } as const;
  },

  fail: (params: GetShopParams, error: AxiosError) => {
    return {
      type: GET_SHOP_FAIL,
      payload: { params, error },
      error: true
    } as const;
  }
};

export type GetShopsActionType =
  | ReturnType<typeof getShops.start>
  | ReturnType<typeof getShops.succeed>
  | ReturnType<typeof getShops.fail>;
