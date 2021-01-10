import React from "react";
import { Button, Image, Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          style={styles.img2}
          source={require("../../../imagens/logo.png")}
        />
      </View>

      <View>
        <Text style={styles.text}>ODONTO SECURITY</Text>
        <Text style={styles.text2}>
          Um aplicativo com dicas e cuidados contra contaminação
        </Text>
      </View>

      <View style={styles.button}>
        <Button
          color="#1Bc3ce"
          title="Entrar"
          accessibilityLabel="Entrar no aplicativo"
          onPress={() => navigation.navigate("Menu")}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  img: {
    top: 90,
    position: "absolute",
    right: 40,
  },
  img2: {
    top: 30,
  },
  text: {
    fontSize: 25,
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
    top: 100,
  },
  text2: {
    textAlign: "center",
    top: 125,
  },
  button: {
    width: 265,
    top: 180,
    backgroundColor: "white",
  },
});
