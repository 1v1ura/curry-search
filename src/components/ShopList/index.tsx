import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Rest } from "../../actions/getShops/getShopsConstants";

export type ShopListProps = {
  searchText: string;
  list: Rest[];
  isLoading: boolean;
};

const ShopList: FC<ShopListProps> = props => {
  const { list, isLoading, searchText } = props;

  return (
    <>
      {list.length > 0 && searchText.length > 0 ? (
        <p>「{searchText}」の検索結果</p>
      ) : (
        <p>店舗がみつかりませんでした。</p>
      )}

      {isLoading ? (
        <p>読み込み中...</p>
      ) : (
        <ul>
          {list.map(shop => (
            <li key={shop.id}>
              <Link to={`/${shop.id}/info`}>{shop.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ShopList;
