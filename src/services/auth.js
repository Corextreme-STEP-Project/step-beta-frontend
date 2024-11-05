import { apiClient } from "./config"


export const apiLogin  = async (payload)  => {
    try {
    const response = await apiClient.post("/users/login", payload);

    return response.data;
}
catch (error) {
    const message = error.response?.data?.message || 'Login failed. Please try again.';
    throw new Error(message);
}

};