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
import imgCircle from "../image/lock.png";

export default function Screen01() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <Image style={styles.circle} source={imgCircle} />
        <View style={styles.title}>
          <Text style={styles.text}>FORGET</Text>
          <Text style={styles.text}> PASSWORD</Text>
        </View>
        <Text style={{ textAlign: "center" }}>
          Provide your account’s email for which you want to reset your password
        </Text>
        <View style={styles.groupButton}></View>
        <TextInput
          style={styles.input}
          placeholder="email"
          keyboardType="text"
        />
        <TouchableHighlight style={styles.button}>
          <View>
            <Text>Next</Text>
          </View>
        </TouchableHighlight>
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
  input: {
    height: 50,
    borderRadius: 8,
    margin: 12,

    padding: 10,
    width: "100%",
    backgroundColor: "#F9F9F9",
  },
  circle: {},
  text: {
    fontSize: 32,

    fontWeight: "bold",
  },
  button: {
    borderRadius: 6,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#FFD124",
    paddingBottom: 16,
    paddingTop: 16,
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
