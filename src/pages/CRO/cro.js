import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CRO = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        A principal finalidade da CRO é a supervisão da ética odontológica junto
        com a CFO que cuida de todo o território nacional, é a missão de zelar e
        trabalhar pelo bom conceito da profissão. Para cumprir essa missão
        através de atos normativos, julga processos éticos e centraliza as
        informações sobre cursos de Especialização registrados e reconhecidos,
        bem como sobre o número de inscritos em todo o Brasil, entre
        Cirurgiões-Dentistas, Auxiliar de Saúde Bucal, Técnicos em Saúde Bucal,
        Técnicos em Prótese Dentária, Auxiliares de Prótese Dentária e Clínicas
        Odontológicas.{"\n"}(CFO)
      </Text>

      <View style={styles.button}>
        <Button
          color="#ff0532"
          title="Voltar"
          accessibilityLabel="Voltar"
          onPress={() => navigation.navigate("Menu")}
        />
      </View>
    </View>
  );
};

export default CRO;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: {
    marginLeft: 10,
    marginTop: 20,
    textAlign: "left",
    fontSize: 15,
  },
  button: {
    marginTop: 30,
    width: 300,
    height: 50,
  },
});
