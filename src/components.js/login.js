import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            successMessage: '',
            errorMessage: ''
        }
        this.updateForm = this.updateForm.bind(this)
        this.login = this.login.bind(this)
        this.inputRef = React.createRef()
    }
    updateForm(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    
    async login(event) {
        event.preventDefault()
        var formJSON = {
            userName: this.state.email,
            password: this.state.password
        };
        var isloggedin = false
        await axios.post('http://localhost:2000/login', formJSON)
            .then(function (response) {
                console.log(response.data.message);
                sessionStorage.setItem('user',formJSON.userName)
                isloggedin = true
            })
            .catch(function (error) {
                console.log(error);
            });
        isloggedin && this.props.callbackFromNavbar(formJSON.userName)
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-5 offset-sm-4 offset-md-4">
                        <div className="jumbotron">
                            <h4 className="text-center">Login Form</h4>
                            <form onSubmit={this.login}>
                                <div className="form-group">
                                    <label htmlFor="email">Email Id:</label>
                                    <input id="email" ref={this.inputRef} value={this.state.email} onChange={this.updateForm} name="email" className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input id="password" value={this.state.password} onChange={this.updateForm} name="password" className="form-control" type="password" />
                                </div>
                                <button className="btn btn-primary" type="submit">Login</button>
                            </form>
                            <span className="text-success">{this.state.successMessage}</span>
                            <span className="text-danger">{this.state.errorMessage}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default login
