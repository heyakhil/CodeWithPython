import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Button } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import * as Animatable from 'react-native-animatable';
import { Link } from '@react-navigation/native';

//  here we install library (1) react-native-vector-icons and rest already install

export default class Login extends React.Component{

    // this function is using for password show and hidden
    constructor(props){
        super(props);
        this.state={
            check_textInputChange : false,
            password:'',
            secureTextEntry:true
            }
        }
    textInputChange(value){
        if(value.length!==0){
            this.setState({
                check_textInputChange : true 
            });
        }
        else{
            this.setState({
                check_textInputChange : false
            });
        }
    }

    secureTextEntry(){
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>

                    <Text style={styles.text_header}>You are ready to go.</Text>
                    
                    {/* for email input box */}

                    <Text style={styles.text_footer}> E-Mail</Text>

                    <View style={styles.action}>
                        {/* email icon */}
                        <Fontisto
                        name="email"
                        color='black'
                        size={20}
                        />
                        {/* input box */}
                        <TextInput 
                        placeholder="your email..."
                        style={styles.textInput}
                        onChangeText = {(text)=>this.textInputChange(text)}
                        />
                        {this.state.check_textInputChange ?
                        // animation
                        <Animatable.View 
                        animation="bounceIn">
                        <Feather 
                        name="check-circle"
                        color='green'
                        size={20}
                        />
                        </Animatable.View>
                        :null}
                    </View>

                    {/* for password box */}

                    <Text style={[styles.text_footer,{marginTop:35}]}> Password</Text>
                    <View style={styles.action}>
                        {/* password icon */}
                        <FontAwesome 
                        name="lock"
                        color='black'
                        size={20}
                        />
                        {this.state.secureTextEntry ?
                        <TextInput 
                        placeholder="your password..."
                        secureTextEntry={true}
                        style={styles.textInput}
                        value={this.statepassword}                   
                        onChangeText = {(text)=>this.setState({
                            passowrd:text
                        })}
                        />
                        :
                        <TextInput 
                        placeholder="your password..."
                        style={styles.textInput}
                        value={this.statepassword}                   
                        onChangeText = {(text)=>this.setState({
                            passowrd:text
                        })}
                        />
                        }
                        {/* passowrd show and hidden show  */}
                        <TouchableOpacity 
                        onPress={()=>this.secureTextEntry()}>
                        {this.state.secureTextEntry ?
                        <Feather 
                        name="eye-off"
                        color='gray'
                        size={20}
                        />
                        :
                        <Feather 
                        name="eye"
                        color='gray'
                        size={20}
                        />
                        }
                        </TouchableOpacity>
                    </View>

                    {/* forgot password link */}
                    <Text style={{color:'#009bd1',marginTop:30}}>Forgot password?</Text>
                    
                    {/* Login Button */}
                    <View>
                        <TouchableOpacity 
                        style={styles.button}
                        >
                        <Text style={styles.LogIntext}>
                            LET'S START LERNING
                        </Text>
                        </TouchableOpacity>    
                    </View>

                    {/* Sign Link */}
                    <View style = {styles.signuptext}>
                        <Text >I don't have an account.<Link to="/SignUp" style={{color:'#009bd1'}}>SignUp</Link></Text>
                    </View>
                </View >
            </View>
        )
    }
}


const styles =StyleSheet.create(
    {
        container :{
            flex:1,
            backgroundColor:'white'
        },
        header:{
            // flex:1,
            justifyContent:"center",
            paddingHorizontal:20,
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            borderBottomLeftRadius :10,
            borderBottomRightRadius:10,
            paddingHorizontal:30,
            paddingVertical:30,
            fontWeight:'bold',
            width: "100%",
            marginTop:130
        },
        text_header:{
            color:'black',
            fontWeight:'bold',
            fontSize:30,
            textAlign:"center",
            marginBottom : 60
        },
        text_footer:{
            color:'black',
            fontSize:18
        },
        action:{
            flexDirection:'row',
            marginTop:10,
            borderBottomWidth:1,
            borderBottomColor:"#f2f2f2",
            paddingBottom:5
        },
        textInput:
        {
            flex:1,
            paddingLeft:10,
            color:'#05375a',
        },
        button:{
            alignItems:'center',
            width : "100%",
            backgroundColor:"#0063d8",
            height : 45,
            marginTop:15,
            borderTopLeftRadius : 5,
            borderTopRightRadius : 5,
            borderBottomLeftRadius : 5,
            borderBottomRightRadius:5
        },
        LogIntext:{
            fontSize:18,
            fontWeight:"bold",
            color:"white",
            padding : 10,
           
        },
        signuptext:{
            color : "black",
            marginTop:20,
            alignItems:'center',
        },
    });