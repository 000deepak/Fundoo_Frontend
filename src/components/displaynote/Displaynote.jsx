import React, { useState } from "react";
import Icons from "../icons/Icons";
import IconButton from "@mui/material/IconButton";

import "./Displaynote.scss";

function Displaynote(props) {
  return props.notesArr.map((item, index) => {
    return (
      <div className="mainContainer">
        <div className="subContainer">
          <div className="title">{item.title}</div>
          <div className="notes"> {item.description}</div>
          <div className="icons" >
            <Icons mode="update" note={item} /* getnote={props.getnote}  */  />
          </div>
        </div>
      </div>
    );
  });
}
export default Displaynote;
