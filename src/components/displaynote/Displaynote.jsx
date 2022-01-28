import React, { useState } from "react";
import Icons from "../icons/Icons";
import "./Displaynote.scss";

function Displaynote(props) {
  if (props.notesArr) {
    return props.notesArr.map((item, index) => {
      return (
        <div className="main">
          <div className="sub">
            <div className="title">{item.title}</div>
            <div className="notes"> {item.description}</div>
            <div className="icons">
              <Icons />
            </div>
          </div>
        </div>
      );
    });
  }
}
export default Displaynote;
