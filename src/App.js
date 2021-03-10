import React, {Component} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './components/Home'
import Nav from './components/Nav'
import Login from './components/Login'
import Register from './components/Register'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export default class App extends Component {
  render (){
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <div  className="auth-wrapper"><div className="auth-inner">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </Switch>
        </div></div>
      
    </div>
    </BrowserRouter>
  );
  }
}
