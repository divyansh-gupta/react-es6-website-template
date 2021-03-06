import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export default class Header extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div id="navbar-collapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              {this.renderUserControls()}
            </ul>
            <ul className="nav navbar-nav navbar-right">
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  renderUserControls = () => {
    return this.props.isAuthenticated ? this.renderLoggedInUser() : this.renderloggedOutUser();
  }

  renderLoggedInUser = () => {
    return (<li><Link to="/profile">Profile</Link></li>);
  }

  renderloggedOutUser = () => {
     return (<li><Link to="/login">Login</Link></li>);
  }
}

Header.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired
}
