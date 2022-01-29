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

import service from "../../services/notesService";
import "./icons.scss";

function Icons(props) {
  const [colr, setColour] = useState(null);

  const handleOpenColour = (event) => {
    setColour(event.currentTarget);
  };

  const handleClose = () => {
    setColour(null);
  };

  const open = Boolean(colr);
  const id = open ? "simple-popover" : undefined;

  const changeColour = (hex) => {
    if (props.mode == "create") {
      props.handleColour(hex);
      console.log("create", hex);
    } else {
      console.log("update", hex);
      //console.log("hi icons", props);
      //props.note.colour = hex;
      //console.log("in change colour", props.note);
      // service
      //   .updatenotes(props.note)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log("Error in Updating" + err);
      //   });
      // props.getnote();
    }
  };

  const changeArchive = () => {
    if (props.mode == "create") {
      props.handleArchive();
      console.log("create archive");
    } else {
      console.log("update archive");
      // console.log("hi icons", props);
      //props.note.colour=hex;
      //console.log(props.note);
      // service
      //   .updatenotes(props.note)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log("Error in Updating" + err);
      //   });
      // props.getnote();
    }
  };

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

  return (
    <div className="icons">
      <IconButton>
        <AddAlertOutlinedIcon htmlColor="grey" />
      </IconButton>
      <IconButton>
        <PersonAddAlt1OutlinedIcon htmlColor="grey" />
      </IconButton>
      <IconButton>
        <PhotoOutlinedIcon htmlColor="grey" />
      </IconButton>

      {/* isArchived */}
      <IconButton>
        <ArchiveOutlinedIcon htmlColor="grey" onClick={changeArchive} />
      </IconButton>

      {/* More */}
      <IconButton>
        <MoreVertOutlinedIcon htmlColor="grey" />
      </IconButton>

      {/* colour */}
      <div>
        <IconButton>
          <ColorLensOutlinedIcon
            onClick={handleOpenColour}
            // variant="contained"
            // aria-describedby={id}
          />
          <Popover
            id="simple-popover"
            open={open}
            anchorEl={colr}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <div className="icon-popover">
              {hexColour.map((hex) => {
                return (
                  <div
                    className="icon-pop"
                    style={{ backgroundColor: hex }}
                    /* onClick={changeColour(hex)} */
                  ></div>
                );
              })}
            </div>
          </Popover>
        </IconButton>
      </div>
    </div>
  );
}

export default Icons;
