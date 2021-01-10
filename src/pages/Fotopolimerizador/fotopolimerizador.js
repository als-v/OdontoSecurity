import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Fotopolimerizador = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Alguns cuidados precisam ser tomados para que a sua durabilidade seja
        alta.{"\n\n"}
        Primeiramente, guarde o seu equipamento em local apropriado, protegido
        de raios solares e umidade. O condutor de luz não pode ser mergulhado em
        solventes ou substancias que contenham acetona na sua composição.
        {"\n\n"}
        Além disso, existem outros cuidados importantes: evitar que o terminal
        condutor de luz toque a resina a ser polimerizada. Isso fará com que os
        resíduos não obstruam o feixe de luz, o equipamento não pode sofrer
        quedas, caso a ponteira condutora de luz seja danificada (quebra, riscos
        ou sujeiras que não possam ser retirados facilmente), esta deve ser
        encaminhada para a manutenção e realização de um novo polimento ou
        substituição, jamais utilize iodopovidona, glutaraldeídos ou produtos
        clorados, pois com o tempo podem produzir ataques superficiais sobre o
        corpo do instrumento, não tente reparar componentes defeituosos ou
        substituir por partes de outro aparelho (somente com a utilização das
        peças originais é garantido o perfeito funcionamento do aparelho).
        {"\n\n"}
        Após cada ciclo de utilização, remova a ponteira condutora de luz e o
        protetor ocular.
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

export default Fotopolimerizador;

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
