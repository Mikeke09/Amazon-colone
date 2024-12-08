import axios from "axios";

const axiosInstance = axios.create({
  // firebase deployed
  // baseURL : "https://api-gzaowg74wq-uc.a.run.app"
  //  using render
  baseURL: "https://us-central1-clone-68e92.cloudfunctions.net/api",
});

export { axiosInstance };
