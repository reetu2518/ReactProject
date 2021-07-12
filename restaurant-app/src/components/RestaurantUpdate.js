import React, { Component } from 'react';
import NavMenu from './NavMenu';
class RestaurantUpdate extends Component {
    constructor() {
        super();
        this.state = {
            list:null,
            name:null,
            email:null,
            rating:null,
            address:null,
            id: null
        }
    }
    componentDidMount () {
        fetch("http://localhost:3000/restaurant/"+this.props.match.params.id).then((response)=>{
            response.json().then((result)=>{
                console.warn("result"+result);
                this.setState({
                    name:result.name,
                    email:result.email,
                    rating:result.rating,
                    address:result.address,
                    id: result.id
                })
            })
        })
    }
    update () {
        fetch("http://localhost:3000/restaurant/"+this.state.id,{
            method: "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("updated Successfully!")
                window.location.reload();
            })
        })
    }
    render() {
        return (
            <div>
                <NavMenu />
                <h1>Restaurant Update</h1>
                <input type="text" placeholder="Enter Name" value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})}/> <br></br> <br></br>
                <input type="text" placeholder="Enter email" value={this.state.email} onChange={(event)=>this.setState({email:event.target.value})} /> <br></br> <br></br>
                <input type="text" placeholder="Enter rating" value={this.state.rating} onChange={(event)=>this.setState({rating:event.target.value})} /> <br></br> <br></br>
                <input type="text" placeholder="Enter address" value={this.state.address} onChange={(event)=>this.setState({address:event.target.value})} /> <br></br> <br></br>
                <input type="button" value="Update Restaurant" onClick={()=>{this.update()}}/> <br></br> <br></br>
            </div>
        );
    }
}

export default RestaurantUpdate;