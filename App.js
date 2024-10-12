import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
} from "react-native";
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

      <ScrollView contentContainerStyle={styles.todoListContainer}>
        <Text>List of TODOs</Text>
        <Text>List of TODOs</Text>
        <Text>List of TODOs</Text>
        <Text>List of TODOs</Text>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>

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
    marginBottom: 20,
  },
  todoListContainer: {
    paddingVertical: 10,
    alignItems: "center",
    // This controls the layout of items inside the ScrollView
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
    marginTop: 20,
  },
  caption: {
    fontSize: 50,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#fff", // White text
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
