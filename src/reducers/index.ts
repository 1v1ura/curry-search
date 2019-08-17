import { combineReducers } from "redux";
import shopData from "./getShops";
import geoCodeData from "./getGeocode";

export default combineReducers({ shopData, geoCodeData });
