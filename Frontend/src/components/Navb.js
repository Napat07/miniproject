import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import ShopforAdmin from './Pages/ShopforAdmin'
import ShopforUsers from './Pages/ShopforUsers'
import ListProduct from './ListProduct'
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css'
// This example show how you could create a custom
// <Link> that renders something special when the URL
// is the same as the one the <Link> points to.

export default function Navb() {
  return (
    <Router >
      <div>
        <div class = 'left'>
        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home"/>
        <OldSchoolMenuLink to="/ShopforUser" label="Users" />
        <OldSchoolMenuLink to="/ShopforAdmin" label="Admin" />
        </div>
        <hr />

        <Switch >
          <Route exact path="/">
            <ListProduct />
          </Route>
          <Route exact path="/ShopforAdmin">
            <ShopforAdmin />
          </Route>
          <Route path="/ShopforUser">
            <ShopforUsers />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className={match ? "active" : ""}>
      {match && "> "}
      <Link to={to}>{label}</Link>
    </div>
  );
}