export const CAHNGE_SERACH_TEXT = "CAHNGE_SERACH_TEXT";

type ChangeSerachTextParams = {
  newText: string;
};

const changeSerachText = (params: ChangeSerachTextParams) => {
  return {
    type: CAHNGE_SERACH_TEXT,
    payload: { params }
  } as const;
};

export type ChangeSerachTextActionType = ReturnType<typeof changeSerachText>;
export default changeSerachText;
