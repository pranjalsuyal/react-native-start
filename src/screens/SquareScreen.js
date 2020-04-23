//This is square screen with reducers for state one go to SquareScreen2

import React, { useReducer } from "react";
import { Text, View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  //state === {red:number, green:number, blue:number}
  //action === {colorToChange: 'red', amount:15}
  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case "green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <Text style={styles.textStyle}>Square Screen</Text>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
        colorName={"Red"}
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
        colorName={"Green"}
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
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
