//Librerias
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, NavLink, Redirect} from 'react-router-dom';


//CSS
import './index.css';

//Containers
import App from './containers/App';
import Login from './containers/login';
import Notfound from './containers/Notfound';
import PostForm from './containers/postForm';
import AllPost from './containers/allPost';
import LogOut from './containers/logout';

//Redux
import  {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import postReducer from './redux/reducers/postReducer';
import userReducer from './redux/reducers/userReducer';

//Componentes
import Header from './components/Commons/header';
import Footer from './components/Commons/footer';

const RootReducer = combineReducers({post:postReducer,user: userReducer})
const Store = createStore(RootReducer);



const IsLogged=()=>{
    let user = localStorage.getItem("User");
    
    if(user) return true;
    return false;

}

const verifyRoute=(Component)=>{
    
    return (IsLogged()) ? <Component />: <Redirect to="/login" />

}

const anonymRoute=(Component)=>{
    return <Component />
}
const Routes=(

    <BrowserRouter>
        <Provider store={Store}>
        <Header/>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/addPost" render = {()=>verifyRoute(PostForm)} exact />
            <Route path="/getPost" render={()=>anonymRoute(AllPost)} exact />
            <Route path="/logout" component={LogOut} exact />
            <Route path='*' component={Notfound} />
        </Switch>
        <Footer/>
        </Provider>
    </BrowserRouter>
)
ReactDOM.render(Routes,document.getElementById('root'));
