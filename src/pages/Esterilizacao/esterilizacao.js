import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Esterilizacao = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          color="#1Bc3ce"
          title="Brocas odontológicas"
          accessibilityLabel="Brocas odontológicas"
          onPress={() => navigation.navigate("Brocas")}
        />
      </View>

      <View style={styles.button}>
        <Button
          color="#1Bc3ce"
          title="Limas endodônticas"
          accessibilityLabel="Limas endodônticas"
          onPress={() => navigation.navigate("Limas")}
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

export default Esterilizacao;

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
