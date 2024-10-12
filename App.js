import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState(""); // State for text input
  const [todos, setTodos] = useState([]); // State for list of todos

  // Function to handle adding a todo
  const onPress = () => {
    if (inputValue.trim() === "") {
      Alert.alert("Bitte einen Todo-Eintrag eingeben");
      return;
    }

    setTodos([...todos, inputValue]); // Add new todo to the list
    setInputValue(""); // Clear input after adding todo
  };

  // Function to handle removing a todo
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // Remove todo by filtering it out
  };

  const title = "Todo hinzufügen"; // Button title

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.caption}>TUDU</Text>
      </View>

      {/* ScrollView to display the list of todos */}
      <ScrollView contentContainerStyle={styles.todoListContainer}>
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <View key={index} style={styles.todoItemContainer}>
              <Text style={styles.todoText}>
                {index + 1}. {todo}
              </Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => removeTodo(index)}
              >
                <Text style={styles.deleteButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text>Noch keine Todos hinzugefügt.</Text>
        )}
      </ScrollView>

      {/* TextInput for entering todo */}
      <TextInput
        style={styles.input}
        placeholder="Gib deinen Todo ein"
        value={inputValue}
        onChangeText={setInputValue}
      />

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
    width: "100%", // Makes sure the todo list takes full width
  },
  todoItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e6e6e6", // Soft light grey background for todo item
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    width: "100%", // Ensure the todo items take full width
  },
  todoText: {
    fontSize: 18,
    flex: 1, // Make the text take as much space as possible
    color: "#3a506b", // Muted blue-gray for the todo text
  },
  deleteButton: {
    backgroundColor: "#3A3A3A", // Red color for delete button
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
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
  },
  buttonText: {
    color: "#fff", // White text
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
