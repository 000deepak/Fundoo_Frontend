import React, { useState } from "react";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import IconButton from "@mui/material/IconButton";
import Icons from "../icons/Icons";
import { Input } from "@mui/material";
import service from "../../services/notesService";
import "./takenote.scss";


function Takenote(props) {
    const [newNote, setNote] = useState(true)
    const [data, setData] = useState({
        title: '',
        description: '',
        colour:'',
        isArchived:'',
        isDeleted:'',
    })

    const changedata = (e) => {
        setData((previousstate) => {
            return { ...previousstate, [e.target.name]: e.target.value }
        })
    }


    const close = () => {
        let notedata = {
            "title": data.title,
            "description": data.description,
            "colour":"black",
            "isArchived":false,
            "isDeleted":false
        }
        setNote(true)
        service.addnotes(notedata).then(() => {
            props.getnote();
            console.log("sucess", notedata);
        }).catch((err) => {
            console.log(err,"error");
        })
    }

    return <div >
        {newNote ?
            <div className='newfirst' onClick={() => setNote(false)}>
                <div className='newnote'>Take a note...</div>
                <div className='newicons'>
                    <div><CheckBoxOutlinedIcon htmlColor="grey" /></div>
                    <div><BrushOutlinedIcon htmlColor="grey" /></div>
                    <div><InsertPhotoOutlinedIcon htmlColor="grey" /></div>
                </div>
            </div>
            :
            <div className='newsecond' >
                <div> <TextareaAutosize name="title" placeholder="Title"  className='text-area' rows="1" cols="50" onChange={(e) => changedata(e)} >
                    
                </TextareaAutosize></div>
                <div> <textarea name="description" placeholder="Take a note..."  className='text-area' rows="5" cols="50" onChange={(e) => changedata(e)} >
                </textarea></div>
                <div className='newbutton'>
                    <Icons className='icons-set' />
                    <button className='button-icon' onClick={() => close()}>close</button>
                </div>

            </div>
        }

    </div>;
}

export default Takenote;