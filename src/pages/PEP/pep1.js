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

const PEP1 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>
          O local da lesão deve ser lavado com água corrente e sabonete, para a
          retirada de fluidos contaminantes e depois higienização asséptica com
          álcool 70%.
        </Text>

        <Text style={styles.title}>FLUXOGRAMA</Text>

        <Image
          style={styles.img}
          source={require("../../../imagens/fluxograma.png")}
        />

        <Text style={styles.title}>Finalidade de cada teste biológico</Text>

        <Text style={styles.text}>
          Os testes imunológicos são realizados em uma unidade básica de saúde e
          são gratuitos, disponibilizados pelo SUS, são nomeados como testes
          rápidos e são feitos a partir da coleta de sangue. Os testes tem
          finalidade de descobrir se a pessoa foi infectada ou se ela já era
          infectada, eles devem ser feitos no dia do contato, 15 dias depois, 30
          dias e até três meses depois para o acompanhamento.
        </Text>

        <Text style={styles.title}>Exames e testes</Text>

        <Image
          style={styles.img}
          source={require("../../../imagens/exames.png")}
        />

        <View style={{ height: 50 }}></View>

        <View style={styles.buttonContainer}>
          <Button
            color="#ff0532"
            title="              Voltar              "
            accessibilityLabel="Voltar"
            onPress={() => navigation.navigate("PEP")}
          />

          <Button
            color="#1Bc3ce"
            title="      Proxima página      "
            accessibilityLabel="Próxima página"
            onPress={() => navigation.navigate("PEP2")}
          />
        </View>

        <View style={{ height: 250 }}></View>
      </View>
    </ScrollView>
  );
};

export default PEP1;

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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
