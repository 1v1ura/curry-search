import React, { FC, useEffect } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { GetShopState } from "../../reducers/getShop";
import { Rest } from "../../actions/getShops/getShopsConstants";
import { getShop } from "../../actions/getShop";

import Shop, { ShopProps } from "../../components/Shop";

type ShopContainerProps = {
  match: {
    params: {
      shop_id: number;
    };
  };
  list: Rest[];
  getShopStart: (shopId: number) => void;
  isLoading: boolean;
} & ShopProps &
  RouteComponentProps;

type ShopContainerDispatchProps = {};

const ShopContainer: FC<ShopContainerProps> = props => {
  const { getShopStart, shopData, isLoading } = props;
  const shopId = props.match.params.shop_id;

  useEffect(() => {
    getShopStart(shopId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Shop shopData={shopData} isLoading={isLoading} />
    </>
  );
};

const mapStateToProps = (state: { shopData: GetShopState }) => {
  return {
    shopData: state.shopData.shopData,
    isLoading: state.shopData.isLoading
  };
};

const mapDispatchToProps = (dispatch: Dispatch): ShopContainerDispatchProps => {
  return bindActionCreators(
    {
      getShopStart: (shopId: number) => getShop.start({ shopId })
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopContainer);
