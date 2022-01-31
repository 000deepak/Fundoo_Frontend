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
  getnotes: () => {
    return service.getMethod(`${url}/notes/notes`, header);
  },
  updatenotes: (data) => {
    return service.putMethod(`${url}/notes/update`, data, header);
  },
  deletenotes: (data) => {
    console.log(header,data);
    return service.deleteMethod(`${url}/notes/delete`,{ data, header});
  },
};

export default NotesService;
