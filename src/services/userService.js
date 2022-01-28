import AxiosService from "./axiosService";

const service = new AxiosService();

let baseUrl = 'http://localhost:9000/';

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
}

export default UserService;
