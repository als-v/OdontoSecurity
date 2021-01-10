import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Limas = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Limas de uso único é uma opção. Porem de acordo com Figueiredo que
        testou em limas hedströen cinco técnicas de limpeza como: água de
        torneira, escova e sabão, ultrassom e escovação, escovação e ultrassom,
        e apenas o ultrassom. Já o segundo passo foi analisar em lupa
        estereoscópica, e foi concluído que embora exista sujidade em todas as
        amostras, os resultados mais satisfatórios foram encontrados na
        utilização do ultrassom seguido de escovação, sendo que a lavagem foi
        considerada a técnica menos eficaz.{"\n\n"}
        Após a limpeza segue o processo da esterilização já mencionada antes,
        sendo bem inspecionado como qualquer outro material e empacotadas em
        pacotinhos individuais para serem autoclavadas.{"\n\n"}
        Autoclave a Vapor 121ºC (250ºF) por 20 minutos a 15 p.s.i.
      </Text>

      <View style={styles.button}>
        <Button
          color="#ff0532"
          title="Voltar"
          accessibilityLabel="Voltar"
          onPress={() => navigation.navigate("Esterilizacao")}
        />
      </View>
    </View>
  );
};

export default Limas;

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
