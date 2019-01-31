import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logoutUser} from '../../redux/actions/userActions';
import {Redirect} from 'react-router-dom';
class LogOut extends Component {

   
    handleSubmit= async (e)=>{
        e.preventDefault();
      this.props.dispatch(logoutUser());
       localStorage.removeItem("User");
          localStorage.removeItem("Bearer");
          window.location="/login";
    };
    render() {
                return (

            <div className="container">
              <form onSubmit={this.handleSubmit}>
                  <button>Salir</button>

              </form>

            </div>
        )
    }
};
export default connect()(LogOut);