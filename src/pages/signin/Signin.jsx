import React, { Component } from 'react';
import '../signin/signin.scss';
import { TextField } from '@material-ui/core';
import Button from '@mui/material/Button';
import UserService from '../../services/userService';
import auth from '../../components/auth/auth'
import { Navigate } from 'react-router-dom';


const service = new UserService();

export class Signin extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',

      emailError: false,
      passwordError: false,
      isLogdin:null

    };
  }

  changeHandle = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validation = () => {
    //default is without error
    let isError = false; 
    const error = this.state;

    error.emailError = this.state.email === '' ? true : false;
    error.passwordError = this.state.password === '' ? true : false;

    this.setState({
      ...error
    });

    // returns boolean
    return (
      (isError = error.emailError || error.passwordError)
    );
  };

  next = () => {
    var validated = this.validation();
   
    if (validated) {

      console.log('Something Missing');
    } else {
      console.log('Validation completed');
      let data = {
        email: this.state.email,
        password: this.state.password
      };

      service
        .signin(data)
        .then((res) => {
          console.log(res);
          localStorage.setItem('token', res.data.data.token);
          localStorage.setItem('firstName', res.data.data.fName);
          localStorage.setItem('lastName', res.data.data.lName);
          localStorage.setItem('email', res.data.data.email);
          this.setState({
            isLogdin: true
          })

        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    if(this.state.isLogdin ) 
    {
     return <Navigate to="/" />
    }
    return (
          
      <div className="main-page">
        <div className="login-main">
          <div className="login-sub">
            <div className="fundoo-l">
              <p style={{ color: 'blue' }}>F</p>
              <p style={{ color: 'red' }}>u</p>
              <p style={{ color: 'yellow' }}>n</p>
              <p style={{ color: 'blue' }}>d</p>
              <p style={{ color: 'green' }}>o</p>
              <p style={{ color: 'red' }}>o</p>
            </div>

            <p className="sign-in">Sign In</p>

            <p className="use-l">Use Your Fundoo Account</p>

            <div className="form-l">
              <div className="email-l">
                <TextField
                  name="email"
                  id="outlined-basic"
                  label="Your Email "
                  variant="outlined"
                  fullWidth
                  error={this.state.emailError}
                  helperText={this.state.emailError ? 'email required' : ' '}
                  onChange={(e) => this.changeHandle(e)}
                />
              </div>

              <div className="blue-l">Forgot Email?</div>

              <div className="password-l">
                <TextField
                  name="password"
                  id="outlined-basic"
                  label="Your Password "
                  variant="outlined"
                  type="password"
                  fullWidth
                  helperText=" "
                  error={this.state.passwordError}
                  helperText={this.state.passwordError ? 'Password required' : ' '}
                  onChange={(e) => this.changeHandle(e)}
                />
              </div>

              <div className="blue-l">Forgot Password?</div>
            </div>

            <div className="guest-l">
              Not your computer? Use Guest mode to sign in privately.
              <a className="blue-l">Learn more </a>
            </div>
          </div>
          <div className="create-l">
            <p className="blue-l">Create Account</p>
            <div className="button-l">
              <Button variant="contained" onClick={this.next}>
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
     
    );
  }
}

export default Signin;
