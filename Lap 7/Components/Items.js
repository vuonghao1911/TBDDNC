import React, { useState } from "react";
import Dialog from "react-native-dialog";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";

export default Item = ({ item, onPressRemove, onPresssUpdate }) => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState(item);
  const [titletmp, setTitletmp] = useState(item);

  const showDialog = () => {
    console.log("Item ", title);
    setVisible(true);
  };

  const handleCancel = () => {
    setTitle("");
    setTitle(titletmp);
    console.log("cancel Item ", title);
    setVisible(false);
  };

  const handleDelete = () => {
    // Simple PUT request with a JSON body using fetch
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(title),
    };
    fetch(
      "https://6348d6f7a59874146b11ea5c.mockapi.io/api/list/book/" + item.id,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log("new Item update", data));
    setTitletmp(title);
    setVisible(false);
    console.log("update item", title);
  };
  return (
    <View style={styles.item}>
      <Dialog.Container visible={visible}>
        <Dialog.Title
          style={{ color: "cyan", fontSize: 20, textAlign: "center" }}>
          Update Title
        </Dialog.Title>
        <Dialog.Input
          placeholder="name ..."
          onChangeText={(text) => setTitle({ ...title, item: text })}
          value={title}></Dialog.Input>
        <Dialog.Button label="Update" onPress={handleDelete} />
        <Dialog.Button label="Cancel" onPress={handleCancel} color="red" />
      </Dialog.Container>
      <View style={styles.viewTop}>
        <Image
          style={{ height: 100, width: 100 }}
          source={{
            uri: item.avatar,
          }}
        />
        <Text style={styles.title}>{title.item}</Text>
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button} onPress={onPressRemove}>
          <Text style={{ fontSize: 15, color: "white", fontWeight: "bold" }}>
            Remove
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={showDialog}>
          <Text
            style={{
              fontSize: 15,
              color: "white",
              fontWeight: "bold",
            }}>
            Update
          </Text>
        </TouchableOpacity>
      </View>
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
  viewTop: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
  },
  viewButton: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
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
    width: 150,
    marginTop: 10,
  },
});
