import React, { Component } from "react";
import "../forgotpassword/forgotpassword.scss";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";

export class Signin extends Component {
  render() {
    return (
      <div className="forget-main">
        {/* main body */}
        <div className="forget-sub">
          <div className="fundoo-f">
            <p style={{ color: "blue" }}>F</p>
            <p style={{ color: "red" }}>u</p>
            <p style={{ color: "yellow" }}>n</p>
            <p style={{ color: "blue" }}>d</p>
            <p style={{ color: "green" }}>o</p>
            <p style={{ color: "red" }}>o</p>
          </div>

          <p className="title-f">Account Recovery</p>

          <div className="form-f">
            <p className="rec-f">To continue, first verify it’s you</p>

            <div className="email-f">
              <TextField
                id="outlined-basic"
                label="Email "
                variant="outlined"
                fullWidth
                helperText="Enter your registered email"
              />
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="next-f">
          <p className="blue-f">Create account</p>
          <div className="button-f">
            <Button variant="contained">Next</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
