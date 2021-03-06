import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash  } from '@fortawesome/free-solid-svg-icons';
import {
    Link
  } from 'react-router-dom'
  import NavMenu from './NavMenu';

class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list:null
        }
    }
    componentDidMount () {
        this.getData();
    }
    getData() {
        fetch("http://localhost:3000/restaurant").then((response)=>{
            response.json().then((result)=>{
                this.setState({list:result})
            })
        })
    }
    delete (id) {
        fetch("http://localhost:3000/restaurant/"+id,{
            method: "DELETE"
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Deleted Successfully!")
                this.getData();
            })
        })
    }
    render() {
        return (
            <div>
                <NavMenu />
                <h1>Restaurant List</h1>
                {this.state.list?
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Rating</th>
                                    <th>Address</th>
                                    <th>Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.list.map((item,i)=>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.rating}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} color="blue" /></Link>   &nbsp;&nbsp;
                                            <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /></span>
                                        </td>
                                    </tr>
                                    )
                                }                                
                            </tbody>
                        </Table>
                    </div>
                :
                null
                }
            </div>
        );
    }
}

export default RestaurantList;