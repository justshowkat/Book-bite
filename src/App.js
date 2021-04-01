import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CheckOut from "./components/CheckOut/CheckOut";
import Admin from "./components/AdminComponent/Admin";
import HomeNav from "./components/HomeNav/HomeNav";
import { useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import { homeContext } from "./components/Context/Context";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AdminNav from "./components/AdminNav/AdminNav";
import ManageProduct from "./components/ManageProduc/ManageProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import AddProduct from "./components/AddProduct/AddProduct";

function App() {
  const [checkOut, setCheckOut] = useState([])
  const [user, setUser] = useState({})
//  run this command firebase deploy
  return (
    <homeContext.Provider value={[checkOut, setCheckOut, user, setUser]} className="App">
      <Router>
        <div>
          <Switch>
            <PrivateRoute path="/admin">
              <AdminNav></AdminNav>
              <Admin />
            </PrivateRoute>
            <PrivateRoute path="/manage-product">
              <AdminNav></AdminNav>
              <ManageProduct></ManageProduct>
            </PrivateRoute>
            <PrivateRoute path="/edit-product">
              <AdminNav></AdminNav>
              <EditProduct></EditProduct>
            </PrivateRoute>
            <PrivateRoute path="/add-product">
              <AdminNav></AdminNav>
              <AddProduct></AddProduct>
            </PrivateRoute>
            <PrivateRoute path="/checkout">
              <HomeNav></HomeNav>
              <CheckOut />
            </PrivateRoute>
            <PrivateRoute path="/singleProduct">
              <HomeNav></HomeNav>
              <ProductCard />
            </PrivateRoute>
            <Route path="/login">
              <HomeNav></HomeNav>
              <Login></Login>
            </Route>
            <Route exact path="/">
              <HomeNav></HomeNav>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </homeContext.Provider>
  );
}

export default App;
