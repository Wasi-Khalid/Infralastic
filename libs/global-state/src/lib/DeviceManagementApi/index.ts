import axios from "axios";

const API = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'key': 'U2FsdGVkX1+8sut0u1BvDE5mJAvJ1L2E78kiwVPtMMo='
  }
});

export const getHosts = (formData: any) =>
  API.get('http://flt01.infralastic.com:5000/host/getHosts', formData)

export const getHostDetail = (config: any) =>
  API.get(`http://flt01.infralastic.com:5000/host/getHostDetail/${config}`)

export const getInstaller = (config: any) =>
  API.get(`http://45.35.48.189:5000/installer/fleet`, config)
