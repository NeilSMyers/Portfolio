import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>
        <form>
          <input type="text"/>
          <input type="password"/>
        </form>
        <button>Button</button>
      </div>
    );
  }
}

export default Login;

