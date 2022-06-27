import axios from "axios";

export type ParamsFetch = {
  product_type?: string;
  product_category?: string;
  product_tags?: string[];
  brand?: string;
  price_greater_than?: number;
  product_tprice_less_thanype?: number;
  rating_greater_than?: number;
  rating_less_than?: number;
};

export function ApiService(params?: ParamsFetch) {
  const baseUrl = "http://makeup-api.herokuapp.com/api/v1/products.json";

  return axios.get(baseUrl, {
    params,
  });
}
