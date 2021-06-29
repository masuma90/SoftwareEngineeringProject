import React, { useState } from "react";
import { StyleSheet, Text, Button, View, TextInput } from "react-native";

export const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const handleLogin = () => {};

  const handleCreateAccount = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Account</Text>

      <View style={styles.formControl}>
        <Text style={styles.formControlLabel}>Username</Text>

        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.textInput}
        />
      </View>

      <View style={styles.formControl}>
        <Text style={styles.formControlLabel}>Password</Text>

        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.textInput}
        />
      </View>
      <View style={styles.formControl}>
        <Text style={styles.formControlLabel}>Re-Enter Password</Text>

        <TextInput
          value={password1}
          onChangeText={setPassword1}
          style={styles.textInput}
        />
      </View>

      <Button
        onPress={handleCreateAccount}
        title="Create Account"
        accessibilityLabel="Login"
        color={"#841584"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    marginBottom: 70,
  },
  formControl: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  formControlLabel: {
    display: "flex",
    flex: 3,
    marginRight: 20,
  },
  textInput: {
    display: "flex",
    flex: 7,
    height: 30,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ccc",
  },
});

export default Register;
