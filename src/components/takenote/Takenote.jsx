import React, { useContext, useState } from 'react';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import IconButton from '@mui/material/IconButton';
import Icons from '../icons/Icons';
import { Input } from '@mui/material';
import service from '../../services/notesService';
import './takenote.scss';
import noteContext from '../context/NoteContext';

const initialNote = {
  title: '',
  description: '',
  colour: null,
  isArchived: false,
  isDeleted: false
};

function Takenote(props) {
  const [closed, setClosed] = useState(true);
  const [colour, setColour] = useState(null);
  const [archive, setArchive] = useState(false);

  //useContext
  const getNotes = useContext(noteContext);

  //setting current colour data,passed in Icon
  const handleColour = (hex) => {
    setColour(hex);
    console.log('update note', hex);
  };

  //setting current archive data,passed in Icon
  const handleArchive = () => {
    setArchive(true);
    console.log('update note', archive);
  };

  //setting current data
  const [data, setData] = useState(initialNote);

  const changedata = (e) => {
    setData((previousstate) => ({
      ...previousstate,
      [e.target.name]: e.target.value
    }));
  };

  //when close is clicked
  const close = () => {
    let notedata = {
      title: data.title,
      description: data.description,
      colour: colour,
      isArchived: archive,
      isDeleted: data.isDeleted
    };

    //1.set current data
    setClosed(true);

    if (data.title) {
      //2.send add note request
      service
        .addnotes(notedata)
        .then((result) => {
          //3.get notes(refresh display)
          getNotes();
          console.log('At context');
          setData({ ...initialNote });
          setColour(null);
          console.log('Notes Saved', result);
        })
        .catch((err) => {
          console.log('Error In Saving Data', err);
        });
    }
  };

  return (
    <div className='takeMain'>
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
        <div className="newsecond" style={{ backgroundColor: colour }}>
          <div>
            <TextareaAutosize
              name="title"
              placeholder="Title"
              className="text-area"
              style={{ backgroundColor: colour }}
              rows="1"
              cols="50"
              onChange={(e) => changedata(e)}
            ></TextareaAutosize>
          </div>
          <div>
            <TextareaAutosize
              name="description"
              placeholder="Take A Note..."
              className="text-area"
              style={{ backgroundColor: colour }}
              rows="10"
              cols="50"
              onChange={(e) => changedata(e)}
            ></TextareaAutosize>
          </div>

          {/* handle archive and colour */}
          <div className="take-bottom">
            <Icons className="take-icons" mode="create" handleColour={handleColour} handleArchive={handleArchive} />
            <button className="take-close" onClick={() => close()} style={{ backgroundColor: colour }}>
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Takenote;
