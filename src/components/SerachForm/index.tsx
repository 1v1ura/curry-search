import React, { FC } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export type SerachFormProps = {
  searchText: string;
  formatted_address: string;
  isLoading: boolean;
  getGeocodeStart: (serachArea: string) => void;
  changeSerachText: (area: string) => void;
};

const SerachForm: FC<SerachFormProps> = props => {
  const { searchText, changeSerachText } = props;

  const onChangeText = (newValue: string) => {
    changeSerachText(newValue);
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.getGeocodeStart(searchText);
  };

  return (
    <>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => submitForm(e)}>
        <TextField
          id="outlined-full-width"
          label="Search Area"
          placeholder="input area name"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          value={searchText}
          onChange={e => onChangeText(e.target.value)}
        />
        <Box display="flex" flexDirection="row-reverse">
          <Button variant="contained" color="primary" type="submit">
            Search
          </Button>
        </Box>
      </form>
    </>
  );
};

export default SerachForm;
