import React from 'react'
import {cartAdd} from "../actions/actions";
import {connect} from 'react-redux'


class Product extends React.Component {

    constructor(props) {
        super(props);
        //console.log("inside")
        this.add = this.add.bind(this)
    }

    render() {
        return (
            <div className="item  col-xs-4 col-lg-4">
                <div className="thumbnail">

                    <div className="caption">
                        <h4 className="group inner list-group-item-heading">
                            {this.props.item.name} </h4>
                        <p className="group inner list-group-item-text">
                            Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <p className="lead">
                                   $ {this.props.item.price}</p>
                            </div>
                            <div className="col-xs-12 col-md-6">

                                <input type="button" value={'Add to cart'}
                                       className={'btn btn-success'}
                                       onClick={this.add}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    add() {
        this.props.add(this.props.item)
    }


}

const mapDispatchToProps = dispatch => {
    return {
        add: (product) => dispatch(cartAdd(product))
    }
}

const mapPropsToState = (state) => {
    return {

    }
}

const component = connect(mapPropsToState, mapDispatchToProps) (Product)
export default component

