import { Reducer } from "redux";
import { AxiosError } from "axios";

import {
  GetShopsActionType,
  GET_SHOPS_START,
  GET_SHOPS_SUCCEED,
  GET_SHOPS_FAIL
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
    case GET_SHOPS_START:
      return {
        ...state,
        list: [],
        isLoading: true
      };

    case GET_SHOPS_SUCCEED:
      return {
        ...state,
        list: action.payload.result.list,
        isLoading: false
      };

    case GET_SHOPS_FAIL:
      return {
        ...state,
        list: [],
        isLoading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
};

export default shopData;
