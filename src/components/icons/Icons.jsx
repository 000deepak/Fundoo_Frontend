import * as React from "react";
import IconButton from '@mui/material/IconButton';
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";

import "./icons.scss";

function Icons() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

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
      <IconButton>
        <ArchiveOutlinedIcon htmlColor="grey" />
      </IconButton>
      <IconButton>
        <MoreVertOutlinedIcon htmlColor="grey" />
      </IconButton>

      <div>
        <IconButton>
          <ColorLensOutlinedIcon
            htmlColor="grey"
            aria-describedby={id}
            type="button"
            onClick={handleClick}
          />
        </IconButton>
        <Popper id={id} style={{display: 'flex'}} open={open} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              {/* The content of the Popper. */}
              <div
                style={{
                  backgroundColor: "#f28b82",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              ></div>
              {/*  <div
                style={{
                  backgroundColor: "#fbbc04",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              ></div>
                 <div
                style={{
                  backgroundColor: "#fff475",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              ></div>
                <div
                style={{
                  backgroundColor: "#ccff90",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              ></div>
                <div
                style={{
                  backgroundColor: "#a7ffeb",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              ></div>
                <div
                style={{
                  backgroundColor: "#aecbfa",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              ></div>
                <div
                style={{
                  backgroundColor: "#d7aefb",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              ></div>
                 <div
                style={{
                  backgroundColor: "#e6c9a8",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              ></div> */}
            </Fade>
          )}
        </Popper>
      </div>
    </div>
  );
}

export default Icons;
