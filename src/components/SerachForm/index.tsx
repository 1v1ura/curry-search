import React, { FC } from "react";

export type SerachFormProps = {
  searchText: string;
  formatted_address: string;
  isLoading: boolean;
  getGeocodeStart: (serachArea: string) => void;
  changeSerachText: (area: string) => void;
};

const SerachForm: FC<SerachFormProps> = props => {
  const { searchText, changeSerachText } = props;

  const onChangeText = (e: React.FormEvent<HTMLInputElement>) => {
    changeSerachText(e.currentTarget.value);
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.getGeocodeStart(searchText);
  };

  return (
    <>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => submitForm(e)}>
        <input
          type="text"
          value={searchText}
          onChange={(e: React.FormEvent<HTMLInputElement>) => onChangeText(e)}
        />
        <button type="submit">検索</button>
      </form>
    </>
  );
};

export default SerachForm;
