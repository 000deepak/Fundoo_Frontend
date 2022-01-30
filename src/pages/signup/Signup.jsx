import React, { Component } from "react";
import "../signup/signup.scss";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import UserService from "../../services/userService";
const service = new UserService();

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirmPassword: "",

      first_nameError: false,
      last_nameError: false,
      emailError: false,
      passwordError: false,
      confirmPasswordError: false,
    };
  }

  changeHandle = (e) => {
    console.log(e);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validation = () => {
    let isError = false; //default is without error
    const error = this.state;
    error.first_nameError = this.state.first_name === "" ? true : false;
    error.last_nameError = this.state.last_name === "" ? true : false;
    error.emailError = this.state.email === "" ? true : false;
    error.passwordError = this.state.password === "" ? true : false;
    error.confirmPasswordError = this.state.confirmPassword === "" ? true : false;

    this.setState({
      ...error,
    });

    // returns boolean
    return (
      //eg. if email is empty error.emailError is true and thus isError will be true
      (isError =
        error.first_nameError ||
        error.emailError ||
        error.last_nameError ||
        error.passwordError ||
        error.confirmPasswordError)
    );
  };

  next = () => {
    var validated = this.validation();
    if (validated) {
      console.log("Something Missing");
    } else {
      console.log("Validation completed");
      let data = {
        fName: this.state.first_name,
        lName: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
      };

      service
        .registration(data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div className="main-page">
        <div className="main-body">
          {/* left body */}
          <div className="left-body">
            <div className="fundoo-s">
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
                <div className="name">
                  <TextField
                    name="first_name"
                    id="outlined-basic"
                    label="First Name"
                    type="text"
                    variant="outlined"
                    autoFocus={true}
                    fullWidth
                    size="small"
                    error={this.state.first_nameError}
                    helperText={this.state.first_nameError ? "First Name required" : " "}
                    onChange={(e) => this.changeHandle(e)}
                  />
                </div>
                <div className="name">
                  <TextField
                    name="last_name"
                    id="outlined-basic"
                    label="Last Name"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={this.state.last_nameError}
                    helperText={this.state.last_nameError ? "Last Name required" : " "}
                    onChange={(e) => this.changeHandle(e)}
                  />
                </div>
              </div>
              <div className="email-data">
                <TextField
                  name="email"
                  id="outlined-basic"
                  label="Email"
                  size="small"
                  type="text"
                  variant="outlined"
                  helperText="You can use letters,numbers and periods"
                  fullWidth
                  error={this.state.emailError}
                  helperText={
                    this.state.emailError
                      ? "email required"
                      : "You can use letters,numbers and periods"
                  }
                  onChange={(e) => this.changeHandle(e)}
                />
              </div>
              <div className="use_email">use my current email id instead</div>
              <div className="pass-data">
                <div className="password">
                  <TextField
                    name="password"
                    id="outlined-basic"
                    label="Password"
                    type="password"
                    // helperText="Use 8 or more characters with a mix of letters, numbers & symbols"
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={this.state.passwordError}
                    helperText={this.state.passwordError ? "Password required" : " "}
                    onChange={(e) => this.changeHandle(e)}
                  />
                </div>
                <div className="password">
                  <TextField
                    name="confirmPassword"
                    id="outlined-basic"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={this.state.confirmPasswordError}
                    helperText={this.state.confirmPasswordError ? "Confirm your password" : " "}
                    onChange={(e) => this.changeHandle(e)}
                  />
                </div>
              </div>
              {/* <div className="pass-suggest">Use 8 or more characters with a mix of letters, numbers & symbols</div> */}
            </div>

            {/* button */}
            <div className="next-s">
              <div className="sign-instead">
                <p>Sign in instead</p>
              </div>
              <div className="button-s">
                <Button variant="contained" onClick={this.next}>
                  Next
                </Button>
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
      </div>
    );
  }
}

export default Signup;
