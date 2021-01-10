import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PEP = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          color="#1Bc3ce"
          title="Página 1"
          accessibilityLabel="Página 1"
          onPress={() => navigation.navigate("PEP1")}
        />
      </View>

      <View style={styles.button}>
        <Button
          color="#1Bc3ce"
          title="Página 2"
          accessibilityLabel="Página 2"
          onPress={() => navigation.navigate("PEP2")}
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

export default PEP;

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
