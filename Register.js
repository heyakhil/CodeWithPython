import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import * as Animatable from 'react-native-animatable';
import { Link } from '@react-navigation/native';

// here all library are already install

export default class Register extends React.Component{

        // this function is use for password show and hidden
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
                    <Text style={styles.text_header}>Register via Email</Text>
                    
                    {/* full name Box*/}
                    <Text style={styles.text_footer}> Full Name</Text>
                    <View style={styles.action}>
                        <FontAwesome 
                        name="user-o"
                        color='black'
                        size={20}
                        />
                        <TextInput 
                        placeholder="your full name..."
                        style={styles.textInput}
                        onChangeText = {(text)=>this.textInputChange(text)}
                        />
                    </View>

                    {/* Email Box*/}
                    <Text style={[styles.text_footer,{marginTop:35}]}> E-Mail</Text>
                    <View style={styles.action}>
                        <Fontisto
                        name="email"
                        color='black'
                        size={20}
                        />
                        <TextInput 
                        placeholder="your email..."
                        style={styles.textInput}
                        onChangeText = {(text)=>this.textInputChange(text)}
                        />
                        {this.state.check_textInputChange ?
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
                    
                    {/* password */}
                    <Text style={[styles.text_footer,{marginTop:35}]}> Password</Text>
                    <View style={styles.action}>
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

                        {/* for password show and hidden */}
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
                    
                    {/* Button for SignUp */}
                    <View>
                        <TouchableOpacity 
                        onpress = {()=>this.props.navigation.navigate("signUpScreen")}
                        style={styles.button}
                        >
                        <Text style={styles.LogIntext}>
                            LET'S START LERNING
                        </Text>
                        </TouchableOpacity>    
                    </View>

                    <View style = {styles.signuptext}>
                        <Text >I already have an account.<Link to="/Login" style={{color:'#009bd1'}}>Login</Link></Text>
                    </View>
                </View >
            </View>
        )
    }
}

// Styling
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
            width: "100%",
            marginTop:70
        },
        text_header:{
            color:'black',
            fontWeight:'bold',
            fontSize:20,
            textAlign:"center",
            marginBottom : 50
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
            marginTop:30,
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