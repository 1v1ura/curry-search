import React, { FC } from "react";
import { connect } from "react-redux";
import { GetShopsState } from "../../reducers/getShops";

import ShopList, { ShopListProps } from "../../components/ShopList";

const ShopListContainer: FC<ShopListProps> = props => {
  const { list, isLoading } = props;

  return (
    <>
      <ShopList list={list} isLoading={isLoading} />
    </>
  );
};

const mapStateToProps = (state: { shopData: GetShopsState }) => {
  return {
    list: state.shopData.list,
    isLoading: state.shopData.isLoading
  };
};

export default connect(
  mapStateToProps,
  {}
)(ShopListContainer);
