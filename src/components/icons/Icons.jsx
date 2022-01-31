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
  //------------------------------------------------Colour

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

  const [colr, setColr] = useState(null);

  const handleOpen = (event) => {
    setColr(event.currentTarget);
  };

  const handleClose = () => {
    setColr(null);
  };

  // const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;

  const changeColour = (hex) => {
    if (props.mode == "create") {
      props.handleColour(hex);

      console.log("create", hex);
    } else {
      console.log("updating colour to ", hex);

      props.note.colour = hex;

      props.note.noteId = props.note._id;

      console.log(props.note);

      updateNotes(props.note);
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

  let More = ["Delete note", "More"];

  const handleOpenMore = (e) => {
    setMore(e.currentTarget);
  };

  //close more
  const handleCloseMore = () => {
    setMore(false);
  };

  const changeMore = () => {
    console.log("More Delete");

    // let id = {"noteId":props.note._id}
    let id = {data:{"noteId":props.note._id}}
    service
      .deletenotes(id)
      .then((result) => {
        console.log(result);
        props.getnote(); //3.get notes(refresh display)
      })
      .catch((err) => {
        console.log("Error in Deleting Notes" + err);
      });
  };

  //------------------------------------------------More(END)

  //------------------------------------------------update

  //update notes in DB & display
  const updateNotes = (data) => {
    service
      //1.update notes
      .updatenotes(data)
      .then((result) => {
        props.getnote(); //3.get notes(refresh display)
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
      {/* colour */}
      <div>
        <IconButton>
          <ColorLensOutlinedIcon
            htmlColor="grey"
            variant="contained"
            // aria-describedby={id}
            onClick={handleOpen}
          />
          <Popover
            id={"colour"}
            open={Boolean(colr)}
            anchorEl={colr}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 1 }}>
              <div className="pallete">
                {hexColour.map((hex) => (
                  <div
                    className="icon-pop"
                    style={{ backgroundColor: hex }}
                    onClick={() => changeColour(hex)}
                  ></div>
                ))}
              </div>
            </Typography>
          </Popover>
        </IconButton>
      </div>

      <div>
        <IconButton>
          <PhotoOutlinedIcon htmlColor="grey" />
        </IconButton>
      </div>

      <div>
        {/* isArchived */}
        <IconButton onClick={() => changeArchive()}>
          <ArchiveOutlinedIcon htmlColor="grey" />
        </IconButton>
      </div>

      <div>
        {/* More */}
        <IconButton>
          <MoreVertOutlinedIcon
            htmlColor="grey"
            variant="contained"
            // aria-describedby={id}
            onClick={handleOpenMore}
          />
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
            {More.map((more) => (
              <MenuItem onClick={() => changeMore(more)}>{more}</MenuItem>
            ))}
          </Popover>
        </IconButton>
      </div>
    </div>
  );
}

export default Icons;
