import { axiosInstance } from "../utils/axios";

export const createApplication = async (data: any) => {
  const res = await axiosInstance.post("/applications", data);

  return res.data;
};

export const getApplications = async () => {
  const res = await axiosInstance.get("/applications");

  return res.data;
};

export const getSingleApplication = async (id: string) => {
  const res = await axiosInstance.get(`/applications/${id}`);

  return res.data;
};

export const updateApplication = async (
  id: string,
  data: any
) => {
  const res = await axiosInstance.patch(
    `/applications/${id}`,
    data
  );

  return res.data;
};

export const deleteApplication = async (id: string) => {
  const res = await axiosInstance.delete(
    `/applications/${id}`
  );

  return res.data;
};