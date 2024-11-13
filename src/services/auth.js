import { apiClient } from "./config"


export const apiRegister = async (payload) => {
  const response = await fetch('https://step-beta-backend.onrender.com/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  return response;
};


export const apiLogin = async (payload) => {
  const response = await fetch('https://step-beta-backend.onrender.com/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  return {
    status: response.status,
    data: data
  };
};

export const getUserInfo = async (token) => {
  const response = await fetch('https://step-beta-backend.onrender.com/users/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  const data = await response.json();
  return {
    status: response.status,
    data: data
  };
};

