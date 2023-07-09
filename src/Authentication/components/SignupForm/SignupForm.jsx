import React from "react";
import {
  Text,
  TouchableOpacity,
  Button,
  View,
  StyleSheet,
  TextInput,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  formContainer: {
    width: "100%",
    height: 200,
    paddingHorizontal: 30,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    textAlign: "center",
    fontSize: 12,
  },
  buttonContainer: {
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 12,
    marginBottom: 8,
  },
});

export const SignupForm = ({ toggleForm, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.title}>Sign Up Form</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            // onChangeText={setEmail}
            // value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            // onChangeText={setPassword}
            // value={password}
          />
          <View>
            <TouchableOpacity onPress={toggleForm}>
              <Text style={styles.link}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate("Chat")}
          />
        </View>
      </View>
    </View>
  );
};
