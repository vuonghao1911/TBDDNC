import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableHighlight,
  ImageBackground,
  Alert,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
  SafeAreaView,
} from "react-native";
import ca from "../img/ca_nau_lau.png";
import store from "../img/do_choi_dang_mo_hinh.png";
import ga from "../img/ga_bo_toi.png";
import book from "../img/hieu_long_con_tre.png";
import xa from "../img/xa_can_cau.png";
import lanh from "../img/lanh_dao_gian_don.png";
import btnBack from "../img/Vector.png";
import btnCart from "../img/cart.png";

const data = [
  {
    title: "ca nau lau mi mini",
    image: ca,
    subtilte: "Shop Devang",
  },
  {
    title: "1 kg kho ga bo toi",
    image: ga,
    subtilte: "LTD Food",
  },
  {
    title: "xe can cau da nang",
    image: xa,
    subtilte: "The Gioi Do Choi",
  },
  {
    title: "do choi dang mo hinh",
    image: store,
    subtilte: "The Gioi Do Choi",
  },
  {
    title: "lanh dao dang don",
    image: lanh,
    subtilte: "Minh Long Book",
  },
  {
    title: "ca nau lau mi mini",
    image: ca,
    subtilte: "Shop Devang",
  },
  {
    title: "1 kg kho ga bo toi",
    image: ga,
    subtilte: "LTD Food",
  },
  {
    title: "xe can cau da nang",
    image: xa,
    subtilte: "The Gioi Do Choi",
  },
  {
    title: "do choi dang mo hinh",
    image: store,
    subtilte: "The Gioi Do Choi",
  },
  {
    title: "lanh dao dang don",
    image: lanh,
    subtilte: "Minh Long Book",
  },
  {
    title: "hieu long con tre",
    image: book,
    subtilte: "Minh Long Book",
  },
];

const Items = ({ item }) => (
  <View style={styles.Item}>
    <Image source={item.image} />
    <View>
      <Text>{item.title}</Text>
      <Text style={{ color: "gray", fontSize: 15, fontWeight: "bold" }}>
        {"Shop : "}

        <Text style={{ color: "red" }}>{item.subtilte}</Text>
      </Text>
    </View>
    <Button title="Chat" color="red" />
  </View>
);

export default function Screen03() {
  const renderItem = ({ item }) => <Items item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.viewTop}>
        <Image source={btnBack} />
        <Text style={{ fontSize: 20, color: "white" }}> Chat</Text>
        <Image source={btnCart} />
      </View>
      <Text style={{ textAlign: "center", fontSize: 15 }}>
        Ban co thac mac voi san pham vua xem dung ngai chat voi shop
      </Text>
      <View style={styles.body}>
        <SafeAreaView>
          <FlatList data={data} renderItem={renderItem} />
        </SafeAreaView>
      </View>
      <View style={styles.viewBottom}>
        <Ionicons name="list-outline" size={30} color={"white"} />
        <Ionicons name="home-outline" size={30} color={"white"} />
        <Ionicons name="return-up-back-outline" size={30} color={"white"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  body: {
    display: "flex",
    //backgroundColor:"blue",
    // justifyContent:"space-around"
    //alignContent:"column",
    flexDirection: "column",
    height: 700,
  },
  Item: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 100,
    backgroundColor: "#7FDDF0",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 3,
    borderColor: "white",
  },
  viewTop: {
    backgroundColor: "#1BA9FF",
    display: "flex",
    width: "100%",
    height: 40,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  viewBottom: {
    backgroundColor: "#1BA9FF",
    display: "flex",
    width: "100%",
    // height: 150,
    //marginTop: 220,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewMid: {
    backgroundColor: "white",
    display: "flex",
    width: "100%",
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "nowrap",
  },
  img: {
    // resizeMode:'',
    marginTop: 20,
    width: 110,
    height: 150,
  },
  viewTopRight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    //paddingBottom: 70,
  },
  viewButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  viewtopBot: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    // justifyContent: "space -around",
  },
  viewTopLeft: {
    display: "flex",
    flexDirection: "column",
    // justifyContent:'space-between',
    // paddingBottom:100,
  },
  viewSale: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
});
