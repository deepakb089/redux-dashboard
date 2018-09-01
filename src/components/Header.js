import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {LOGOUT} from "../actions/actionTypes";
import {logout} from "../actions/actions";
import {Route} from 'react-router-dom'


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



                            <DashboardButton login={this.props.login} />


                            <li className="nav-item">


                                <LoginButton login={this.props.login}
                                             logout={this.props.logout}/>

                            </li>

                            <RegisterButton login={this.props.login}/>


                        </ul>

                        <a href="">
                            <UserWelcome login={this.props.login} user={this.props.user}/>
                        </a>

                    </div>
                </nav>

                <h1>


                </h1>


            </div>
        )
    }


    logout() {
        this.props.logout()
    }


}

const DashboardButton = (props) => (
    props.login ?  <li className="nav-item">
        <Link to={"/dashboard"} className={"nav-link"}>Dashboard</Link>
    </li> : ""
)

function LoginButton(props) {
    if (props.login) {
        return <a href="#" onClick={props.logout} className={"nav-link"}>Logout</a>
    } else {
        return <Link to={"/login"} className={"nav-link"}>Login</Link>
    }
}

function UserWelcome(props) {
    if (props.login) {
        return <span>Welcome! {props.user}</span>
    } else {
        return <span>Welcome! Guest</span>
    }
}

function RegisterButton(props) {
    if (!props.login) {
        return (<li>
            <Link to={"/Register"} className={"nav-link"}>Register</Link>
        </li>)
    } else {
        return ""
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