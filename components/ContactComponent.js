import React, { Component } from 'react';
import { Text, ScrollView, Animated } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scaleValue: new Animated.Value(0)
        };
    }

      //navgation options, you click on this link sidebar
      static navigationOptions = {
        title: 'Contact'
    }


    //animate method
    animate() {
        Animated.timing(
            this.state.scaleValue,
            {
                toValue: 1,
                duration: 1500
            }
        ).start();
    }

      //react life cycle method
      componentDidMount() {
        this.animate();
    }

    render() {
        return (
            //animated api
        <Animated.ScrollView style={{ transform: [{ scale: this.state.scaleValue }] }}>
                <Card title='Contact Information' wrapperStyle={{ margin: 20 }}>
                    <Text>Sun Glasses Website </Text>
                    <Text> Omaha, NE </Text>
                    <Text >  U.S.A.</Text>                
                </Card>
                </Animated.ScrollView>   
        )
    };
}

export default Contact;