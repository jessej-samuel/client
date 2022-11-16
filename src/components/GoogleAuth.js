import React from "react";

import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "204590555303-d24jk2gtd2brmivst3gcfhb8krpg2m30.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  handleAuthClick = () => {
    this.state.isSignedIn ? this.auth.signOut() : this.auth.signIn();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return (
        <button className="ui loading button primary">
          <i className="google icon"></i>
          Sign In
        </button>
      );
    } else if (this.props.isSignedIn) {
      return (
        <button
          onClick={() => this.auth.signOut()}
          className="ui google button negative basic "
        >
          <i className="google icon"></i>Logout
        </button>
      );
    } else {
      return (
        <button
          onClick={this.auth.signIn}
          className="ui google button primary "
        >
          <i className="google icon"></i>Login
        </button>
      );
    }
  }

  render() {
    return this.renderAuthButton();
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
