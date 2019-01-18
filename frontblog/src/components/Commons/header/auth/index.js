import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Auth extends Component
{
    render(){
        return(
            <div>
                <NavLink className="nav-link" to="/login">Login </NavLink>
                <NavLink className="nav-link" to="/register">Register</NavLink>
            </div>
        )
    }
}

export default Auth;