import axios from "axios";

const token = "2f45f882d1fe23e98b9823064654c990e58eaa17";

export const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
