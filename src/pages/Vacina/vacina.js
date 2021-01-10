import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Vacina = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          color="#1Bc3ce"
          title="Ao nascer"
          accessibilityLabel="Ao nascer"
          onPress={() => navigation.navigate("Vacina1")}
        />
      </View>

      <View style={styles.button}>
        <Button
          color="#1Bc3ce"
          title="Ao profissional de saúde"
          accessibilityLabel="Ao profissional de saúde"
          onPress={() => navigation.navigate("Vacina2")}
        />
      </View>

      <View style={styles.button}>
        <Button
          color="#1Bc3ce"
          title="Tabela de vacinas"
          accessibilityLabel="Tabela de vacina"
          onPress={() => navigation.navigate("Vacina3")}
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

export default Vacina;

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
