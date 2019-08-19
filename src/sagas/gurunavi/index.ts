import { call, put, takeLatest } from "redux-saga/effects";
import { getShopsFactory, getShopFactory } from "../../domain/gurunavi";

import { getShops, GetShopList, GET_SHOPS_START } from "../../actions/getShops";
import { getShop, GetShop, GET_SHOP_START } from "../../actions/getShop";

// get shop list ...
function* runGetShopList(action: ReturnType<typeof getShops.start>) {
  const { location } = action.payload.params;
  const api = getShopsFactory();

  try {
    const shopList = yield call(api, {
      lat: location.lat,
      lng: location.lng
    });

    const params: GetShopList = {
      list: shopList.rest
    };

    yield put(getShops.succeed({ location }, params));
  } catch (error) {
    yield put(getShops.fail({ location }, error));
  }
}

export function* watchGetShopList() {
  yield takeLatest(GET_SHOPS_START, runGetShopList);
}

// get shop ...
function* runGetShop(action: ReturnType<typeof getShop.start>) {
  const shopId = action.payload.params.shopId;
  const api = getShopFactory();

  try {
    const response = yield call(api, shopId);
    const shopData = response.rest[0];

    const params: GetShop = {
      shopData: shopData
    };
    yield put(getShop.succeed({ shopId }, params));
  } catch (error) {
    yield put(getShop.fail({ shopId }, error));
  }
}

export function* watchGetShop() {
  yield takeLatest(GET_SHOP_START, runGetShop);
}
