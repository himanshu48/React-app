import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            formError: {
                nameError: '',
                emailError: '',
                passwordError: ''
            },
            formValidity: {
                name: false,
                email: false,
                password: false
            },
            formValid: false
        };
        this.verifyName = this.verifyName.bind(this)
        this.verifyEmail = this.verifyEmail.bind(this)
        this.verifyPassword = this.verifyPassword.bind(this)
        this.register = this.register.bind(this)
    }
    verifyName(event) {
        var name = event.target.value
        var formError = this.state.formError
        var formValidity = this.state.formValidity
        this.setState({ name: event.target.value });
        if (!name.match('[0-9!@#$%^&*]')) {
            formError.nameError = ''
            formValidity.name = true
        } else {
            formError.nameError = 'Name Invalid'
            formValidity.name = false
        }
        this.setState({ formValidity: formValidity })
        this.setState({ formValid: formValidity.name && formValidity.email && formValidity.password })
    }
    verifyEmail(event) {
        var email = event.target.value
        this.setState({ email: event.target.value });
        var formError = this.state.formError
        var formValidity = this.state.formValidity
        if (email.match('^[a-z]+@[a-z]+.(com)|(in)')) {
            formError.emailError = ''
            formValidity.email = true
        } else {
            formError.emailError = 'Email Id is Invalid'
            formValidity.email = false
        }
        this.setState({ formValidity: formValidity })
        this.setState({ formValid: formValidity.name && formValidity.email && formValidity.password })
    }
    verifyPassword(event) {
        var password = event.target.value
        this.setState({ password: event.target.value });
        var formError = this.state.formError
        var formValidity = this.state.formValidity
        if (password.match('[A-z0-9!@#$%^&*]{5}')) {
            formError.passwordError = ''
            formValidity.password = true
        } else {
            formError.passwordError = 'Password should have min 5 characters'
            formValidity.password = false
        }
        this.setState({ formValidity: formValidity })
        this.setState({ formValid: formValidity.name && formValidity.email && formValidity.password })
    }
    register(event) {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="jumbotron">
                            <h4 className="text-center">Registration Form</h4>
                            <form onSubmit={this.register}>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input id="name" value={this.state.name} onChange={this.verifyName} name="name" className="form-control" type="text" />
                                    <span className="text-danger">{this.state.formError.nameError}</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Id:</label>
                                    <input id="email" value={this.state.email} onChange={this.verifyEmail} name="email" className="form-control" type="email" />
                                    <span className="text-danger">{this.state.formError.emailError}</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input id="password" value={this.state.password} onChange={this.verifyPassword} name="password" className="form-control" type="password" />
                                    <span className="text-danger">{this.state.formError.passwordError}</span>
                                </div>
                                <button className="btn btn-primary" disabled={!this.state.formValid} type="submit">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default registration
