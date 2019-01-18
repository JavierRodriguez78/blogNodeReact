import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logoutUser} from '../../redux/actions/userActions';
import {Redirect} from 'react-router-dom';
class LogOut extends Component {

    state={
        Redirect: false
    };
    handleSubmit= async (e)=>{
        e.preventDefault();
      this.props.dispatch(logoutUser());
      this.setState(
          ()=>({Redirect:true})
          );
    };
    render() {
        if (this.state.Redirect === true){
            return <Redirect to='/login' />;
        }
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