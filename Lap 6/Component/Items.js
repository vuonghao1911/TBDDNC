import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";

export default Item = ({ title, onPress }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{ fontSize: 15, color: "white", fontWeight: "bold" }}>
          Remove
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    display: "flex",
    backgroundColor: "#f9c2ff",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderTopEndRadius: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 10,
    color: "#FC929E",
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#6363A0",
    padding: 10,
    borderRadius: 5,
  },
});
