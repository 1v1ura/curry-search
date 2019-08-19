import React, { FC } from "react";
import SearchFome from "../../containers/SearchForm";
import ShopList from "../../containers/ShopList";

const Home: FC<{}> = () => {
  return (
    <>
      <SearchFome />
      <ShopList />
    </>
  );
};

export default Home;
