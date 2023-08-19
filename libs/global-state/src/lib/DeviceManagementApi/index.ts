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

export const getSaltInstaller = (config: any) =>
  API.get(`/installer/salt`, config)

export const getAntivirus = (formData: any) =>
  API.post(`/host/checkWindowsAntivirus`, formData)

export const getSaltMinion = (config: any) =>
  API.get(`/salt/getMinionIds`, config)

export const acceptSaltMinion = (formData: any) =>
  API.post(`/salt/acceptMinion`, formData)

export const executeSaltCommands = (formData: any) =>
  API.post(`/salt/executeCmd`, formData)

export const executeSaltCommandsPowerShell = (formData: any) =>
  API.post(`/salt/executePowershell`, formData)

export const getIpAddress = (config: any) =>
  axios.get('https://ipgeolocation.abstractapi.com/v1/', config)

export const getChocInstaller = (config: any) =>
  axios.get('/salt/installChocolatey', config)

