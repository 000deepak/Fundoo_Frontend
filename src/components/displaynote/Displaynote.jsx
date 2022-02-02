import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import service from '../../services/notesService';

import Icons from '../icons/Icons';
import './Displaynote.scss';

//------------------------------------------------DisplayNotePurpose
/**
 * 1.display notes from notes array
 * 2.open dialog on click of note
 * 3.internal routing for notes,archived and trash notes
 * 4.pass handle colour and handle archive to ICONS
 * 5.take current state from ICONS and simply hit update api
 */

//---------------------------------------------Dialog

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    width: theme.spacing(120)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
    width: theme.spacing(120)
  },

  '& .MuiDialog-paper': {
    maxWidth: '800px',
    fullWidth: 'true',
    maxWidth: 'md'
  },

  '& .MuiDialog': {
    maxWidth: '20sm',
    fullWidth: 'true',
    maxWidth: 'md'
  }
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
};

//---------------------------------------------Dialog(END)

let initialNote = {
  noteId: null,
  title: '',
  description: '',
  colour: null,
  isArchived: false,
  isDeleted: false
};

function Displaynote(props) {
  console.log(props, 'display props');
  //------------------------------------------DialogState
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (note) => {
    setOpen(true);

    console.log(note._id, 'noteId');

    setColour(note.colour);

    setArchive(note.isArchived);

    setData({
      noteId: note._id,
      title: note.title,
      description: note.description,
      colour: note.colour,
      isArchived: note.isArchived,
      isDeleted: note.isDeleted
    });
  };

  const handleClose = () => {
    setOpen(false);

    data.colour = colour;
    data.isArchived = archive;
    data.isDeleted = false;

    console.log(data);
    if (data.title) {
      //2.send update note request
      service
        .updatenotes(data)
        .then((result) => {
          //3.get notes(refresh display)
          props.getnote();
          setData({ ...initialNote });
          console.log('Notes Saved', result);
        })
        .catch((err) => {
          console.log('Error In Saving Data', err);
        });
    }
  };

  //------------------------------------------DialogState(END)

  //---------------------------------------------Update
  //setting current data
  const [data, setData] = useState(initialNote);

  const [colour, setColour] = useState(null);
  const [archive, setArchive] = useState(false);

  //setting current colour data,passed in Icon
  const handleColour = (hex) => {
    setColour(hex);
    console.log('take a note', hex);
  };

  //setting current archive data,passed in Icon
  const handleArchive = () => {
    setArchive(true);
    console.log('take a note', archive);
  };

  //setting curret note title & des
  const changedata = (e) => {
    setData((previousstate) => ({
      ...previousstate,
      [e.target.name]: e.target.value
    }));
  };

  //---------------------------------------------Update(END)

  return (
    <div className="main-display">
      {props.noteArr.map((item) => {
        if (true) {
          return (
            <div className="subContainer" style={{ backgroundColor: item.colour }}>
              <div className="title" onClick={() => handleClickOpen(item)}>
                {item.title}
              </div>
              <div className="notes" onClick={() => handleClickOpen(item)}>
                {' '}
                {item.description}
              </div>
              <div className="icons">
                {/* update grid notes Colour | isArchive | isDeleted*/}
                <Icons mode="update" note={item} getnote={props.getnote} />
              </div>
            </div>
          );
        }
      })}

      {/* update single notes  Title | Description*/}
      {/* dialog */}
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth="">
        <div className="dialog-display" style={{ backgroundColor: colour }}>
          <div>
            <TextareaAutosize
              name="title"
              placeholder="Title"
              className="text-area"
              style={{ backgroundColor: colour }}
              value={data.title}
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
              value={data.description}
              style={{ backgroundColor: colour }}
              rows="10"
              cols="50"
              onChange={(e) => changedata(e)}
            ></TextareaAutosize>
          </div>

          {/* update single notes Colour | isArchive | isDeleted */}
          {/* pass handle archive and colour to ICONS */}
          <div className="bottom">
            <Icons className="icons-set" mode="update" handleColour={handleColour} handleArchive={handleArchive} />
            <button className="closebutton" autoFocus onClick={handleClose} style={{ backgroundColor: colour }}>
              close
            </button>
          </div>
        </div>
      </BootstrapDialog>
    </div>
  );
}
export default Displaynote;
