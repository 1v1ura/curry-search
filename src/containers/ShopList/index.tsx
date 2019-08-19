import React, { FC } from "react";
import { connect } from "react-redux";
import { GetShopsState } from "../../reducers/getShops";
import { SerchTextState } from "../../reducers/serchText";
import ShopList, { ShopListProps } from "../../components/ShopList";

const ShopListContainer: FC<ShopListProps> = props => {
  const { list, isLoading, searchText } = props;

  return (
    <>
      <ShopList list={list} isLoading={isLoading} searchText={searchText} />
    </>
  );
};

const mapStateToProps = (state: {
  shopsData: GetShopsState;
  searchText: SerchTextState;
}) => {
  return {
    searchText: state.searchText.text,
    list: state.shopsData.list,
    isLoading: state.shopsData.isLoading
  };
};

export default connect(
  mapStateToProps,
  {}
)(ShopListContainer);
