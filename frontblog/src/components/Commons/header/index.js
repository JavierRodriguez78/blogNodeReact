import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';

import IsLogged from '../../../services/localStorageService';


class Header extends Component
{
    
    constructor(props){
        super(props);
       this.state={user:null}
       
    }

    componentWillMount(){
        if(IsLogged()){
          
            this.setState({user : localStorage.getItem("User")});
        }
       
    }

    NavbarLinks(){
        
       if(this.state.user === null) {
       
        return (
              <nav className="nav">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/getPost">Posts</NavLink>
            <NavLink className="nav-link" to="/login">Login </NavLink>
                <NavLink className="nav-link" to="/register">Register</NavLink>
            </nav>
            

          )
       }else{
            let user = this.state.user;
           return(
           <nav className="nav">
               <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/getPost">Posts</NavLink>
               <NavLink className="nav-link" to="/logout">{user}</NavLink>
           </nav>
           )
       }
    }
   
     render(){
         
        return(
            <div>
                {this.NavbarLinks()}
                   

            </div>
        )
    }
}

export default Header;