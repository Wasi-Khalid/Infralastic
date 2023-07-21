import axios from "axios";

const API = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'key': 'U2FsdGVkX1+8sut0u1BvDE5mJAvJ1L2E78kiwVPtMMo='
  },
  baseURL: 'https://flt01.infralastic.com'
});

export const getHosts = (formData: any) =>
  API.get('/host/getHosts', formData)

export const getHostDetail = (config: any) =>
  API.get(`/host/getHostDetail/${config}`)

export const getInstaller = (config: any) =>
  API.get(`/installer/fleet`, config)
