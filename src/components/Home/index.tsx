import React, { FC } from "react";
import SearchHome from "../../containers/SearchForm";
import ShopList from "../../containers/ShopList";

const Home: FC<{}> = () => {
  return (
    <>
      <h2>Home</h2>
      <SearchHome />
      <ShopList />
    </>
  );
};

export default Home;
