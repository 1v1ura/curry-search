import axios from "axios";

type ApiConfig = {
  baseURL: string;
  timeout: number;
};

const API_DEFAULT_CONFIG: ApiConfig = {
  baseURL: "https://api.gnavi.co.jp",
  timeout: 7000
};

export const getShopsFactory = (optionConfig?: ApiConfig) => {
  const config = {
    ...API_DEFAULT_CONFIG,
    ...optionConfig
  };

  const instance = axios.create(config);

  const getShops = async (location: { lat: number; lng: number }) => {
    try {
      const response = await instance.get("RestSearchAPI/v3/", {
        params: {
          keyid: process.env.REACT_APP_GURUNAVI_API_KEY,
          category_l: "RSFST16000",
          hit_per_page: 100,
          latitude: location.lat,
          longitude: location.lng
        }
      });

      if (response.status !== 200) {
        throw new Error("Server Error");
      }

      const shopList: any[] = response.data;

      return shopList;
    } catch (err) {
      throw err;
    }
  };

  return getShops;
};

export const getShopFactory = (optionConfig?: ApiConfig) => {
  const config = {
    ...API_DEFAULT_CONFIG,
    ...optionConfig
  };

  const instance = axios.create(config);

  const getShop = async (shopId: number) => {
    try {
      const response = await instance.get("RestSearchAPI/v3/", {
        params: {
          keyid: process.env.REACT_APP_GURUNAVI_API_KEY,
          id: shopId
        }
      });

      if (response.status !== 200) {
        throw new Error("Server Error");
      }

      const shopList: any[] = response.data;

      return shopList;
    } catch (err) {
      throw err;
    }
  };

  return getShop;
};
