import * as actions from '../actions/actionTypes'

const initial = {
    products: [
        { id: 1, name: 'Product 1', price: 12.00 },
        { id: 2, name: 'Product 2', price: 15.00 },
        { id: 3, name: 'Product 3', price: 118.00 },
        { id: 4, name: 'Product 4', price: 27.00 },
        { id: 5, name: 'Product 5', price: 23.00 },
        { id: 6, name: 'Product 6', price: 38.00 },
        { id: 7, name: 'Product 7', price: 140.00 },
        { id: 8, name: 'Product 8', price: 68.00 },
        { id: 9, name: 'Product 9', price: 55.00 },
        { id: 10, name: 'Product 10', price: 27.55 }
    ]
}

const productsReducer = (state = initial, action) => {

    return state

}

export default productsReducer