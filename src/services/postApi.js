import client from '../helper/axios/baseURL';

export const postUserData = async (data) => {
  const response = await client.post('user/signup', data);
  return response.data;
};

export const postLoginData = async (data) => {
  const response = await client.post('user/login', data);
  return response.data;
};
