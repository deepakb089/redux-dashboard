import React from 'react'
import {connect} from 'react-redux'
//import {LOGIN} from "../actions/actionTypes";
import {login} from "../actions/actions";


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this)
        this.state = {
            username: '',

        }
    }


    login() {
        this.props.login("deepak")
    }

    render() {
        return (
            <div>

                <div className="">
                    <div className="row">
                        <div className="col-md-6 offset-md-4">
                            <div className="panel panel-default">
                                <h1 className="text-center">Login</h1>

                                <div className="panel-body">
                                    <form className="form-horizontal" method="POST" action="">
                                        <div className="form-group">
                                            <label htmlFor="email" className="col-md-4 control-label">E-Mail
                                                Address</label>

                                            <div className="col-md-6">
                                                <input id="email"

                                                       type="email" className="form-control" name="email"
                                                       required autoFocus/>


                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password"
                                                   className="col-md-4 control-label">Password</label>

                                            <div className="col-md-6">
                                                <input id="password" type="password" className="form-control"
                                                       name="password" required/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-md-6 col-md-offset-4">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" name="remember"/> Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-md-8 col-md-offset-4">

                                                <input type="button"
                                                       className="btn btn-primary"
                                                       value="Login"
                                                       onClick={this.login}
                                                />

                                                <a className="btn btn-link" href="">
                                                    Forgot Your Password?
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(login(user))
    }
}

const LoginComponent = connect(null, mapDispatchToProps)(Login)
export default LoginComponent