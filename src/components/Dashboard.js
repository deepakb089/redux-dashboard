
import React from 'react'
import connect from "react-redux/es/connect/connect";

class Dashboard extends React.Component {
    render() {
        return (<div>
            <h1> Welcome, {this.props.name} </h1>
            <h3> Your balance is: {this.props.balance}

                <input type="button" className={"btn btn-primary"} value={"Deposit"}

                        onClick={() => {this.props.history.push("/deposit")}}
                />

            </h3>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.user,
        balance: state.balance
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}


const DashboardComponent = connect(mapStateToProps, mapDispatchToProps)(Dashboard)
export default DashboardComponent

