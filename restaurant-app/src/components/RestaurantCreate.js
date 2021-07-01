import React, { Component } from 'react';

class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name:null,
            email:null,
            rating:null,
            address:null
        }
    }
    create () {
        fetch("http://localhost:3000/restaurant",{
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Created Successfully!")
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Restaurant Create</h1>
                <input type="text" placeholder="Enter Name" onChange={(event)=>this.setState({name:event.target.value})}/> <br></br> <br></br>
                <input type="text" placeholder="Enter email" onChange={(event)=>this.setState({email:event.target.value})} /> <br></br> <br></br>
                <input type="text" placeholder="Enter rating" onChange={(event)=>this.setState({rating:event.target.value})} /> <br></br> <br></br>
                <input type="text" placeholder="Enter address" onChange={(event)=>this.setState({address:event.target.value})} /> <br></br> <br></br>
                <input type="button" value="Click Me" onClick={()=>{this.create()}}/> <br></br> <br></br>
            </div>
        );
    }
}

export default RestaurantCreate;