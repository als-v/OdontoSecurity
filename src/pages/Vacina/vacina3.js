import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Vacina3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../../imagens/fluxograma.png")}
      />

      <View style={styles.button}>
        <Button
          color="#1Bc3ce"
          title="Imprimir"
          accessibilityLabel="Imprimir"
        />
      </View>

      <View style={styles.button}>
        <Button
          color="#ff0532"
          title="Voltar"
          accessibilityLabel="Voltar"
          onPress={() => navigation.navigate("Vacina")}
        />
      </View>
    </View>
  );
};

export default Vacina3;

const styles = StyleSheet.create({
  img: {
    marginBottom: 50,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  button: {
    width: 300,
    height: 50,
  },
});
