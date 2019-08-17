import React, { FC, useState } from "react";

export type SerachFormProps = {
  formatted_address: string;
  isLoading: boolean;
  getGeocodeStart: (serachArea: string) => void;
};

const SerachForm: FC<SerachFormProps> = props => {
  const [serchText, setSerchText] = useState("");

  const onChangeText = (e: React.FormEvent<HTMLInputElement>) => {
    setSerchText(e.currentTarget.value);
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.getGeocodeStart(serchText);
  };

  return (
    <>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => submitForm(e)}>
        <input
          type="text"
          value={serchText}
          onChange={(e: React.FormEvent<HTMLInputElement>) => onChangeText(e)}
        />
        <button type="submit">検索</button>
      </form>
    </>
  );
};

export default SerachForm;
