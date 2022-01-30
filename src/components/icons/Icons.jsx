import * as React from "react";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import MenuItem from "@material-ui/core/MenuItem";
import service from "../../services/notesService";
import "./icons.scss";

function Icons(props) {
  //------------------------------------------------popper

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  //------------------------------------------------popper(END)

  //------------------------------------------------Colour

  const [colr, setColour] = useState(null);

  let hexColour = [
    "#f28b82",
    "#fbbc04",
    "#fff475",
    "#ccff90",
    "#a7ffeb",
    "#cbf0f8",
    "#aecbfa",
    "#d7aefb",
    "#fdcfe8",
    "#e6c9a8",
  ];

  const changeColour = (hex) => {
    if (props.mode == "create") {
      props.handleColour(hex);
      console.log("create", hex);
    } else {
      console.log("update", hex);

      // updateNotes(data);
    }
  };
  //------------------------------------------------Colour(END)

  //------------------------------------------------Archive

  const changeArchive = () => {
    if (props.mode == "create") {
      props.handleArchive();
      console.log("create archive");
    } else {
      console.log("update archive");

      props.note.isArchived = true;

      props.note.noteId = props.note._id;

      updateNotes(props.note);
    }
  };
  //------------------------------------------------Archive(END)

  //------------------------------------------------More

  const [more, setMore] = useState(false);

  let More = ["Delete note"];

  const handleOpenMore = (e) => {
    setMore(e.currentTarget);
  };

  //close more
  const handleCloseMore = () => {
    setMore({
      more: false,
    });
  };

  const handleMore = () => {
    console.log("More Delete");
    // delete-part

    // noteService.deleteNote(data)
    // .then(res =>{
    //     console.log(res)
    //     this.props.updateNote()
    // })
    // .catch(err =>{
    //     console.log( "U have an Error ->" + err)
    // })
  };

  //------------------------------------------------More(END)

  //------------------------------------------------update

  //update notes in DB & display
  const updateNotes = (data) => {
    service
      //1.update notes
      .updatenotes(data)
      .then((result) => {
        //2.set current state
        // setNotesArr(result.data.data);
        //props.getnote();
        console.log("Notes Updated", result);
      })
      .catch((err) => {
        console.log("Error in Updating notes", err);
      });
  };

  //------------------------------------------------update(END)

  return (
    <div className="icons">
      <div>
        <IconButton>
          <AddAlertOutlinedIcon htmlColor="grey" />
        </IconButton>
      </div>
      <div>
        <IconButton>
          <PersonAddAlt1OutlinedIcon htmlColor="grey" />
        </IconButton>
      </div>

      <div>
        <IconButton>
          <PhotoOutlinedIcon htmlColor="grey" />
        </IconButton>
      </div>

      <div>
        {/* isArchived */}
        <IconButton onClick={changeArchive}>
          <ArchiveOutlinedIcon htmlColor="grey" />
        </IconButton>
      </div>

      <div>
        {/* More */}
        <IconButton>
          <MoreVertOutlinedIcon onClick={handleOpenMore} />
          <Popover
            id="simple-menu"
            anchorEl={more}
            keepMounted
            open={Boolean(more)}
            onClose={handleCloseMore}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            {More.map((more, index) => (
              <MenuItem onClick={() => handleMore(more)}>{more}</MenuItem>
            ))}
          </Popover>
        </IconButton>
      </div>

      {/* colour */}
      <div>
        <IconButton>
          <ColorLensOutlinedIcon
            htmlColor="grey"
            onClick={handleOpen}
            variant="contained"
            aria-describedby={id}
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 1 }}>
              <div className="icon-popover">
                {hexColour.map((hex) => {
                  return (
                    <div
                      className="icon-pop"
                      style={{ backgroundColor: hex }} /* onClick={changeColour()} */
                    ></div>
                  );
                })}
              </div>
            </Typography>
          </Popover>
        </IconButton>
      </div>
    </div>
  );
}

export default Icons;
