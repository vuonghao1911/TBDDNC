import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableHighlight,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import ButtonApp from "./components/button/ButtonApp";
import Screen02 from "./components/Screen02";
import Screen03 from "./components/Screen03";

export default function App() {
  return (
    <View style={styles.container}>
      <Screen03 />
      {/* <ButtonApp /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
