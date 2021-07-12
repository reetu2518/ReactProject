import React, { Component } from 'react';
import {Table, Container, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash  } from '@fortawesome/free-solid-svg-icons';
import {
    Link
  } from 'react-router-dom';
import NavMenu from './NavMenu';
class RestaurantSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchData :null,
            noData : false,
            lastSearch : null
        }
    }
    search (key) {
        this.setState({lastSearch:key})
        fetch ('http://localhost:3000/restaurant?q='+key).then((result)=>{
             result.json().then((resp)=>{
                 if (resp.length>0) {
                     this.setState({searchData:resp, noData:false})
                 } else {
                     this.setState({searchData:null, noData:true})
                 }
             })
        })
    }
    delete (id) {
        fetch("http://localhost:3000/restaurant/"+id,{
            method: "DELETE"
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Deleted Successfully!")
                this.search(this.state.lastSearch)
            })
        })
    }
    render() {
        
        return (
            <Container>
                <NavMenu />
                <h1>Restaurant Search</h1>
                <Form.Control type="text" onChange={(e)=>this.search(e.target.value)} placeholder="Search"/>
                {
                    <div>
                        {
                            this.state.searchData?
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
                                    this.state.searchData.map((item)=>
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
                            : ""
                        }
                        {
                            this.state.noData? <h3>No data found</h3>:null
                        }
                    </div>
                }
            </Container>
        );
    }
}

export default RestaurantSearch;