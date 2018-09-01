import React from 'react'
import connect from "react-redux/es/connect/connect";
import {registerAttempt, registerFailed, registerSuccess} from "../actions/actions";
import {Redirect} from 'react-router-dom'

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: ''
        }
        this.submit = this.submit.bind(this)
        //alert(this.props.processing)
    }


    submit() {

        var name = this.state.name
        var phone = this.state.phone
        this.props.registerAttempt({
            name: name,
            phone: phone
        })

        // setTimeout(() => {
        //     this.props.faileForm()
        // }, 1000)


    }

    render() {
        return (<div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="panel panel-default">
                                <h1 className="text-center">Register</h1>

                                <div className="panel-body">
                                    <form className="form-horizontal" method="POST" action="">
                                        <div className="form-group">
                                            <label htmlFor="name" className="col-md-4 control-label">Name</label>

                                            <div className="col-md-6">
                                                <input
                                                    value={this.state.name}
                                                    onChange={(event) => {
                                                        this.setState({name: event.target.value})
                                                    }}
                                                    id="name" type="text" className="form-control"
                                                    name="name" required autoFocus
                                                    disabled={this.props.processing}
                                                />


                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email" className="col-md-4 control-label">Phone
                                                Number</label>

                                            <div className="col-md-6">
                                                <input id="phone"
                                                       value={this.state.phone}
                                                       onChange={(event) => {
                                                           this.setState({phone: event.target.value})
                                                       }}
                                                       type="text" className="form-control" required
                                                       disabled={this.props.processing}
                                                />


                                            </div>
                                        </div>


                                        <div className="form-group">
                                            <div className="col-md-6 col-md-offset-4">


                                                <input type="button" className="btn btn-primary"
                                                       value="Submit"
                                                       disabled={this.props.processing}
                                                       onClick={this.submit}
                                                />

                                                {this.status()}

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

    componentWillReceiveProps(newProps){
        //console.log(newProps)
        if(newProps.login) {
            console.log("KOK");
            this.props.history.push("/dashboard")
        }
    }


    status() {
       if(this.props.complete) {
           if(this.props.success) {
               return <div className="alert alert-success">
                   Success! You're registered.
               </div>
           } else {
               return <div className="alert alert-danger">
                   Error! {this.props.errors}
               </div>
           }
       }
    }

}

const mapStateToProps = (state) => {
    return {
        processing: state.registerFormProcessing,
        success: state.registerFormSuccess,
        errors: state.registerError,
        complete: state.registerFormCompleted,
        login: state.login
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerAttempt: (registerDetails) => dispatch(registerAttempt(registerDetails)),
        successForm: () => dispatch(registerSuccess({})),
        faileForm: () => dispatch(registerFailed({"message":"failed"})),
    }
}


const SignupComponent = connect(mapStateToProps, mapDispatchToProps)(Signup)
export default SignupComponent