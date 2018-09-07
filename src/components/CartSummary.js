import React from 'react'
import connect from "react-redux/es/connect/connect";

const CartSummary = (props) => {
    return (
        <div>
            Products in cart: {props.cart.products.length} | <a href="/cart">Cart</a>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {}
}

const mapPropsToStore = state => {
    return {
        cart: state.cart
    }
}

const component = connect(mapPropsToStore, mapDispatchToProps)(CartSummary)
export default component