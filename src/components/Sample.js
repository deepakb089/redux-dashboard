import React from 'react'
import connect from "react-redux/es/connect/connect";

import { Link } from 'react-router-dom'


function Sample(props) {
    return (
        <div>
            <h1> Hello, {props.name} </h1>
            <Link to={"/sample/Deepak"}>Deepak</Link><br />
            <Link to={"/sample/Pankaj"}>Pankaj</Link><br />
            <Link to={"/sample/Hargun"}>Hargun</Link><br />
        </div>
    )
}

const SingupButton = () => {
    return <div>
        <input type="" value="Register" />
    </div>
}


// class Sample extends React.Component {
//
//     render() {
//         return (
//             <div>
//
//                 <h1> Hello, {this.props.name} </h1>
//
//
//
//                 <Link to={"/sample/Deepak"}>Deepak</Link><br />
//                 <Link to={"/sample/Pankaj"}>Pankaj</Link><br />
//                 <Link to={"/sample/Hargun"}>Hargun</Link><br />
//
//
//             </div>
//         )
//     }
//
//     componentDidMount(){
//         console.log(this.props)
//     }
//
// }

const mapStateToProps = (state, ownProps) => {
    return {
        name: ownProps.match.params.name || "Deepak"
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

}

const SampleComponent = connect(mapStateToProps, null)(Sample)
export default SampleComponent