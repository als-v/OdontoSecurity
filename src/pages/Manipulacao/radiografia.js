import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Radiograma = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>
          Manipulação e armazenamento impróprios resultam em radiografia pobre,
          com artefatos que interferem no diagnóstico. Cuidado para não dobrar,
          não criar vincos nem tenha outra manipulação sem cuidado. Mãos limpas
          são uma obrigação, e as loções de Mao deve ser evitadas. Em ambiente
          seco, a eletricidade estática pode causar artefatos característicos.
          {"\n\n"}
          Durante o processamento automático, rolo de transporte gasto ou sujo
          no sistema pode causar artefatos que são geralmente identificáveis por
          sua repetição.{"\n\n"}O calor aumenta o velamento de uma radiografia e
          reduz o contraste. Consequentemente, o filme radiográfico deve ser
          armazenado a temperaturas mais baixas do que 20ºC aproximadamente. A
          película nunca deve ser armazenada perto de tubulações de vapor ou de
          outras fontes de calor.{"\n\n"}
          Armazenamento, sob circunstâncias de umidade elevada (por exemplo,
          acima de 60%) igualmente reduz contraste por causa da nevoa aumentada.
          Consequentemente, antes de usar, o filme deve ser armazenado em lugar
          fresco, seco, idealmente em ambiente com climatização controlada. O
          armazenamento em área que esteja demasiado seca pode ser igualmente
          não recomendável. Os artefatos de eletricidade estativa surgem quando
          a umidade relativa fica, aproximadamente, abaixo de 40%.{"\n\n"}O
          filme deve ser armazenado e manuseado na escuridão. O controle da luz
          é assegurado por uma câmera escura bem selada e por uma estrutura de
          armazenamento para os filmes exposto e não expostos clinicamente. O
          escaninho de armazenamento tem um sistema de fechamento que impede que
          as partes reservadas para filme exposto e filme não exposto sejam
          abertas simultaneamente, o que impede a entrada de luz na câmara
          escura e possível danos ao filme.{"\n\n"}O filme deve ser usado antes
          de sua data de validade, que é geralmente de um ano ou dois após a
          compra. O envelhecimento conduz a perda de velocidade e de contraste,
          e aumento no velamento.{"\n\n"}É sempre recomendado armazenar as
          caixas de filme inclinadas e não deitadas. Quando armazenadas em pé e
          inclinadas, é menos provável que se deformem e, no caso de
          empacotamento não intercalado com papel protetor, é menos provável que
          haja aderência umas às outras ou artefatos de pressão causados pelo
          peso de caixas na parte superior.
        </Text>

        <View style={styles.button}>
          <Button
            color="#ff0532"
            title="Voltar"
            accessibilityLabel="Voltar"
            onPress={() => navigation.navigate("Manipulacao")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Radiograma;

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
