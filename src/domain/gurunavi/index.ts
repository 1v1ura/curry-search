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
          keyid: "a0d9fd1340a124c229be10a08c8f25c1",
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
          keyid: "a0d9fd1340a124c229be10a08c8f25c1",
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
