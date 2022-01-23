import axios from "axios";

class AxiosService {
    postMethod(url, data, headers = false) {
        return axios.post(url, data, headers)
    }

}

export default AxiosService