import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  TextInput,
  Button,
} from "react-native";
import Items from "../Component/Items";
import { Platform, NativeModules } from "react-native";
const { StatusBarManager } = NativeModules;
const HomeScreen = () => {
  const [item, setItem] = useState([{ title: "item1" }, { title: "item2" }]);
  const [itemDetail, setItemDetail] = useState([]);
  const [title, setTitle] = useState("");
  const onPress = () => {
    var newArray = [...item, { title: title }];
    setItem(newArray);
    console.log(newArray);
    console.log("item", item);
    setTitle("");
  };
  const removeItem = (array, item) => {
    const index = array.map((object) => object.title).indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
    setItem(array);
    console.log("index", index);
  };
  const remove = (items) => {
    var array = [...item];
    itemDetail.push(items);
    // removeItem(array, items);
    console.log("data", items);
    console.log("array", array);
    console.log("remove", itemDetail);
  };

  const renderItem = ({ item }) => (
    <Items title={item.title} onPress={() => remove(item.title)} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.viewTop}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTitle(text)}
          value={title}
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{ fontSize: 20, color: "#224863", fontWeight: "bold" }}>
            Add Item
          </Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.viewList}>
        <FlatList
          data={item}
          renderItem={renderItem}
          onMomentumScrollEnd={(event) => {
            const index = Math.floor(
              Math.floor(event.nativeEvent.contentOffset.x) /
                Math.floor(event.nativeEvent.layoutMeasurement.width)
            );
            console.log("index=", index);
          }}
          // keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT,
    flexDirection: "column",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#A5FEF8",
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  viewTop: {
    display: "flex",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  viewList: {
    display: "flex",
    backgroundColor: "",
    height: 500,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default HomeScreen;
