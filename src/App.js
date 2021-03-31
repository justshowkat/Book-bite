import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CheckOut from "./components/CheckOut/CheckOut";
import Admin from "./components/AdminComponent/Admin";
import HomeNav from "./components/HomeNav/HomeNav";

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
              <HomeNav></HomeNav>
              <CheckOut />
            </Route>
            <Route exact path="/">
              <HomeNav></HomeNav>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
