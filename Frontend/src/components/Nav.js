import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ShopforAdmin from './Pages/ShopforAdmin'
import ShopforUsers from './Pages/ShopforUsers'
import ListProduct from './ListProduct'
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css'

export default function Nav() {
  return (
    <Router >
      <div>
        <nav div class = 'left'>
              <Link type="button" class="button is-text"  to="/">Home</Link>
              

              <Link  type="button" class="button is-text" to="/ShopforUser">Users</Link>
 
              <Link  type="button" class="button is-text" to="/ShopforAdmin">Admin</Link>
        </nav>
        <Switch>
          <Route path="/ShopforUser">
            <ShopforUsers />
          </Route>
          <Route path="/ShopforAdmin">
            <ShopforAdmin />
          </Route>
          <Route path="/">
            <ListProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

