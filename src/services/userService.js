import AxiosService from "./axiosService";

const service = new AxiosService();

let baseUrl = "http://localhost:9000/";

const header = {
  headers: {
    token: localStorage.getItem("token"),
  },
};

class UserService {
  registration(data) {
    return service.postMethod(`${baseUrl}users/register`, data);
  }

  signin(data) {
    return service.postMethod(`${baseUrl}users/login`, data);
  }

  forgotpassword(data) {
    return service.postMethod(`${baseUrl}users/forgotpassword`, data);
  }

  resetpassword(data) {
    return service.putMethod(`${baseUrl}users/resetpassword`, data, header);
  }
}

export default UserService;
