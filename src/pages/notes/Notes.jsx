import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Displaynote from '../../components/displaynote/Displaynote';
import Takenote from '../../components/takenote/Takenote';
import service from '../../services/notesService';
import context from '../../components/context/NoteContext';

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
        let filtered= result.data.data.filter(note=>note.isArchieved!==true && note.isDeleted!==true)
        setNotesArr(filtered);
        console.log('Notes Fetched filtered', filtered);
        console.log('Notes Response',result.data.data);

      })
      .catch((err) => {
        console.log('Error in fetching notes', err);
      });
  };
  return (
    <context.Provider value={getNotes}>
      <Takenote getnote={getNotes} />
      <Displaynote noteArr={notesArr} getnote={getNotes} />
    </context.Provider>
  );
}

export default Notes;
