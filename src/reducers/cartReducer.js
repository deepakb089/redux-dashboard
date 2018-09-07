import * as actions from '../actions/actionTypes'
import _ from 'lodash'

const initial = {
    products: []
}

const cartReducer = (state = initial, action) => {

    switch (action.type) {

        case actions.CART_ADD:
            return addToCart(state, action.payload)


        default:
            return state

    }

}

const addToCart = (state, payload) => {

    //   console.log(state)

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
        products: currentCart
    }

}

export default cartReducer