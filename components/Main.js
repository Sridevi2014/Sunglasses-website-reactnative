import React, { Component } from 'react';
import { PRODUCTS } from '../shared/SunGlasses';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          products: PRODUCTS

        };
    }

    render() {
        return <ProductsItems products={this.state.products} />;
    }
}