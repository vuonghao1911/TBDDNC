import { StatusBar } from "expo-status-bar";
const axios = require("axios").default;
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  Button,
  TextInput,
} from "react-native";
import { Platform, NativeModules } from "react-native";
const { StatusBarManager } = NativeModules;
import Items from "./Components/Items";

export default function App() {
  const [book, setBook] = useState([]);
  const [name, setName] = useState();

  const removeItem = (array, item) => {
    const index = array.map((object) => object.id).indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
    setBook(array);
    console.log("index", index);
  };

  const addItem = () => {
    const newItem = {
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/512.jpg",
      img: "img 34 ",
      item: name,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    };
    fetch(
      "https://6348d6f7a59874146b11ea5c.mockapi.io/api/list/book/",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        var newArray = [...book, data];
        console.log("result", data);
        setBook(newArray);
        console.log("item", newArray);
      });

    setName("");
  };
  const deleteBook = (id) => {
    // destructure state
    console.log("id", id);

    fetch(`https://6348d6f7a59874146b11ea5c.mockapi.io/api/list/book/` + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        // getBookData();
        var array = [...book];
        removeItem(array, id);
        console.log("array", array);
        console.log("return", res);

        // const index = book.map((object) => object.id).indexOf(res.id);
        // if (index > -1) {
        //   book.splice(index, 1);
        // }
        // setBook(book);
        // console.log("index", index);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBookData = async () => {
    try {
      let response = await fetch(
        "https://6348d6f7a59874146b11ea5c.mockapi.io/api/list/book"
      );
      let json = await response.json();
      setBook(json);
      console.log("data", json);
      // console.log("json", book);
    } catch (error) {
      console.error(error);
    }
  };
  const testapi = async () => {
    try {
      const headers = {
        Accept: "application/json, text/plain, /",
        "Content-Type": "multipart/form-data",
      };

      const api = await axios
        .get(
          "http://192.168.134.124:5005/conversation/635c2809a2b50dc0ae5352fa?receiverId=dP2GR6FMv1fJG40SK9CXeZlbLCo2&page=1&size=20",

          { headers }
        )
        .then((response) => {
          return response.data;
        });

      console.log("api", api);
    } catch (error) {
      console.error(error);
    }
  };
  //http://192.168.134.124:5005/messages/getMessageByType/635c2809a2b50dc0ae5352fa/IMAGE

  const testapifetch = async () => {
    try {
      const headers = { "Content-Type": "application/json" };
      await fetch(
        "https://13.228.206.211/conversation/6357fca23ac7316faee67e52?receiverId=C6LwvHCSBagEyr1QCneUgEaSuau1&page=1&size=4",
        { headers }
      )
        .then((response) => response.json())
        .then((data) => console.log("api fetch", data));
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const renderItem = ({ item }) => (
    <Items item={item} onPressRemove={() => deleteBook(item.id)} />
  );

  useEffect(() => {
    getBookData();
    testapi();
    testapifetch();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.viewTop}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TouchableOpacity style={styles.button} onPress={testapi}>
          <Text style={{ fontSize: 20, color: "#224863", fontWeight: "bold" }}>
            Add Item
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={book}
        keyExtractor={({ id }, index) => id}
        renderItem={renderItem}
      />
    </View>
  );
}

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
