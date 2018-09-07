import React from 'react'
import connect from "react-redux/es/connect/connect";

class CartProduct extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <tr>
                <td data-th="Product">
                    <div className="row">
                        <div className="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..."
                                                                 className="img-responsive"/></div>
                        <div className="col-sm-10">
                            <h4 className="nomargin"> {this.props.item.product.name} </h4>
                            <p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </td>
                <td data-th="Price">${this.props.item.product.price}</td>
                <td data-th="Quantity">
                    <input type="number" className="form-control text-center" value="1" />
                </td>
                <td data-th="Subtotal" className="text-center">1.99</td>
                <td className="actions" data-th="">
                    <button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>
                    <button className="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i></button>
                </td>
            </tr>
        )
    }

}


const mapDispatchToProps = dispatch => {
    return {

    }
}

const mapPropsToStore = state => {
    return {

    }
}

const component = connect(mapPropsToStore, mapDispatchToProps)(CartProduct)
export default component
