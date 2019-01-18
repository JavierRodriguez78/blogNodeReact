//Librerias
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';

//CSS
import './index.css';

//Containers
import App from './containers/App';
import Login from './containers/login';
import Notfound from './containers/Notfound';
import PostForm from './containers/postForm';
import AllPost from './containers/allPost';

//Redux
import  {createStore} from 'redux';
import { Provider } from 'react-redux';
import postReducer from './redux/reducers/postReducer';

//Componentes
import Header from './components/Commons/header';
import Footer from './components/Commons/footer';

const Store = createStore(postReducer);

const Routes=(

    <BrowserRouter>
        <Provider store={Store}>
        <Header/>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/addPost" component= {PostForm} exact />
            <Route path="/getPost" component={AllPost} exact />
            <Route path='*' component={Notfound} />
        </Switch>
        <Footer/>
        </Provider>
    </BrowserRouter>
)
ReactDOM.render(Routes,document.getElementById('root'));
