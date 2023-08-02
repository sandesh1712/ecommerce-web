import axios from "axios";
import constant from "../constant";
import headerHelper from "./authHelper/headerHelper";

const apiUrl = constant.apiUrl;

const getRequest = async (url, requestConfig) => {
  requestConfig = {...requestConfig,headers : headerHelper.buildHeaders()};
  const res = await axios.get(apiUrl+url, requestConfig);
  return await res;
};

const postRequest = async (url, payload, requestConfig) => { 
  requestConfig = {...requestConfig,headers : headerHelper.buildHeaders()};
  const res = await axios.post(apiUrl+url, payload, requestConfig);
  return await res;
};

const putRequest = async (url, requestConfig) => {
  requestConfig = {...requestConfig,headers : headerHelper.buildHeaders()};
  const res = await axios.put(url, requestConfig);
  return await res;
};

const deleteRequest = async (url, requestConfig) => {
  requestConfig = {...requestConfig,headers : headerHelper.buildHeaders()};
  const res = await axios.delete(url, requestConfig);
  return await res;
};

const requestHelper = {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
};

export default requestHelper;