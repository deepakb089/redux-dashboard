import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {LOGOUT} from "../actions/actionTypes";
import {logout} from "../actions/actions";


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)
    }


    render() {
        return (
            <div>


                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to={"/"} className={"nav-link"}>Home</Link>
                            </li>
                            <li className="nav-item">

                                {this.loginButton()}

                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="https://example.com" id="dropdown01"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown01">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>

                        <a href="">
                            {this.userNote()}
                        </a>

                    </div>
                </nav>

                <h1>


                </h1>


            </div>
        )
    }

    loginButton() {
        if (this.props.login) {
            return <a href="#" onClick={this.logout} className={"nav-link"}>Logout</a>
        } else {
            return <Link to={"/login"} className={"nav-link"}>Login</Link>
        }
    }

    logout() {
        this.props.logout()
    }

    userNote() {
        if (this.props.login) {
            return <span>Welcome! {this.props.user}</span>
        } else {
            return <span>Welcome! Guest</span>
        }
    }

}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}


const HeaderComponent = connect(mapStateToProps, mapDispatchToProps)(Header)
export default HeaderComponent