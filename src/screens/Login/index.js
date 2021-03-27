import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Users from '../../services/Users';

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.trim() !== Users.username || password.trim() !== Users.password) {
      return Alert.alert("Sai Username hoặc Password!!!");
    }
    navigation.navigate("Products");
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.waper}>
        <Image
          source={require("../../images/todo.png")}
          style={styles.image}
        ></Image>
        <TextInput
          style={[styles.input, styles.username]}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        ></TextInput>

        <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  waper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#27a154",
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: "#ffffff",
    borderRadius: 7,
    fontSize: 20,
    paddingHorizontal: 15,
    color: "#27a154",
  },
  username: {
    marginBottom: 10,
    marginTop: 50,
  },
  image: {
    width: 300,
    height: 240,
    resizeMode: "contain",
  },
  btnLogin: {
    width: 300,
    height: 40,
    borderRadius: 7,
    backgroundColor: "#ffffff",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textLogin: {
    color: "#27a154",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default Login;
