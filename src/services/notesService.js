import AxiosService from "./axiosService";

const service = new AxiosService();

let url = 'http://localhost:9000';

const header = {
    headers: {
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRkZWVwYWtAZ21haWwuY29tIiwiaWQiOiI2MWYzYTljMGIzMGFlN2ZhMjg5MDE5ZTgiLCJpYXQiOjE2NDMzNjAzMjd9.sFQok_jyERMHbj6UeYivsquQmxTdyG184369of6u0tE",
        // token: localStorage.getItem("token"),
    },
}

const NotesService = {
    addnotes: (data) => {
        return service.postMethod(`${url}/notes/addnotes`, data, header)
    },
    getnotes: (data) => {
        return service.getMethod(`${url}/notes/notes`,header)
    }
}

export default NotesService;