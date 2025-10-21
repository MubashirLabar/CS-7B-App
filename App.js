import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";

function App() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={[styles.box, { backgroundColor: "green" }]}>
          <Text style={styles.title}>Pizza</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "red" }]}>
          <Text style={styles.title}>Burger</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "pink" }]}>
          <Text style={styles.title}>Pasta</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  box: {
    width: 200,
    height: 250,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
});
