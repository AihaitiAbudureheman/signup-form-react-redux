import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignUpRequest } from '../actions/signUpActions';
import SignupForm from './signup';

class App extends Component {
  render() {
    const { userSignUpRequest } = this.props;
    return (
      <div className="row"> 
        <div className="col-md-8 col-md-offset-2">
          <SignupForm userSignUpRequest={userSignUpRequest} />
        </div>

      </div>
    );
  }
}

export default connect(null, { userSignUpRequest })(App);
