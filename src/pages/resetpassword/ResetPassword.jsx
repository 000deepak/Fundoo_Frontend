import React, { Component } from "react";
import "../resetpassword/ResetPassword.scss";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import UserService from "../../services/userService";
const service = new UserService();

export class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      confirmPassword: "",
      passwordError: false,
      confirmPasswordError: false,
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

    error.passwordError = this.state.password === "" ? true : false;
    error.confirmPasswordError = this.state.confirmPassword === "" ? true : false;

    this.setState({
      ...error,
    });

    // returns boolean
    return (isError = error.passwordError || error.confirmPasswordError);
  };

  next = () => {
    var validated = this.validation();
    if (validated) {
      console.log("Something Missing");
    } else {
      console.log("Validation completed");
      if (this.state.password == this.state.confirmPassword) {
        let data = {
          confirmPassword: this.state.confirmPassword,
        };

        service
          .resetpassword(data)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  render() {
    return (
      <div className="main-page">
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
                <TextField
                  name="password"
                  id="outlined-basic"
                  label="New Password"
                  variant="outlined"
                  fullWidth
                  error={this.state.passwordError}
                  helperText={this.state.passwordError ? "Password required" : " "}
                  onChange={(e) => this.changeHandle(e)}
                />
              </div>

              <div className="new-r">
                <TextField
                  name="confirmPassword"
                  id="outlined-basic"
                  label="Confirm Password "
                  variant="outlined"
                  fullWidth
                  helperText="Atleast 8 characters"
                  error={this.state.confirmPasswordError}
                  helperText={this.state.confirmPasswordError ? "Confirm your password" : " "}
                  onChange={(e) => this.changeHandle(e)}
                />
              </div>
            </div>
          </div>
          <div className="save-r">
            <p className="blue-r">Skip</p>
            <div className="button-r">
              <Button variant="contained" onClick={this.next}>
                Save Password
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
