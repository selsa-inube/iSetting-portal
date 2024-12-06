import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  enviroment,
  fetchTimeoutServices,
  maxRetriesServices,
} from "@config/environment";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";
import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: enviroment.IVITE_IPORTAL_STAFF_QUERY_PROCESS_SERVICE,
  timeout: fetchTimeoutServices,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      console.error("Request timed out");
    }
    return Promise.reject(new Error(error.message));
  }
);

const fetchWithRetries = async <T>(
  url: string,
  config: AxiosRequestConfig
): Promise<T> => {
  const maxRetries = maxRetriesServices;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response: AxiosResponse<T> = await axiosInstance.get<T>(
        url,
        config
      );
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Attempt ${attempt} failed: ${error.message}`);
      } else {
        console.error(`Attempt ${attempt} failed: ${String(error)}`);
      }
      if (attempt === maxRetries) {
        throw error;
      }
    }
  }
  throw new Error("Error al obtener los de las unidades de negocio.");
};

const getBusinessUnitsPortalStaff = async (
  portalPublicCode: string,
  userAccount: string
): Promise<IBusinessUnitsPortalStaff[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchBusinessUnitsForAnOfficer",
    },
  };
  return fetchWithRetries<IBusinessUnitsPortalStaff[]>(
    `/business-units-portal-staff/${userAccount}/${portalPublicCode}`,
    config
  );
};

const getBusinessManagersId = async (
  publiCode: string
): Promise<IBusinessUnitsPortalStaffId[]> => {
  const queryParams = new URLSearchParams({
    publiCode: publiCode,
  });
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllBusinessManagerIportalStaff",
    },
  };
  return fetchWithRetries<IBusinessUnitsPortalStaffId[]>(
    `/staffs?${queryParams.toString()}`,
    config
  );
};

export { getBusinessUnitsPortalStaff, getBusinessManagersId };
