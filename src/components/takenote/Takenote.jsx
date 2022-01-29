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
  const [closed, setClosed] = useState(true);
  const [colour, setColour] = useState("#e0e0e0");
  const [archive, setArchive] = useState(false);

  //setting current colour data,passed in Icon
  const handleColour = (hex) => {
    console.log("take a note",hex);
    setColour(hex);
  };

  //setting current archive data,passed in Icon
  const handleArchive = () => {
    setArchive(true);
    console.log("take a note",archive);
  };
  console.log(archive);

  //setting current data
  const [data, setData] = useState({
    title: "",
    description: "",
    // colour: colour,
    // isArchived: archive,
    isDeleted: false,
  });

  const changedata = (e) => {
    setData((previousstate) => {
      return { ...previousstate, [e.target.name]: e.target.value };
    });
  };

  //when close is clicked
  const close = () => {
    //console.log(data);
    let notedata = {
      title: data.title,
      description: data.description,
      colour: colour,
      isArchived: archive,
      isDeleted: data.isDeleted,
    };

    //1.set current data
    setClosed(true);

    //2.send add note request
    service
      .addnotes(notedata)
      .then((result) => {
        //3.get notes
        props.getnote();
        console.log("Notes Saved", result);
      })
      .catch((err) => {
        console.log("Error In Saving Data", err);
      });
  };

  return (
    <div /* onClick={() => setClose(false)} */>
      {closed ? (
        <div className="newfirst" onClick={() => setClosed(false)}>
          <div className="newnote">Take A Note...</div>
          <div className="newicons">
            <div>
              <CheckBoxOutlinedIcon htmlColor="grey" />
            </div>
            <div>
              <BrushOutlinedIcon htmlColor="grey" />
            </div>
            <div>
              <InsertPhotoOutlinedIcon htmlColor="grey" />
            </div>
          </div>
        </div>
      ) : (
        <div className="newsecond" style={{ backgroundcolour: colour }}>
          <div>
            {" "}
            <TextareaAutosize
              name="title"
              placeholder="Title"
              className="text-area"
              rows="1"
              cols="50"
              onChange={(e) => changedata(e)}
            ></TextareaAutosize>
          </div>
          <div>
            {" "}
            <TextareaAutosize
              name="description"
              placeholder="Take A Note..."
              className="text-area"
              rows="10"
              cols="50"
              onChange={(e) => changedata(e)}
            ></TextareaAutosize>
          </div>

          {/* handle archive and colour */}
          <div className="newbutton">
            <Icons
              className="icons-set"
              mode="create"
              handleColour={handleColour}
              handleArchive={handleArchive}
            />
            <button className="closebutton" onClick={() => close()}>
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Takenote;
