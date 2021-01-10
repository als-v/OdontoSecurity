import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Coordenadas = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          color="#1Bc3ce"
          title="Coordenada das horas"
          accessibilityLabel="Coordenada das horas"
          onPress={() => navigation.navigate("Horas")}
        />
      </View>

      <View style={styles.button}>
        <Button
          color="#1Bc3ce"
          title="Coordenadas dos Círculos Concêntricos"
          accessibilityLabel="Coordenadas dos Círculos Concêntricos"
          onPress={() => navigation.navigate("Circulo")}
        />
      </View>

      <View style={styles.button}>
        <Button
          color="#ff0532"
          title="Menu"
          accessibilityLabel="Menu"
          onPress={() => navigation.navigate("Menu")}
        />
      </View>
    </View>
  );
};

export default Coordenadas;

const styles = StyleSheet.create({
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
