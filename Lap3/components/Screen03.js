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

export default function Screen03() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>

        <View style={styles.title}>
          <Text style={styles.text}>CODE</Text>
          <Text style={{fontSize:30}}> VERIFICATION</Text>
       
        <Text style={{ textAlign: "center" ,fontSize:20}}>
          Enter ontime password send on +842623262622
        </Text>
        <View style={styles.groupButton}>
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
        </View>
         </View>
        <TouchableHighlight style={styles.button}>
          <View>
            <Text style={{fontWeight:'bold',fontSize:20}}>VERIFI CODE</Text>
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
  container: {
    flex: 1,
  },
  title: {
    flex: 1,
    alignItems: "center",
    justifyContent:"space-around",
  },
  image: {
    paddingTop: 150,
    paddingBottom: 150,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40,
  },
  input: {
    height: 50,
    //borderRadius: 8,
    margin: 0,
    borderWidth: 1,
    padding:0,
    width: 50,
  //  backgroundColor: "#F9F9F9",
  },
  circle: {},
  text: {
    fontSize: 50,

    fontWeight: "bold",
  },
  button: {
    borderRadius: 6,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#FFD124",
    paddingBottom: 16,
    paddingTop: 10,
    paddingLeft: 48,
    paddingRight: 48,
    marginTop: 20,
  },
  groupButton: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    //justifyContent: "space-between",
  },
});
