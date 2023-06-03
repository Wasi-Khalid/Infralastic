import axios from "axios";

const API = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
});

export const getCategoryList = (formData: any) =>
  API.post('/api/get_all_product_category_api', formData)

export const getAllProducts = (formData: any) =>
  API.post('/api/get_all_products_api', formData)

export const getProductById = (formData: any) =>
  API.post('/api/get_product_api_by_id', formData)

export const checkoutOrder = (formData: any) =>
  API.post('/api/checkout_order_api', formData)

export const getOrder = (formData: any) =>
  API.post('/api/get_products_by_order_api', formData)
