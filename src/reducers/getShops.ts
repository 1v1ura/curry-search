import { Reducer } from "redux";
import { AxiosError } from "axios";

import {
  GetShopsActionType,
  GET_SHOP_START,
  GET_SHOP_SUCCEED,
  GET_SHOP_FAIL
} from "../actions/getShops";

export type GetShopsState = {
  list: any[];
  isLoading: boolean;
  error?: AxiosError | null;
};

const shopData: Reducer<GetShopsState, GetShopsActionType> = (
  state: GetShopsState = { list: [], isLoading: false },
  action: GetShopsActionType
): GetShopsState => {
  switch (action.type) {
    case GET_SHOP_START:
      return {
        ...state,
        list: [],
        isLoading: true
      };

    case GET_SHOP_SUCCEED:
      console.log(action);
      return {
        ...state,
        list: action.payload.result.list,
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

export default shopData;
