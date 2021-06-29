import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

type Props = {};

export default class App extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Reset Password </Text>
        <Text style={{ fontWeight: "bold" }}> </Text>

        <TextInput style={styles.input} placeholder="Enter new Password" />
        <Text style={styles.text1}> Use atleast 10 charecters </Text>
        <TextInput
          style={styles.input}
          placeholder="Re-enter password"
          secureTextEntry
        />

        <View style={styles.container}>
          <TouchableOpacity style={styles.userButton}>
            <Text style={styles.ButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  welcome: {
    fontSize: 25,
    textAlign: "center",
    margin: 5,
    color: "#c71585",
  },
  text1: {
    fontSize: 12,
    textAlign: "left",
    margin: 5,
    color: "#0000",
  },

  input: {
    width: "90%",
    backgroundColor: "#e9967a",
    padding: 20,
    marginBottom: 10,
  },

  userButton: {
    backgroundColor: "#fff",
    padding: 15,
  },

  ButtonText: {
    width: 130,
    fontSize: 15,
    textAlign: "center",
    padding: 10,
    color: "#f5fffa",
    borderRadius: 50,
    backgroundColor: "green",
  },
});
