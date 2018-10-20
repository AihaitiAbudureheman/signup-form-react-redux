import React, { Component } from 'react';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmedPassword: ''
        }
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onConfirmedPasswordChange = this.onConfirmedPasswordChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onUsernameChange(e) {
        this.setState({ [e.target.name]: e.target.value });

    }
    onEmailChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onPasswordChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onConfirmedPasswordChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.userSignUpRequest(this.state);
        console.log(this.state);
    }

    render() {
        return (
            <div className="row jumbotron">
                <h1>Create an account</h1>
                <br />
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.onUsernameChange}
                            name="username"
                            className="form-control"
                            placeholder="Enter username" />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            value={this.state.email}
                            onChange={this.onEmailChange}
                            name="email"
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={this.onPasswordChange}
                            value={this.state.password}
                            className="form-control"
                            placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label>Confirm password</label>
                        <input
                            type="password"
                            name="confirmedPassword"
                            onChange={this.onConfirmedPasswordChange}
                            value={this.state.confirmedPassword}
                            className="form-control"
                            placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default SignupForm;