import axios from "axios";

const API = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
});

export const getProductList = (formData: any) =>
  API.post('/api/', formData)
