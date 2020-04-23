//this is with useReducer

import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  //action === {type: what state to change, payload : by what amount}
  switch (action.type) {
    case "change_counter":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "change_counter", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "change_counter", payload: -1 });
        }}
      />
      <Text>Current Count : {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
