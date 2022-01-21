import React, { Component } from "react";
import "../signup/signup.scss";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";

export class Signup extends Component {
  render() {
    return (
      <div className="main-body">
        {/* left body */}
        <div className="left-body">
          <div className="Fundoo">
            <p style={{ color: "blue" }}>F</p>
            <p style={{ color: "red" }}>u</p>
            <p style={{ color: "yellow" }}>n</p>
            <p style={{ color: "blue" }}>d</p>
            <p style={{ color: "green" }}>o</p>
            <p style={{ color: "red" }}>o</p>
          </div>
          <div className="create">Create Your Fundoo Account</div>

          {/* form */}
          <div className="form-s">
            <div className="name-data">
              <div className="fname">
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  type="password"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className="lname">
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  type="password"
                  variant="outlined"
                  size="small"
                />
              </div>
            </div>
            <div className="email-data">
              <TextField
                id="outlined-basic"
                label="Email"
                size="small"
                type="email"
                variant="outlined"
                helperText="You can use letters,numbers and periods"
                fullWidth
              />
            </div>
            <div className="use_email">use my current email id instead</div>
            <div className="pass-data">
              <div className="password">
                <TextField
                  id="outlined-basic"
                  label="Password"
                  type="password"
                  helperText="Use 8 or more characters with a mix of letters, numbers & symbols"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </div>
              <div className="confirm">
                <TextField
                  id="outlined-basic"
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  size="small"
                />
              </div>
            </div>
          </div>

          {/* button */}
          <div className="next-s">
            <div className="sign-instead">
              <p>Sign in instead</p>
            </div>
            <div>
              <Button variant="contained">Next</Button>
            </div>
          </div>
        </div>

        {/* right body */}
        <div className="right-body-s">
          <figure class="image">
            <img
              src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
              alt=""
              width="244"
              height="244"
              class="j9NuTc TrZEUc"
            />
            <figcaption>One account. All of Google working for you.</figcaption>
          </figure>
        </div>
      </div>
    );
  }
}

export default Signup;

{
  /* <TextField id="outlined-basic" 
    id="outlined-basic"
    label="Confirm Password" 
    type="password" 
    variant="outlined" /> */
}
