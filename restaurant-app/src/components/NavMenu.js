import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faSearch, faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import {Nav} from 'react-bootstrap'
import {
    Link
  } from 'react-router-dom'

class NavMenu extends Component {
    render() {
        return (
            <div>
                <Nav>
                    <Nav.Item><Nav.Link><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link><Link to="/list"><FontAwesomeIcon icon={faList} /> List</Link></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link><Link to="/create"><FontAwesomeIcon icon={faPlus} /> Create</Link></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link><Link to="/search"><FontAwesomeIcon icon={faSearch} /> Search</Link></Nav.Link></Nav.Item>
                    {
                        localStorage.getItem('login') ?
                        <Nav.Item><Nav.Link><Link to="/logout"><FontAwesomeIcon icon={faUser} /> Logout</Link></Nav.Link></Nav.Item>
                        :
                        <Nav.Item><Nav.Link><Link to="/login"><FontAwesomeIcon icon={faUser} /> Login</Link></Nav.Link></Nav.Item>
                    }
                    
                    
                    {/* <Nav.Item>
                    <Nav.Link><Link to="/detail">RestaurantDetail</Link></Nav.Link>
                    </Nav.Item> */}
                </Nav>
            </div>
        );
    }
}

export default NavMenu;