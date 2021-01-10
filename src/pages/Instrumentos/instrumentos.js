import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Instrumentos = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require("../../../imagens/tabela_instrumentos.png")}
        />

        <Text style={styles.title}>Instrumentos críticos:</Text>

        <Text style={styles.text}>
          São instrumentos perfuro/cortantes que penetram nos tecidos
          sub-epiteliais. Devendo obrigatoriamente ser esterilizados ou
          descartados.
        </Text>

        <Text style={styles.title}>Instrumentos semi-críticos</Text>

        <Text style={styles.text}>
          São instrumentos que entram em contato com a mucosa ou pele íntegra.
          Podem ser desinfetados de alto ou médio nível, mas quando possível e
          preferencialmente devem ser esterilizados.
        </Text>

        <Text style={styles.title}>Instrumentos não críticos</Text>

        <Text style={styles.text}>
          Entram em contato apenas com a pele íntegra ou não entram em contato
          com o paciente. Devem ser desinfetados de baixo nível ou limpeza.
          {"\n"}(RAZABONI) (OLIVEIRA)
        </Text>

        <View style={{ height: 50 }}></View>

        <View style={styles.button}>
          <Button
            color="#ff0532"
            title="Voltar"
            accessibilityLabel="Voltar"
            onPress={() => navigation.navigate("Menu")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Instrumentos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 15,
    marginLeft: 10,
  },
  button: {
    width: 300,
    height: 50,
  },
  title: {
    fontSize: 23,
    marginTop: 25,
    marginLeft: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  img: {
    marginTop: 10,
  },
});
