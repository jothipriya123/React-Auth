import axios from 'axios'
import React, {Component} from 'react'

export default class Home extends Component{
    state = {};
    componentDidMount(){
        
        axios.get('users').then(
            res => {
                console.log(res);
                this.setState({
                    login:res.data,
                   
                })
                console.log("Login Details",res.data)
                console.log("User Details",this.state.login)
            },
            err => {
                console.log(err)
            }
        )
    }
    render(){
        
        if(this.state.login){
            return(
                <h2>Hi {this.state.login.email}</h2>
            )
        }
        return(
            <h2>You are not logged In</h2>
        )
    }
}