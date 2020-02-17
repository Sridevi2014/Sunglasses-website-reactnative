import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Products extends Component {

    static navigationOptions = {
        title: 'Products '
    }

    render() {
        return (
            <View>
                <Text>Products  Component</Text>
            </View>
        );
    }
}

export default Products ;
