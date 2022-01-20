import React, { Component } from "react";
import '../signup/signup.css'
import { TextField } from "@material-ui/core";


export class Signup extends Component {
    render() {
        return (
            <div className="main-body">
                <div className="page">
                    <div className="left-part">
                        <div className="fundoo">
                            <p style={{ color: 'blue' }} >F</p>
                            <p style={{ color: 'red' }}>u</p>
                            <p style={{ color: 'yellow' }}>n</p>
                            <p style={{ color: 'blue' }}>d</p>
                            <p style={{ color: 'green' }}>o</p>
                            <p style={{ color: 'red' }}>o</p>
                        </div>
                        <br></br>
                        <p className="create_account">Create your fundoo account</p>
                        <br></br>
                        <div className="name">
                            <div className="firstName">
                                <TextField id="outlined-basic" label="First Name" variant="outlined" />
                            </div>
                            <div className="lastName">
                                <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                            </div>
                        </div>
                        <br></br>
                        <TextField id="outlined-basic" label="Your Email address" variant="outlined" fullWidth helperText="You can use letters,numbers  & periods" />
                        <br></br>
                        <br></br>
                        <div className="passLine">
                            <div className="password">
                                <TextField id="outlined-basic" label="Password" type="password" variant="outlined" />
                            </div>
                            <div className="c-password">
                                <TextField id="outlined-basic" label="Confirm Password" type="password" variant="outlined" />
                            </div>
                        </div>
                        <p className="pass-rule">Password should contain letters,numbers and special characters.</p>
                        <div className="showpassword">
                            <input className="checkbox1" type="checkbox"></input>
                            <p className="showbox">Show Password</p>
                        </div>
                        <div className="sign-in">
                            <p className="signin">Sign in Instead</p>
                            <p className="next">
                                <button className="next_button">Next</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup