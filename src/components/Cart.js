import React from 'react'
import connect from "react-redux/es/connect/connect";
import CartProduct from './CartProduct'


class Cart extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>

                <table id={'cart'} className={'table table-hover table-condensed'}>

                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th className="text-center">Subtotal</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.getProducts()}

                    </tbody>
                    <tfoot>
                    <tr className="visible-xs">
                        <td className="text-center"><strong>Total 1.99</strong></td>
                    </tr>
                    <tr>
                        <td><a href="#" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</a></td>
                        <td colspan="2" className="hidden-xs"></td>
                        <td className="hidden-xs text-center"><strong>Total $1.99</strong></td>
                        <td><a href="#" className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right"></i></a></td>
                    </tr>
                    </tfoot>
                </table>



            </div>
        );
    }

    getProducts() {
        const products = this.props.cart.products

        const items = products.map( item => (
            <CartProduct item={item} key={item.product.id}/>
        ) )


        return items
    }

}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const mapPropsToStore = state => {
    return {
        cart: state.cart
    }
}

const component = connect(mapPropsToStore, mapDispatchToProps)(Cart)
export default component
