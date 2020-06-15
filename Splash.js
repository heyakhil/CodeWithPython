import React from 'react';
import { StyleSheet, Text, View,Image,ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Font from 'expo-font'; 

// here we install two library (1) Animation (2) Expo Font


export default class Splash extends React.Component{  
 
      constructor(){
        super();
        this.state = {
          fontloaded : false
        };
      }
     
      async componentDidMount(){

        //for font-family
        await Font.loadAsync({
          'BreeSerif-Regular' : require ('./assets/fonts/BreeSerif-Regular.ttf')
        });
        this.setState({fontloaded : true});
         
        // this is function for splash screen timeout .. atomatically move to splashScreen to SignUpScreen after 3 Sec. 
        setTimeout(()=>{
          this.props.navigation.navigate('SignUp')
        },3000);
      }

        render(){
        return(
            <View style={styles.container}>
                <Animatable.View 
                animation="flipInY"
                style= { styles.logo}>
                  {/* python image icon for splashScreen */}
                    <Image 
                    style= {styles.tinyLogo}
                    source = {require("./images/logo.webp")}
                    />    
                </Animatable.View>
                {this.state.fontloaded ?(
                <Text style = {styles.logotext}>Python</Text>
                ):(
                  <ActivityIndicator size="large" />
                )}
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
      flex :1,
      backgroundColor : "#05375a",
      alignItems: "center",
      justifyContent : "center"
    },
    logo : {
       
    },
    tinyLogo: {
        width: 160,
        height: 160,
      },
      logotext : {
          color : "#FFFFFF",
          fontSize : 30,
          fontWeight : "300",
          marginTop : 30,
          fontFamily :"BreeSerif-Regular"
      
      },
  });