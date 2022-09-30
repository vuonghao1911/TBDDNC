import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState, useEffect } from "react";
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
} from "react-native";
import book from "../img/book.png";
import buttonminus from "../img/btnminus.png";
import buttonadd from "../img/btnadd.png";

export default function Screen03() {
  const [price, setPrice] = useState(140000);
  const [amount, setAmount] = useState(1);
  function addBook(i) {
    setAmount(amount + 1);

    console.log("so luong" + amount);
    setPrice(140000 * (amount + 1));
    console.log(i);
  }
  function minusBook() {
    if (amount <= 0) {
      setAmount(0);
      setPrice(140000 * amount);
    } else {
      setAmount(amount - 1);
      console.log("so luong" + (amount - 1));
      setPrice(140000 * (amount - 1));
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewUp}>
        <View style={styles.viewTop}>
          <View style={styles.viewTopLeft}>
            <Image style={styles.img} source={book} />
          </View>
          <View style={styles.viewTopRight}>
            <Text>Nguyên hàm tích phân và ứng dụng</Text>
            <Text>Cung cấp bởi Tiki Trading</Text>
            <Text style={{ fontSize: 25, color: "red", fontWeight: "bold" }}>
              {price} d
            </Text>
            <Text style={{ fontSize: 20, color: "blue", fontWeight: "bold" }}>
              140.000
            </Text>
            <View style={styles.viewButton}>
              <TouchableOpacity onPress={minusBook}>
                <Image source={buttonminus} />
              </TouchableOpacity>

              <Text style={{ marginLeft: 0 }}>{amount}</Text>
              <TouchableOpacity key="add" onPress={addBook}>
                <Image source={buttonadd} />
              </TouchableOpacity>

              <Text style={{ marginLeft: 20, color: "blue" }}>mua sau</Text>
            </View>
          </View>
        </View>
        <View style={styles.viewtopBot}>
          <Text style={{ marginRight: 10 }}>Ma Giam Gia Da Luu</Text>
          <Text style={{ color: "blue" }}>Xem Tai Day</Text>
        </View>
        <View style={styles.viewSale}>
          <View
            style={{
              height: 40,
              width: 200,
              borderWidth: 1,
              alignItems: "center",
            }}>
            <Text style={{ lineHeight: 40, fontWeight: "bold" }}>
              Ma Giam Gia
            </Text>
          </View>
          <Button title="Ap Dung" color="blue" />
        </View>
      </View>

      <View style={styles.viewMid}>
        <Text>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <Text style={{ color: "blue", fontWeight: "bold" }}>Nhập tại đây?</Text>
      </View>
      <View style={styles.viewMid}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Tam Tinh</Text>
        <Text style={{ color: "red", fontWeight: "bold", fontSize: 20 }}>
          {price} d
        </Text>
      </View>
      <View style={styles.viewBottom}>
        <View style={styles.viewMid}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "gray" }}>
            Thanh Tien
          </Text>
          <Text style={{ color: "red", fontWeight: "bold", fontSize: 20 }}>
            {price} d
          </Text>
        </View>
        <Button title="Thanh Toan" color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:"blue",
    // justifyContent:"space-around"
    //alignContent:"column",
    flexDirection: "column",
  },
  viewUp: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: 300,
    backgroundColor: "white",
  },
  viewTop: {
    backgroundColor: "white",
    display: "flex",
    width: "100%",
    //  height:300,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  viewBottom: {
    backgroundColor: "white",
    display: "flex",
    width: "100%",
    height: 150,
    marginTop: 220,
    flexDirection: "column",
    justifyContent: "space-between",
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
