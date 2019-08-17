import React, { FC } from "react";
import { Rest } from "../../actions/getShops/getShopsConstants";

export type ShopListProps = {
  list: Rest[];
  isLoading: boolean;
};

const ShopList: FC<ShopListProps> = props => {
  return (
    <div>
      <h2>ShopList</h2>
    </div>
  );
};

export default ShopList;
