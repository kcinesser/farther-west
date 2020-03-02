import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import ScrollToTop from './components/Layout/ScrollToTop';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { NavbarWithRouter } from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

import Login from './components/Pages/Login/Login';
import Home from './components/Pages/Home/Home';
import Store from './components/Pages/Store/Store';
import Post from './components/Pages/Post/Post';
import Posts from './components/Pages/Post/Posts';

import Admin from './components/Pages/Admin/Admin';

import './styles/App.scss';
import AdminPosts from './components/Pages/Admin/AdminPosts';
import AdminPages from './components/Pages/Admin/AdminPages';
import AdminEvents from './components/Pages/Admin/AdminEvents';
import AdminProducts from './components/Pages/Admin/AdminProducts';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);

  // Decode token and get user info and exp
  const decoded = jwt_decode(token);

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds

  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <NavbarWithRouter />
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/store" exact component={Store} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/post/:id" exact component={Post} />
        <PrivateRouteWithLayout path="/admin" exact component={Admin} />
        <PrivateRouteWithLayout path="/admin/posts" exact component={AdminPosts} />
        <PrivateRouteWithLayout path="/admin/pages" exact component={AdminPages} />
        <PrivateRouteWithLayout path="/admin/events" exact component={AdminEvents} />
        <PrivateRouteWithLayout path="/admin/products" exact component={AdminProducts} />
        <Footer />
      </Router>
    </Provider>
  );
}

const PrivateRouteWithLayout = ({ component, ...rest }) => {
  return (
    <PrivateRoute {...rest} component={component} />
  );
};

export default App;
