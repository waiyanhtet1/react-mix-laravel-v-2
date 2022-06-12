import axios from "axios";

const ax = axios.create({
  baseURL: "https://testapi-laravel-react.000webhostapp.com/api/",
});

export default ax;
