import React, { Component } from 'react'
import { Link, Route, BrowserRouter } from 'react-router-dom';
import Registration from './registration';
import Login from './login';
import Home from './home';

class navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: ''
        }

    }
    logout = () => {
        sessionStorage.clear()
        this.setState({ user: '' })
        window.location.replace('/login')
    }
    componentDidMount() {
        var user = sessionStorage.getItem('user') || ''
        if (user !== this.state.user) {
            this.setState({ user: user })
        }
    }

    navdata = () => {
        if (this.state.user === '') {
            return (<div className="collapse navbar-collapse" id="navbarTogglerDemo">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to={'/register'}> Registration </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to={'/login'}> Login </Link>
                    </li>
                </ul>
            </div>)
        } else {
            return (
                <div className="collapse navbar-collapse" id="navbarTogglerDemo">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item text-white">Welcome {this.state.user}</li>
                    </ul>
                    <button className="btn btn-link text-white" onClick={this.logout}>Logout</button>
                </div>
            )
        }
    }
    fromLogin = (dataFromChild) => {
        this.setState({ user: dataFromChild })
    }

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <nav className="navbar navbar-expand-md bg-primary navbar-dark fixed-top">
                        <Link className="navbar-brand" to={'/home'}> React-app </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo" aria-controls="navbarTogglerDemo" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {this.navdata()}
                    </nav>
                    <div>
                        <Route exact path="/register" component={Registration} />
                        <Route exact path="/login" render={() => { return <Login callbackFromNavbar={this.fromLogin} /> }} />
                        <Route exact path="/home" component={Home} />
                    </div>
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default navbar
