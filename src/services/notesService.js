import AxiosService from "./axiosService";

const service = new AxiosService();

let url = "http://localhost:9000";

const header = {
  headers: {
    token: localStorage.getItem("token"),
  },
};

const NotesService = {
  addnotes: (data) => {
    return service.postMethod(`${url}/notes/addnotes`, data, header);
  },
  getnotes: (data) => {
    return service.getMethod(`${url}/notes/notes`, header);
  },
  updatenotes: (data) => {
    return service.putMethod(`${url}/notes/update`, data, header);
  },
};

export default NotesService;
