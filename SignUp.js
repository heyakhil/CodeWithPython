import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SocialIcon } from "react-native-elements";
import { Link } from "@react-navigation/native";

// here we install  library  (1) react-native-elements

export default class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* header text */}
        <View style={styles.header}>
          <Text style={styles.headertext}>Welcome to CodeWithPython</Text>
        </View>
        {/*  Gif */}
        <View style={styles.gif}>
          <Image style={styles.tinyLogo} source={require("./images/abc.gif")} />
        </View>
        {/* Social Icon */}
        <View style={styles.link}>
          <SocialIcon title="SIGN-IN VIA GOOGLE" button type="google" />
          <SocialIcon title="SIGN-IN VIA FACEBOOK" button type="facebook" />
          <SocialIcon
            title="REGISTER VIA EMAIL"
            onPress={() => this.props.navigation.navigate("Register")}
            button
            type="envelope-o"
          />
          {/* footer text */}
          <View>
            <Text style={styles.footer}>
              I already have an account.<Link to="/Login">Login</Link>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05375a",
    justifyContent: "flex-end",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
    color: "white",
  },
  headertext: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  gif: {
    alignItems: "center",
    marginBottom: 80,
  },
  tinyLogo: {
    width: 160,
    height: 160,
  },
  footer: {
    color: "white",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },
});
