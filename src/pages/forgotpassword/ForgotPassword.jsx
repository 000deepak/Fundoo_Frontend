import React, { Component } from "react";
import "../forgotpassword/forgotpassword.scss";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";

export class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      emailError: false,
    };
  }

  changeHandle = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validation = () => {
    let isError = false; //default is without error
    const error = this.state;
    error.emailError = this.state.email === "" ? true : false;
    this.setState({
      ...error,
    });

    // returns boolean
    return (
      //eg. if email is empty error.email is true and thus isError will be true
      (isError = error.emailError)
    );
  };

  next = () => {
    var validated = this.validation();
    if (validated) {
      console.log("Something Missing");
    } else {
      console.log("Validation completed");
    }
  };
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
                name="email"
                id="outlined-basic"
                label="Email "
                variant="outlined"
                fullWidth
                helperText="Enter your registered email"
                error={this.state.emailError}
                helperText={this.state.emailError ? "email required" : " "}
                onChange={(e) => this.changeHandle(e)}
              />
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="next-f">
          <p className="blue-f">Create account</p>
          <div className="button-f">
            <Button variant="contained" onClick={this.next}>
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
