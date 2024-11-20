
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

// Update project
export const apiUpdateProjectStatus = async (id, statusData) => {
  try {
    const response = await apiClient.patch(
      `/projects/${id}/status`,
      statusData,
      {
        headers: {
          'Content-Type': 'application/json',
         
        },
      }
    );
    
    return response;
    
  } catch (error) {
    console.error("Error in apiUpdateProjectStatus:", error);
    throw error; 
  }
};


// add milestone
export const apiAddMilestone = async (payload) => {
  const token = localStorage.getItem ("token");
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
};
return apiClient.post ("/milestone", payload,  { headers }); 
};

// for performance indicators compononents
// fetch milestones
export const apiGetMilestones = async () => {
return apiClient.get ("/milestone"); 
};

export const apiAddPerformanceIndicator = async (payload) => {
  // const token = localStorage.getItem ("token");
  const headers = {
    // Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
};
return apiClient.post ("/performanceindicator", payload,  { headers }); 
};

export const apiGetPerformanceIndicators = async () => {
  return apiClient.get ("/performanceindicator"); 
  };
  
export const apiPostDocument = async () => {
  return apiClient.post ("/documents"); 
  };