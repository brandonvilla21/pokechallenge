import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "./constants";

export default <AxiosInstance>axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json"
  }
});
