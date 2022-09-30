import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Screen01 from "./Screens/Screen1";

export default function App() {
  return (
    <View style={styles.container}>
      <Screen01 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
