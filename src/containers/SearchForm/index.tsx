import React, { FC, useEffect } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { GetCodeState } from "../../reducers/getGeocode";
import { SerchTextState } from "../../reducers/serchText";
import { getGeocode } from "../../actions/getGeocode";
import { getShops } from "../../actions/getShops";
import changeSerachText from "../../actions/serchText";

import SerachForm, { SerachFormProps } from "../..//components/SerachForm";

type SerachFormContainerProps = SerachFormProps & {
  searchText: string;
  location: { lat: number; lng: number };
  getShopsStart: (params: {}) => void;
};

type SerachFormDispatchProps = {
  getGeocodeStart: (serachArea: string) => void;
  getShopsStart: (params: {}) => void;
  changeSerachText: (area: string) => void;
};

const SerachFormContainer: FC<SerachFormContainerProps> = props => {
  const {
    searchText,
    formatted_address,
    location,
    isLoading,
    getGeocodeStart,
    getShopsStart,
    changeSerachText
  } = props;

  const submitForm = async (serachArea: string) => {
    await getGeocodeStart(serachArea);
  };

  useEffect(() => {
    if (location.lat !== 0 && location.lng !== 0) {
      getShopsStart({ location });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.lat, location.lng]);

  return (
    <>
      <SerachForm
        searchText={searchText}
        changeSerachText={changeSerachText}
        formatted_address={formatted_address}
        isLoading={isLoading}
        getGeocodeStart={submitForm}
      />
    </>
  );
};

const mapStateToProps = (state: {
  geoCodeData: GetCodeState;
  searchText: SerchTextState;
}) => {
  return {
    searchText: state.searchText.text,
    formatted_address: state.geoCodeData.formatted_address,
    location: {
      lat: state.geoCodeData.location.lat,
      lng: state.geoCodeData.location.lng
    },
    isLoading: state.geoCodeData.isLoading
  };
};

const mapDispatchToProps = (dispatch: Dispatch): SerachFormDispatchProps => {
  return bindActionCreators(
    {
      getGeocodeStart: (serachArea: string) => getGeocode.start({ serachArea }),
      getShopsStart: (params: any) => getShops.start(params),
      changeSerachText: (area: string) => changeSerachText({ newText: area })
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SerachFormContainer);
