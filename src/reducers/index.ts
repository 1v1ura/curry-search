import { combineReducers } from "redux";
import shopsData from "./getShops";
import shopData from "./getShop";
import geoCodeData from "./getGeocode";
import searchText from "./serchText";

export default combineReducers({
  shopsData,
  shopData,
  geoCodeData,
  searchText
});
