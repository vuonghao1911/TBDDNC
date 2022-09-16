import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableHighlight,
  ImageBackground,
  Alert,
  Image,
} from "react-native";
import bg from "../image/background.png";
import imgCircle from "../image/circle.png";

export default function Screen01() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <Image style={styles.circle} source={imgCircle} />
        <View style={styles.title}>
          <Text style={styles.text}>GROW</Text>
          <Text style={styles.text}> YOUR BUSINESS</Text>
        </View>
        <Text style={{ textAlign: "center" }}>
          We will help you to grow your business using online server
        </Text>
        <View style={styles.groupButton}>
          <TouchableHighlight>
            <View style={styles.button}>
              <Text>Login</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View style={styles.button}>
              <Text>Sign up</Text>
            </View>
          </TouchableHighlight>
        </View>
        <Text>HOW WE WORK?</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    alignItems: "center",
  },
  image: {
    paddingTop: 80,
    paddingBottom: 80,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40,
  },
  circle: {},
  text: {
    fontSize: 32,

    fontWeight: "bold",
  },
  button: {
    borderRadius: 6,
    alignItems: "center",
    backgroundColor: "#FFD124",
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 48,
    paddingRight: 48,
  },
  groupButton: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
