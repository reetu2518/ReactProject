import './App.css';

import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantUpdate from './components/RestaurantUpdate';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantCreate from './components/RestaurantCreate';
import Login from './components/Login';
import Home from './components/Home';
import Logout from './components/Logout';
import Protected from './components/Protected';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>       
        {/* <Route path="/update/:id" render={props=>(
          <RestaurantUpdate {...props} />
        )}></Route> */}
        <Route path="/login" render={props=>(
          <Login {...props} />
        )}></Route>
        <Route path="/logout" render={props=>(
          <Logout {...props} />
        )}></Route>
        <Protected path="/update/:id" component={RestaurantUpdate}/>
        <Protected path="/detail" component={RestaurantDetail}/>
        <Protected path="/list" component={RestaurantList}/>
        <Protected path="/create" component={RestaurantCreate}/>
        <Protected path="/search" component={RestaurantSearch}/>
        <Protected exact path="/" component={Home}/>
      </Router>
    </div>
  );
}

export default App;