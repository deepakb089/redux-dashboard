import React from 'react'
import ProductsGrid from './ProductsGrid'
import CartSummary from './CartSummary'

export default class Home extends React.Component {
    render() {
        return (
            <div>

                    <h1>
                        <CartSummary/>
                    </h1>

                <ProductsGrid />

            </div>
        )
    }
}