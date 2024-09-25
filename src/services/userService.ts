import axios from "axios";

const API_URL = "http://localhost:3000/users"; // NestJS API URL

export interface User {
  id?: number;
  name: string;
  email: string; // Added email
  age: number; // Added age
  password?: string;
}

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(`${API_URL}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return response.data;
};

export const getUser = async (id: number): Promise<User> => {
  const response = await axios.get<User>(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return response.data;
};

export const createUser = async (user: User): Promise<User> => {
  const response = await axios.post<User>(`${API_URL}`, user, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return response.data;
};

export const updateUser = async (id: number, user: User): Promise<User> => {
  const response = await axios.put<User>(`${API_URL}/${id}`, user, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return response.data;
};

export const deleteUser = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
