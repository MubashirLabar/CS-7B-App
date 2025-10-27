import { View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";

// const width = Dimensions.get("window").width;
// const height = Dimensions.get("window").height;

const { width, height } = Dimensions.get("window");

function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require("./images/img-1.jpg")} style={styles.image} />
        <Image
          source={{
            uri: "https://images.pexels.com/photos/33704713/pexels-photo-33704713.jpeg",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://images.pexels.com/photos/34364458/pexels-photo-34364458.jpeg",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://images.pexels.com/photos/34282035/pexels-photo-34282035.jpeg",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://images.pexels.com/photos/18803917/pexels-photo-18803917.jpeg",
          }}
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    height: height,
    width: width,
  },
});
