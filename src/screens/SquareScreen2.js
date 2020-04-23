//This is square screen without reducers for reducer one go to original

import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const COLOR_INCREMENT = 15;

  const setColor = (color, change) => {
    //color = 'red' , 'green', 'blue'
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        break;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        break;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        break;
      default:
        break;
    }
  };

  return (
    <View>
      <Text style={styles.textStyle}>Square Screen</Text>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        colorName={"Red"}
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        colorName={"Green"}
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        colorName={"Blue"}
      />
      <Text>
        Red : {red} Green : {green} Blue : {blue}
      </Text>
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
    textAlign: "center",
  },
});

export default SquareScreen;
