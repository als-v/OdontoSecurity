import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Humidade = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        O isolamento absoluto é de fundamental importância e tem como objetivo
        maior a criação de uma barreira dando condições assépticas para o
        tratamento. Esta importante manobra também oferece condições seguras
        para a terapia endodôntica e também em casos de restaurações evitando
        deglutição de instrumentos e protegendo os tecidos moles do contato com
        substâncias químicas.{"\n\n"}
        Os equipamentos utilizados para fazer a técnica do isolamento são:
        Lençol de borracha, perfurador de dique de borracha (de Ainsworth),
        porta-dique de borracha, grampos, pinça porta-grampo (de Palmer), fio
        dental, espátula de inserção, lubrificante hidrossolúvel, tesoura ponta
        reta.{"\n\n"}
        Os grampos tem uma sequência certa para cada dente, sendo 200 e 205 para
        molares, 206 e 209 para pré-molares, 210 e 211 para anteriores, 26 212 e
        WBA são grampos sem asas utilizados em molares com pouca retenção.
        {"\n\n"}
        As principais vantagens do isolamento absoluto são: retração e proteção
        dos tecidos moles para promover o acesso à área a ser operada, melhor
        visibilidade do campo operatório. Condições adequadas para a inserção e
        condensação dos materiais restauradores, proteção do paciente contra a
        aspiração ou deglutição de instrumentos, restos de material restaurador
        ou qualquer outro tipo de elemento estranho.
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

export default Humidade;

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
