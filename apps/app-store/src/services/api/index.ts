import axios from "axios";

const API = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
});

export const getCategoryList = (formData: any) =>
  API.post('/api/get_all_product_category_api', formData)
