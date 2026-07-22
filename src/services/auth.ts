import { axiosInstance } from "../utils/axios";

export const loginUser = async (data: {
  email: string;
  password: string;
}) => {
  const res = await axiosInstance.post("/login", data);

  return res.data;
};

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await axiosInstance.post("/register", data);

  return res.data;
};

export const getMe = async () => {
  const res = await axiosInstance.get("/me");
  return res.data;
};

export const logoutUser = async () => {
  const res = await axiosInstance.post("/logout");
  return res.data;
};