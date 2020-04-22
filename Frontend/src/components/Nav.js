import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ShopforAdmin from './Pages/ShopforAdmin'
import ShopforUsers from './Pages/ShopforUsers'
import ListProduct from './ListProduct'
import './LoginForm.css'


export default function Nav() {
  return (
    <Router >
      <div>
        <nav >
          <Navbar bg="dark" variant="light">
            
            <Navbar.Brand href="/"><img href="/" src="/logo-wi.PNG" width="125" class="round_image" /></Navbar.Brand>
            <Link type="button" class="button is-link is-inverted is-outlined" to="/">Home</Link>&nbsp;
            <Link type="button" class="button is-link is-inverted is-outlined" to="/ShopforUser">Shop</Link>&nbsp;
            <Link type="button" class="button is-link is-inverted is-outlined" to="/ShopforAdmin">Admin</Link>
            <div class="navbar-nav">
              <form class="form-inline mr-auto">
                <div class="md-form my-1">
                  <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                  <i class="fas fa-search text-white ml-3" aria-hidden="true"></i>
                </div>
              </form>
            </div>
          </Navbar>
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

