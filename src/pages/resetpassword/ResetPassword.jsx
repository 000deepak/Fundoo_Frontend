import React, { Component } from "react";
import "../resetpassword/ResetPassword.scss";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";

export class Signin extends Component {
  render() {
    return (
      <div className="reset-main">
        <div className="reset-sub">
          <div className="fundoo-r">
            <p style={{ color: "blue" }}>F</p>
            <p style={{ color: "red" }}>u</p>
            <p style={{ color: "yellow" }}>n</p>
            <p style={{ color: "blue" }}>d</p>
            <p style={{ color: "green" }}>o</p>
            <p style={{ color: "red" }}>o</p>
          </div>

          <p className="title-r">Change Password</p>

          <div className="form-r">
            <p className="rec1">Create a strong password</p>

            <p className="rec2">
              Create a new strong password that you dont use for other websites
            </p>

            <div className="new-r">
              <TextField id="outlined-basic" label="New Password" variant="outlined" fullWidth />
            </div>

            <div className="new-r">
              <TextField
                id="outlined-basic"
                label="Confirm Password "
                variant="outlined"
                fullWidth
                helperText="Atleast 8 characters"
              />
            </div>
          </div>
        </div>
        <div className="save-r">
          <p className="blue-r">Skip</p>
          <div className="button-r">
            <Button variant="contained">Save Password</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
