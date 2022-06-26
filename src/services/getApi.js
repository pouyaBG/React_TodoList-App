import client from "../helper/axios/baseURL";

export const getTodos = async () => {
  const response = await client.get("/user/todos");
  return response.data;
};

