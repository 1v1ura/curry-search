import axios from "axios";

type ApiConfig = {
  baseURL: string;
  timeout: number;
};

const API_DEFAULT_CONFIG: ApiConfig = {
  baseURL: "https://maps.googleapis.com/",
  timeout: 7000
};

export const getGeocodeFactory = (optionConfig?: ApiConfig) => {
  const config = {
    ...API_DEFAULT_CONFIG,
    ...optionConfig
  };

  const instance = axios.create(config);

  const getGeocodeData = async (params: { address: string }) => {
    try {
      const response = await instance.get("maps/api/geocode/json", {
        params: {
          key: "AIzaSyD62509zisYOZ9iuaKz9HMFKpDyJknmEdQ",
          address: params.address
        }
      });

      if (response.status !== 200) {
        throw new Error("Server Error");
      }

      const geocodeData: {
        results: { [key: string]: any }[];
        status: number | string;
      } = response.data;

      return geocodeData;
    } catch (err) {
      throw err;
    }
  };

  return getGeocodeData;
};
