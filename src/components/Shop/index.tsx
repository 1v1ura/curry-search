import React, { FC } from "react";
import { Link } from "react-router-dom";

export type ShopProps = {
  shopData: { [key: string]: any };
  isLoading: boolean;
};

const Shop: FC<ShopProps> = props => {
  const { shopData, isLoading } = props;

  return (
    <div>
      <h2>Shop Info</h2>
      {isLoading ? (
        <p>読込中...</p>
      ) : (
        <table>
          <tbody>
            <tr>
              <th>店名</th>
              <td>{shopData.name}</td>
            </tr>
            <tr>
              <th>住所</th>
              <td>{shopData.address}</td>
            </tr>
            <tr>
              <th>URL</th>
              <td>
                <a
                  href={shopData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {shopData.url}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      )}

      <p>
        <Link to="/">TOPへ戻る</Link>
      </p>
    </div>
  );
};

export default Shop;
