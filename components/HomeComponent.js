import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, Animated } from 'react-native';

/* import { Constants } from 'expo'; */ 

const { width } = Dimensions.get('window');
const height = width * 0.8

class Carousel extends Component {
  render() {
    const { images } = this.props;
    if (images && images.length) {
      return (
        <View
          style={styles.scrollContainer}
        >
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {images.map(image => (
              <Image style={styles.image} source={image.source} />
            ))}
          </ScrollView>
        </View>
      );
    }
    /* console.log('Please provide images'); */
    return null;    
  }
}  

//home class
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scaleValue: new Animated.Value(0)
        };
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

    //navigation options, you click on this link sidebar
    static navigationOptions = {
        title: 'Home'
    }

    render() {
        const images = [
            {
                source: {
                    uri: 'https://images.unsplash.com/photo-1561823202-065ccdb3ae14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80.jpg',
                },
            },
            {
                source: {
                    uri: 'https://images.unsplash.com/photo-1548082683-81fc608980f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80.jpg',
                },
            },
            {
                source: {
                    uri: 'https://images.unsplash.com/photo-1565428730183-830036459022?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1029&q=80.jpg',
                },
            },
            {
                source: {
                    uri: 'https://images.unsplash.com/photo-1545922161-ddbd53e0f89f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80.jpg',
             },
           },
           
         ]; 
     
      return (
        //animated api
        <Animated.ScrollView style={{ transform: [{ scale: this.state.scaleValue }] }}>
          <View style={styles.container}>
            <Text style={styles.headerText}>Sun Glasses Website</Text>
            <Carousel images={images} />
          </View>
        </Animated.ScrollView>
      );
       }
     }
     
      const styles = StyleSheet.create({
       container: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
         /*  paddingTop: Constants.statusBarHeight,  */
      
       },
       scrollContainer: {
         height,
         marginTop: 30
       },
       image: {
         width,
         height,
       },
       headerText: {
        alignItems: 'center',
        margin: 20,
        fontSize: 24,
        color: '#5c6bc0',
        fontWeight: 'bold'
      },
     });

console.disableYellowBox = true;

export default Home;
