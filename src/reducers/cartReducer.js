import * as actions from '../actions/actionTypes'
import _ from 'lodash'

const initial = {
    products: [],
    total: 0
}

const cartReducer = (state = initial, action) => {

    switch (action.type) {

        case actions.CART_ADD:
            return addToCart(state, action.payload)

        case actions.CART_REMOVE:
            return removeProduct(state, action.payload)


        default:
            return state

    }

}

const removeProduct = (state, payload) => {
    let cart = state.products
    let finalCart = _.remove(cart, (item) => {
        return item.product.id != payload.productId
    })

    return {
        ...state,
        products: finalCart,
        total: getTotal(finalCart)
    }
}

const addToCart = (state, payload) => {

    var currentCart = state.products
    var product = payload.product

    var index = _.findIndex(currentCart, (item) => {
        return item.product.id == product.id
    })

    if (index != -1) {
        currentCart[index].qty++;
    } else {
        currentCart.push({
            qty: 1,
            product: payload.product
        })
    }

    return {
        ...state,
        products: currentCart,
        total: getTotal(currentCart)
    }

}

const getTotal = products => {
    let total = _.sumBy(products, (item) => {
        return item.product.price * item.qty
    })
    return total
}

export default cartReducer