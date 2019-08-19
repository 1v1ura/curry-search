import { Reducer } from "redux";
import { AxiosError } from "axios";

import {
  GetShopActionType,
  GET_SHOP_START,
  GET_SHOP_SUCCEED,
  GET_SHOP_FAIL
} from "../actions/getShop";

export type GetShopState = {
  shopData: { [key: string]: any };
  isLoading: boolean;
  error?: AxiosError | null;
};

const shopsData: Reducer<GetShopState, GetShopActionType> = (
  state: GetShopState = { shopData: {}, isLoading: false },
  action: GetShopActionType
): GetShopState => {
  switch (action.type) {
    case GET_SHOP_START:
      return {
        ...state,
        shopData: {},
        isLoading: true
      };

    case GET_SHOP_SUCCEED:
      return {
        ...state,
        shopData: action.payload.result.shopData,
        isLoading: false
      };

    case GET_SHOP_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
};

export default shopsData;
