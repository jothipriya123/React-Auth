import axios from 'axios'
import React, {Component} from 'react'

export default class Home extends Component{
    state = {};
    componentDidMount(){
        
        axios.get('users').then(
            res => {
                console.log("Res",res);
                this.setState({
                    users:res.data,
                    first_name:res.data[0].first_name,
                })
                console.log("First Name",this.state.first_name)
                console.log("User Details",this.state.users)
            },
            err => {
                console.log(err)
            }
        )
    }
    render(){
        console.log("Insite Render",this.state.users);
        if(this.state.users){
            console.log("Inside if Logged  In",this.state.users);
            return(<h2>Welcome {this.state.first_name}</h2>)
        }else{
            console.log("Logged Out",this.state.users);
            return(<h2>You are not logged In</h2>)
        }
    }
}