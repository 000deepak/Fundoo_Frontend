import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Displaynote from "../../components/displaynote/Displaynote";
import Takenote from "../../components/takenote/Takenote";
import service from "../../services/notesService";
import "./notes.scss";

function Notes() {
  const [notesArr, setNotesArr] = useState([]);

  React.useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    service
      //1.get notes
      .getnotes()
      .then((result) => {
        //2.set current state
        setNotesArr(result.data.data);
        console.log(result.data.data);
        console.log("Notes Fetched", result);
      })
      .catch((err) => {
        console.log("Error in fetching notes", err);
      });
  };
  return (
    <div className="notesMain">
      <div className="takediv">
        <Takenote getnote={getNotes} />
      </div>
      <div className="displaydiv">
        <Displaynote notesArr={notesArr} className="dis" />
      </div>
    </div>
  );
}

export default Notes;
