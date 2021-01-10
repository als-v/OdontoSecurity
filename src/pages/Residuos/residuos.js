import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Residuos = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Os diferentes tipos de resíduos são classificados em grupos. Assim são
        eles:{"\n\n"}
        Grupo A – Resíduos potencialmente biológicos/ infectantes{"\n"}
        Exemplos: placas e lâminas de laboratório, carcaças, peças anatômicas
        (membros), tecidos, bolsas transfusionais contendo sangue, dentre
        outras.{"\n\n"}
        Grupo B – Resíduos químicos {"\n"}
        Exemplos: medicamentos apreendidos, reagentes de laboratório, resíduos
        contendo metais pesados, dentre outros.{"\n\n"}
        Grupo C – Resíduos radioativos{"\n"}
        Exemplos: serviços de medicina nuclear e radioterapia etc.{"\n\n"}
        Grupo D – Resíduos comuns{"\n"}
        Exemplos: sobras de alimentos e do preparo de alimentos, resíduos das
        áreas administrativas etc.{"\n\n"}
        Grupo E - Resíduos perfuro-cortantes{"\n"}
        Exemplos: lâminas de barbear, agulhas, ampolas de vidro, pontas
        diamantadas, lâminas de bisturi, lancetas, espátulas e outros similares.
        (VGRESIDUOS)
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

export default Residuos;

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
  }
});
