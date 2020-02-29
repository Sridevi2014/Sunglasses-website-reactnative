
import React, { Component } from 'react';
import { Text, View, ScrollView, Alert, PanResponder } from 'react-native';
import { Card } from 'react-native-elements';
import { SUNGLASSES } from '../shared/sunglasses';
import * as Animatable from 'react-native-animatable';

function RenderSunglass(props) {  

    const {sunglass} = props;

    const view = React.createRef();

    const recognizeDrag = ({dx}) => (dx > 200) ? true : false;

    /*PanResponder api -- the PanResponder and two panHandlers, onStartShouldSetPanResponder and onPanResponderEnd, sunglassInfo component to respond to a drag gesture of more than 200 pixels to the left.gestureState=movement of finger */
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            view.current.rubberBand(1000)
            .then(endState => console.log(endState.finished ? 'finished' : 'canceled'));
        },    
        onPanResponderEnd: (e, gestureState) => {
            console.log('pan responder end', gestureState);
            if (recognizeDrag(gestureState)) {
                Alert.alert(
                    'Add item',
                    'Do you want to buy this item?',
                    [
                        {
                            text: 'Cancel',
                            style: 'cancel',
                            onPress: () => console.log('Cancel Pressed')
                        },
                        {
                            text: 'OK', 
                            style: 'cancel', 
                            onPress: () => console.log('Item added to the cart.')                                  
                        }
                    ],
                    { cancelable: false }
                );
            }
            return true;
        }
    });


    //sunglass
    if (sunglass) {
        return (
            <Animatable.View 
                  animation='fadeInDown' 
                  duration={2000} 
                  delay={1000}
                  ref={view}
                  {...panResponder.panHandlers}>  
            <Card
                featuredTitle={sunglass.name}
                 image={{ uri: sunglass.avatar_url }} >
                <Text style={{margin: 10}}>
                    {sunglass.description} </Text>
                <Text style={{margin: 10}}>$ {sunglass.price} </Text> 
       
            </Card>
           </Animatable.View> 
        );
    }
     return <View />; 
}

//class sunglassComponent
class SunglassInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sunglasses: SUNGLASSES
         
        };
    }

    static navigationOptions = {
        title: 'Sunglass Information'
    };

    render() {
        const sunglassId = this.props.navigation.getParam('SunglassId');
        const sunglass = this.state.sunglasses.filter(sunglass => sunglass.id === sunglassId)[0];
      
        return (
            <ScrollView>
               <RenderSunglass sunglass={sunglass}/>       
            </ScrollView>
        );   
    }
}

export default SunglassInfo;  