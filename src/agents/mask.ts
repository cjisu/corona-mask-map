import axios, { AxiosInstance } from "axios";

class Mask {
  public axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/"
    });
  }

  getByGeo = (lat: number, lng: number, m: number) => {
    const params = {
      lat,
      lng,
      m
    };

    return this.axios.get("storesByGeo/json", { params });
  };
}

export default new Mask();
