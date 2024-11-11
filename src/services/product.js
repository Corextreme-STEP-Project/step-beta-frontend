
import { apiClient } from "./config";

// Get all projects
export const apiGetProjects = async () => {
  return apiClient.get("/projects"); 
};

// Add a new project
export const apiAddProject = async (payload) => {
  const token = localStorage.getItem("token"); // Adjust to where you store the token
    const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    };
  return apiClient.post ("/projects/add", payload,  { headers }); 
};

// Get project by ID
export const apiGetSingleProject = async (id) => {
  return apiClient.get(`/projects/${id}`); 
};

// Update a project
export const apiUpdateProjectStatus = async (id, statusData) => {
  return apiClient.patch(`/projects/${id}/status`, statusData);
};
