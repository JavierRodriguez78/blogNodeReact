import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import Auth from './auth';

class Header extends Component
{
    render(){
        return(
            <div>
                <nav className="nav">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/getPost">Posts</NavLink>
                    {this.props.user.map((user) =>

                        ({user} ? <NavLink className="nav-link" to="/logout"> {user.username}</NavLink>:<Auth/>)

                    )}
                    </nav>

            </div>
        )
    }
}

const mapStateToProps=(state) =>{
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(Header);