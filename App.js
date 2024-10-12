import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, StyleSheet, Text, View, Alert } from "react-native";
import React from "react";

export default function App() {
  // Define the onPress function and the button title
  const onPress = () => {
    Alert.alert("Button Pressed!");
  };

  const title = "Add your todo"; // Define the button title

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.caption}>TUDU</Text>
      </View>

      <View style={styles.todoListContainer}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  titleContainer: {
    flex: 1,
  },
  todoListContainer: {
    justifyContent: "flex-end",
    flex: 4,
  },
  button: {
    backgroundColor: "#ff6700", // Neon orange color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30, // Rounded border
    shadowColor: "#ff6700", // Neon effect
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5, // For Android shadow
  },
  caption: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 50,
  },
  buttonText: {
    color: "#fff", // White text
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
