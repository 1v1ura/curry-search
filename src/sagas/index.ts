import { all, fork } from "redux-saga/effects";
import watchGetGeocode from "./geocode";
import { watchGetShopList, watchGetShop } from "./gurunavi";

export default function* rootSaga() {
  yield all([
    fork(watchGetGeocode),
    fork(watchGetShopList),
    fork(watchGetShop)
  ]);
}
