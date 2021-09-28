import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID k0gOCRIOpsMEMS08LJfSLdEyIMerEOxek5Zkpmvp0nY",
  },
});
