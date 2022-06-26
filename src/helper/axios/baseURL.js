import axios from "axios";
const client = axios.create({
  baseURL: "https://todos.iran.liara.run/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  }
  , (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  // (response) => {
  //   return response;
  // }
  // , (error) => {
  //   if (error.response.status === 401 || error.response.status === 500) {
  //     localStorage.removeItem("token");
  //     window.location.href = "/login";
  //   }
  //   return Promise.reject(error);
  // }
);

    



export default client;
