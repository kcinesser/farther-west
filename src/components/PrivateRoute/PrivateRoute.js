import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Sidebar from "../Pages/Admin/Sidebar";

const PrivateRoute = ({ component: Component, auth, text, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
          <div className="admin">
            <Sidebar />
            <div className="admin-content">
              <Component {...props} />
            </div>
          </div>
      ) : (
          <Redirect to="/login" />
        )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);