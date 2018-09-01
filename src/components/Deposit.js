import React from 'react'
import { logout } from "../actions/actions";
import connect from "react-redux/es/connect/connect";
import { depositAttempt } from "../actions/actions";

class Deposit extends React.Component {

    constructor() {
        super()
        this.state = {
            amount: 0
        }
        this.submit = this.submit.bind(this)
    }

    submit() {
        var depositDetails = {
            phone: this.props.phone,
            amount: this.state.amount
        }

        this.props.depositAttempt(depositDetails)
    }

    render() {
        return (<div>

            <div>

                <div className="">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <div className="panel panel-default">
                                <h1 className="text-center">Deposit</h1>

                                <div className="panel-body">
                                    <form className="form-horizontal" method="POST" action="">
                                        <div className="form-group">
                                            <label htmlFor="email" className="col-md-4 control-label">Amount</label>
                                            <div className="col-md-6">
                                                <input id="Amount"
                                                    value={this.state.amount}
                                                    onChange={(event) => this.setState({ amount: event.target.value })}
                                                    type="text" className="form-control" name="Amount"
                                                    disabled={this.props.processing}
                                                    required autoFocus />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-md-8 col-md-offset-4">
                                                <input type="button"
                                                    className="btn btn-primary"
                                                    value="Login"
                                                    onClick={this.submit}
                                                    disabled={this.props.processing}
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


        </div>)
    }

    status() {
        if (this.props.completed) {
            if (this.props.success) {
                return <div className="alert alert-success">
                    Success!
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
        phone: state.phone,
        completed: state.depositForm.completed,
        success: state.depositForm.success,
        errors: state.depositForm.errors,
        processing: state.depositForm.processing
    }
}

const mapDispatchToProps = dispatch => {
    return {
        depositAttempt: (depositDetails) => dispatch(depositAttempt(depositDetails))
    }
}

const DepositComponent = connect(mapStateToProps, mapDispatchToProps)(Deposit)
export default DepositComponent