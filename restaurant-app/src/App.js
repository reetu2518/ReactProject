import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faSearch, faHome, faPlus  } from '@fortawesome/free-solid-svg-icons'
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantUpdate from './components/RestaurantUpdate';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantCreate from './components/RestaurantCreate';
import Home from './components/Home';
import {Nav} from 'react-bootstrap'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <Nav.Item><Nav.Link><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link><Link to="/list"><FontAwesomeIcon icon={faList} /> List</Link></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link><Link to="/create"><FontAwesomeIcon icon={faPlus} /> Create</Link></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link><Link to="/search"><FontAwesomeIcon icon={faSearch} /> Search</Link></Nav.Link></Nav.Item>
          {/* <Nav.Item>
            <Nav.Link><Link to="/detail">RestaurantDetail</Link></Nav.Link>
          </Nav.Item> */}
        </Nav>
       
        <Route path="/list"><RestaurantList /></Route>
        <Route path="/create"><RestaurantCreate /></Route>
        <Route path="/detail"><RestaurantDetail /></Route>
        <Route path="/update/:id" render={props=>(
          <RestaurantUpdate {...props} />
        )}></Route>
        <Route path="/search"><RestaurantSearch /></Route>
        <Route exact path="/"><Home /></Route>
      </Router>
    </div>
  );
}

export default App;
