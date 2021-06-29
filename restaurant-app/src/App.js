import './App.css';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantUpdate from './components/RestaurantUpdate';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantCreate from './components/RestaurantCreate';
import Home from './components/Home';

import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/list">RestaurantList</Link></li>
            <li><Link to="/create">RestaurantCreate</Link></li>
            <li><Link to="/detail">RestaurantDetail</Link></li>
            <li><Link to="/search">RestaurantSearch</Link></li>
            <li><Link to="/update">RestaurantUpdate</Link></li>
          </ul>
          <Route path="/list"><RestaurantList/></Route>
          <Route path="/create"><RestaurantCreate/></Route>
          <Route path="/detail"><RestaurantDetail/></Route>
          <Route path="/update"><RestaurantUpdate/></Route>
          <Route path="/search"><RestaurantSearch/></Route>
          <Route exact path="/"><Home/></Route>
        </Router>
    </div>
  );
}

export default App;
