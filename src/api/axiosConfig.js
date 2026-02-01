import axios from "axios";

export default axios.create({
  baseURL: "https://movie-swuu.onrender.com/api/v1/movies",
  headers: {
    "Content-Type": "application/json"
  }
});
