import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.boxView1}></View>
      <View style={styles.boxView2}></View>
      <View style={styles.boxView3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    // borderWidth: 5,
    // borderColor: "black",
    // height: 200,     3d way
    justifyContent: "space-between",
    flexDirection: "row",
    // position: "absolute",
  },
  boxView1: {
    height: 100,
    width: 100,
    backgroundColor: "red",
  },
  boxView2: {
    height: 100,
    width: 100,
    backgroundColor: "green",
    top: 100, //1st way
    // marginTop: 100, //2nd way
    // alignSelf: "flex-end",   // 3rd way
  },
  boxView3: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
  },
});

export default BoxScreen;
