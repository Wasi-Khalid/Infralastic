import axios from "axios";

const API = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'key': 'U2FsdGVkX1+8sut0u1BvDE5mJAvJ1L2E78kiwVPtMMo='
  }
});

export const getHosts = (formData: any) =>
  API.get('http://10.100.108.108:5000/host/getHosts', formData)
