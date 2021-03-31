import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import CheckOut from './components/CheckOut/CheckOut'
import Admin from './components/AdminComponent/Admin'

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/checkout">
            <CheckOut />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
