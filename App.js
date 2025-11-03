import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter username"
        style={styles.input}
        value={username}
        onChangeText={(value) => {
          setUsername(value);
        }}
      />
      <TextInput
        placeholder="Enter password"
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={(value) => {
          setPassword(value);
        }}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 2,
    paddingHorizontal: 20,
    height: 58,
    width: "100%",
    fontSize: 20,
    borderRadius: 18,
    marginBottom: 24,
  },
});
