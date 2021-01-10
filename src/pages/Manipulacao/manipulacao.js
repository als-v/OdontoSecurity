import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Manipulacao = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          color="#1Bc3ce"
          title="Filmes Radiográficos"
          accessibilityLabel="Filmes Radiográficos"
          onPress={() => navigation.navigate("Radiografia")}
        />
      </View>

      <View style={styles.button}>
        <Button
          color="#1Bc3ce"
          title="Amálgama"
          accessibilityLabel="Amálgama"
          onPress={() => navigation.navigate("Amalgama")}
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

export default Manipulacao;

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
