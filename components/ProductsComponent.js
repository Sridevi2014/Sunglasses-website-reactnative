import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { SUNGLASSES } from '../shared/sunglasses';
import * as Animatable from 'react-native-animatable';

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sunglasses: SUNGLASSES
        };
    }

    static navigationOptions = {
        title: 'Products'
    };

    render() {
        const { navigate } = this.props.navigation;

        const renderProductsItem = ({ item }) => {
            return ( 
                <Animatable.View animation='fadeInRightBig' duration={2000}>                  
                <Tile
                    title={item.name}
                    /* caption={item.description} */
                    featured
                    onPress={() => navigate('SunglassInfo', { SunglassId: item.id })}  
                     imageSrc={{ uri:item.avatar_url }}
                   /*  imageSrc={{ uri:item.image }} */
                    />
                    </Animatable.View>
                    );
                };

        return (
            <FlatList
                data={this.state.sunglasses}
                renderItem={renderProductsItem}
                keyExtractor={item => item.id.toString()} >
            </FlatList>
        );
    }   
}

export default Products; 

