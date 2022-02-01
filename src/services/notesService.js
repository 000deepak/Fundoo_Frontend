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
  getarchived: () => {
    console.log(header,"in get archived notes");
    return service.getMethod(`${url}/notes/archived`,header);
  },
  getdeleted: () => {
    console.log(header,"in get deleted notes");
    return service.getMethod(`${url}/notes/deleted`,header);
  },
};

export default NotesService;
