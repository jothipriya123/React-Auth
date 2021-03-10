import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class Nav extends Component{
  state = {};
    componentDidMount(){
        axios.get('users').then(
            res => {
                console.log(res);
                this.setState({
                  users:res.data,
                   
                })
                console.log("Login Details",res.data)
                console.log("User Details",this.state.users)
            },
            err => {
                console.log(err)
            }
        )
    }
    render(){
       /*  if(this.state.login){
        
        <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Link to={"/"} onClick={() =>localStorage.clear()} className="nav-link">Logout</Link></li>
        </ul>
console.log("Logout")
      }else{
        buttons =(
          <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Link to={"/login"} className="nav-link">Login</Link></li>
              <li className="nav-item"><Link to={"/register"} className="nav-link">Sign Up</Link></li>
          </ul>
        )
      }*/
        return(
        <nav className="navbar navbar-expand navbar-light fixed-top">
        <div className="container">
          <Link to={"/"} className="navbar-brand">Home</Link>
          <div className="collapse navbar-collapse">
            {(this.state.users) ?
            <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link to={"/"} onClick={() =>localStorage.clear()} className="nav-link">Logout</Link></li> 
            </ul>: 
            <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link to={"/login"} className="nav-link">Login</Link></li>
            <li className="nav-item"><Link to={"/register"} className="nav-link">Sign Up</Link></li>
            </ul>}
          </div>
        </div>
      </nav>
        )
    }   
}