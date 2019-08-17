import React, { FC, useEffect } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { GeoCodeState } from "../../reducers/getGeocode";
import { getGeocode } from "../../actions/getGeocode";
import { getShops } from "../../actions/getShops";

import SerachForm, { SerachFormProps } from "../..//components/SerachForm";

type SerachFormContainerProps = SerachFormProps & {
  location: { lat: number; lng: number };
  getShopsStart: (params: {}) => void;
};

type SerachFormDispatchProps = {
  getGeocodeStart: (serachArea: string) => void;
  getShopsStart: (params: {}) => void;
};

const SerachFormContainer: FC<SerachFormContainerProps> = props => {
  const {
    formatted_address,
    location,
    isLoading,
    getGeocodeStart,
    getShopsStart
  } = props;

  const submitForm = async (serachArea: string) => {
    await getGeocodeStart(serachArea);
  };

  useEffect(() => {
    if (location.lat !== 0 && location.lng !== 0) {
      getShopsStart({ location });
    }
  }, [location.lat, location.lng]);

  return (
    <>
      <SerachForm
        formatted_address={formatted_address}
        isLoading={isLoading}
        getGeocodeStart={submitForm}
      />
    </>
  );
};

const mapStateToProps = (state: { geoCodeData: GeoCodeState }) => {
  return {
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
      getShopsStart: (params: any) => getShops.start(params)
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SerachFormContainer);
