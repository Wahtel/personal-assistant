import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { LoginForm, SignupForm } from "./components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0C0B",
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const AuthenticationComponent = ({ navigation }) => {
  const [formState, setFormState] = useState("signup");

  const toggleForm = () => {
    setFormState(formState === "login" ? "signup" : "login");
  };

  const renderForm = () => {
    if (formState === "login") {
      return <LoginForm toggleForm={toggleForm} navigation={navigation} />;
    }

    return <SignupForm toggleForm={toggleForm} navigation={navigation} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderForm()}
    </SafeAreaView>
  )
};