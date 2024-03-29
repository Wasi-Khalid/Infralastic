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

export const getRmmClient = (config: any) =>
  API.get(`/tactical/getClients`, config)

export const generateRmmInstaller = (config: any) =>
  API.post(`/tactical/generateInstaller`, config)

export const getChocInstaller = (formData: any) =>
  API.post('/salt/installChocolatey', formData)

export const getChocsSoftware = (formData: any) =>
  API.get(`/tactical/getChocosSoftwares?page=${formData}?per_page=${10}`)

export const acceptSaltMinion = (formData: any) =>
  API.post(`/salt/acceptMinion`, formData)

export const executeSaltCommands = (formData: any) =>
  API.post(`/salt/executeCmd`, formData)

export const executeSaltCommandsPowerShell = (formData: any) =>
  API.post(`/salt/executePowershell`, formData)

export const getIpAddress = (config: any) =>
  axios.get('https://ipgeolocation.abstractapi.com/v1/', config)

