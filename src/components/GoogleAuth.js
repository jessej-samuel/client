import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  handleAuthClick = () => {
    this.state.isSignedIn ? this.auth.signOut() : this.auth.signIn();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <button className="ui loading button primary">I don't know if we are signed in</button>;
    } else if (this.state.isSignedIn) {
      return (
        <button
          onClick={() => this.auth.signOut()}
          class="ui google button negative"
        >
          <i class="google icon"></i>Logout
        </button>
      );
    } else {
      return (
        <button onClick={this.auth.signIn} class="ui google button primary ">
          <i class="google icon"></i>Login with Google
        </button>
      );
    }
  }

  render() {
    return this.renderAuthButton();
  }
}

export default GoogleAuth;
