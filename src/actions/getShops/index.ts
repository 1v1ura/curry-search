import { AxiosError } from "axios";

export const GET_SHOP_START = "GURUNAVI/GET_SHOP_START";
export const GET_SHOP_SUCCEED = "GURUNAVI/GET_SHOP_SUCCEED";
export const GET_SHOP_FAIL = "GURUNAVI/GET_SHOP_FAIL";

type GetShopParams = {};
type GetShopList = { list: any[] };

export const getShops = {
  start: (params: GetShopParams) => {
    return {
      type: GET_SHOP_START,
      payload: params
    } as const;
  },

  succeed: (params: GetShopList, result: GetShopList) => {
    return {
      type: GET_SHOP_SUCCEED,
      payload: { params, result }
    } as const;
  },

  fail: (params: GetShopList, error: AxiosError) => {
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
