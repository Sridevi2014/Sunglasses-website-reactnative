import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';


class About extends Component {

    //navigation options, you click on this link sidebar
    static navigationOptions = {
        title: 'About'
    }

    render() {
        return (
            <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
            <View>
                <Card image={require('./images/img2.jpg')}  wrapperStyle={{ marginTop: 40 }} style={{width: '100%', height: 200,resizeMode : 'stretch' }} >             
                    <Text >Shop the greatest selection of designer sunglasses for women, men & kids at Sunglass Hut online store.</Text> 
                    <Text>Choose among the most stylish brands like Ray-Ban, Oakley, Versace & Prada.</Text>
                </Card>
            </View>
            </Animatable.View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width : 60,
        height: 60
      },
    });

export default About ;