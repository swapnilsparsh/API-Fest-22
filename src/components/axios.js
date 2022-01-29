import axios from "axios";

const instance = axios.create({
  baseURL: "https://community-info-api.herokuapp.com",
});

instance.get("/posts");

export default instance;
