import React, { Component } from 'react';
import {Container, Form} from 'react-bootstrap';

class RestaurantSearch extends Component {
    constructor() {
        super()
        this.state = {
            name :"",
            password : ""
        }
    }
    login () {
        fetch ('http://localhost:3000/login?q='+this.state.name).then((result)=>{
             result.json().then((resp)=>{
                 if (resp.length>0) {
                    console.warn(this.props.history.push("list"))
                 } else {
                    alert("please check username aur password!")
                 }
             })
        })
    }
    render() {
        return (
            <Container>
                <h1>Login Here</h1>
                <Form.Control type="text" onChange={(e)=>this.setState({name:e.target.value})} placeholder="Name"/> <br></br>
                <Form.Control type="password" onChange={(e)=>this.setState({password:e.target.value})} placeholder="Password"/> <br></br>
                <button onClick={()=>this.login()}>Login</button> <br></br>
            </Container>
        );
    }
}

export default RestaurantSearch;