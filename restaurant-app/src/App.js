import './App.css';
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
          <Nav.Item>
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/list">RestaurantList</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/create">RestaurantCreate</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/detail">RestaurantDetail</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/search">RestaurantSearch</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/update">RestaurantUpdate</Link></Nav.Link>
          </Nav.Item>
        </Nav>
       
        <Route path="/list"><RestaurantList /></Route>
        <Route path="/create"><RestaurantCreate /></Route>
        <Route path="/detail"><RestaurantDetail /></Route>
        <Route path="/update"><RestaurantUpdate /></Route>
        <Route path="/search"><RestaurantSearch /></Route>
        <Route exact path="/"><Home /></Route>
      </Router>
    </div>
  );
}

export default App;
