import React, { useState } from "react";

import Displaynote from "../../components/displaynote/Displaynote";
import Takenote from "../../components/takenote/Takenote";
import service from "../../services/notesService";

function Notes() {
    const [notesArr,setNotesArr]=useState([])
       React.useEffect(()=>{
        getNotes();
    },[])

    const getNotes = ()=>{
        service.getnotes().then((result)=>{
            setNotesArr(result.data.data);
            console.log(result.data.data);
            console.log("Notes Fetched");
        }).catch((err)=>{
            console.log("Error in fetching notes");
        })
    }
    return <div>
        <Takenote getnote={getNotes}/>
        <Displaynote notesArr={notesArr}/>
    </div>;
}

export default Notes;