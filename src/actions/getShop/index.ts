import { AxiosError } from "axios";

export const GET_SHOP_START = "GURUNAVI/GET_SHOP_START";
export const GET_SHOP_SUCCEED = "GURUNAVI/GET_SHOP_SUCCEED";
export const GET_SHOP_FAIL = "GURUNAVI/GET_SHOP_FAIL";

export type GetShopParams = { shopId: number };
export type GetShop = any;

export const getShop = {
  start: (params: GetShopParams) => {
    return {
      type: GET_SHOP_START,
      payload: { params }
    } as const;
  },

  succeed: (params: GetShopParams, result: GetShop) => {
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

export type GetShopActionType =
  | ReturnType<typeof getShop.start>
  | ReturnType<typeof getShop.succeed>
  | ReturnType<typeof getShop.fail>;
