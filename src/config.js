import axios from "axios";
const configuraciones = {
  configurar() {
    this.configurarAxios();
  },
  configurarAxios() {
    axios.defaults.baseURL = "http://localhost:8000/api/";
    axios.defaults.headers.post["Content-Type"] = "application/json";
  }
};
export default configuraciones;
