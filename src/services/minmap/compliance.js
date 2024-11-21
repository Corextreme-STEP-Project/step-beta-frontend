import { apiClient } from "../config";


export const apiGetAllCompliance = async () => {
    return apiClient.get(`/compliance`); 
  };

  export const apiGetSingleCompliance = async (projectId) => apiClient.get(`/compliance/${projectId}`);