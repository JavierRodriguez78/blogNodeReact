import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../../redux/actions/userActions';
import userService from "../../services/usersService";
import {Redirect} from 'react-router-dom';

class Login extends Component {
   
    handleSubmit= async (e)=>{
        e.preventDefault();
        let email = this.getEmail.value;
        let pass = this.getPass.value;
        const Data={
            email,
            pass
        }
        const UserService = new userService();
        let result = await UserService.loginUser(Data);
         localStorage.setItem("Bearer",result.data.token);
        localStorage.setItem("User", result.data.username);
        this.props.dispatch(loginUser(result));
         window.location="/addPost";

    };
    render() {
       
        return (
            <div className="container">
                <div className="row">
                    <h2><strong>Bootstrap input show password value By </strong> <a href="https://goo.gl/pR8ito"
                                                                                    target="_blank">Nababur</a> <br/>
                    </h2><br/>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter email"
                                       ref={(input)=>this.getEmail = input}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" name="password" id="password"
                                       placeholder="Password"
                                       ref={(input)=>this.getPass = input}/>
                            </div>
                            <div className="form-check">
                                <button className="btn btn-info" type="button" name="showpassword" id="showpassword"
                                        value="Show Password">Show password
                                </button>
                                <button className="btn btn-primary">Submit</button>
                            </div>

                        </form>



                    </div>


                </div>
            </div>
        )
    }
};
export default connect()(Login);