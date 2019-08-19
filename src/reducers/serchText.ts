import { Reducer } from "redux";
import {
  CAHNGE_SERACH_TEXT,
  ChangeSerachTextActionType
} from "../actions/serchText";

export type SerchTextState = {
  text: string;
};

const searchText: Reducer<SerchTextState, ChangeSerachTextActionType> = (
  state: SerchTextState = { text: "" },
  action: ChangeSerachTextActionType
): SerchTextState => {
  switch (action.type) {
    case CAHNGE_SERACH_TEXT:
      return {
        ...state,
        text: action.payload.params.newText
      };

    default:
      return state;
  }
};

export default searchText;
