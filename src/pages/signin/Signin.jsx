import React, { Component } from "react";
import "../signin/signin.scss";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";

export class Signin extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-main">
          <div className="login-sub">
            <div className="fundoo">
              <p style={{ color: "blue" }}>F</p>
              <p style={{ color: "red" }}>u</p>
              <p style={{ color: "yellow" }}>n</p>
              <p style={{ color: "blue" }}>d</p>
              <p style={{ color: "green" }}>o</p>
              <p style={{ color: "red" }}>o</p>
            </div>

            <p className="sign-in">Sign In</p>

            <p className="use">Use Your Fundoo Account</p>

            <div className="form">
              <div className="email">
                <TextField id="outlined-basic" label="Your Email " variant="outlined" fullWidth />
              </div>

              <div className="blue">Forgot Email?</div>

              <div className="password">
                <TextField
                  id="outlined-basic"
                  label="Your Password "
                  variant="outlined"
                  fullWidth
                  helperText=" "
                />
              </div>

              <div className="blue">Forgot Password?</div>
            </div>

            <div className="guest">
              Not your computer? Use Guest mode to sign in privately.
              <a className="blue">Learn more </a>
            </div>
          </div>
          <div className="create">
            <p className="blue">Create Account</p>
            <div className="button">
              <Button variant="contained">Next</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
