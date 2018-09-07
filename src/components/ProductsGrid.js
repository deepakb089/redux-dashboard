import React from 'react'
import connect from "react-redux/es/connect/connect";
import Product from './Product'


class ProductsGrid extends React.Component {

    constructor() {
        super()
    }

    /**/
    render() {

        return (
            <div>

                <div className="container">
                    <div className="row">
                        { this.props.products.map(item => <Product key={item.id} item={item}/>)}
                    </div>
                </div>


            </div>
        )
    }




}

const mapDispatchToProps = dispatch => {
    return {}
}

const mapPropsToState = (state) => {
    return {
        products: state.products.products
    }
}

const ProductsGridComponent = connect(mapPropsToState, mapDispatchToProps)(ProductsGrid)
export default ProductsGridComponent