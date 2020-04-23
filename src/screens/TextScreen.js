import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text style={styles.textStyle}>Text Screen</Text>
      <Text style={styles.name}>Enter your name :</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text style={styles.name}>Your Name is : {name}</Text>
      <Text style={styles.name}>Enter your Password :</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 6 ? (
        <Text>Password must be longer than 5 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
    textAlign: "center",
  },
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  name: {
    margin: 5,
    fontSize: 20,
  },
});

export default TextScreen;
