import { apiClient } from "../config";


export const apiGetAllCompliance = async () => {
    return apiClient.get(`/compliance`); 
  };