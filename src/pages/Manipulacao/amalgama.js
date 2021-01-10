import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Amalgama = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Os cuidados a serem tomados durante a manipulação do amálgama além do
        uso adequado de EPI (luvas, máscara, gorro, óculos de proteção e
        jaleco), são:{"\n\n"}1 - Uso da menor relação possível de mercúrio na
        liga;{"\n\n"}2 - Uso de amalgamadores mecânicos seguros, que não
        apresentem vazamentos de mercúrio;{"\n\n"}3 - Uso de isolamento absoluto
        para evitar queda de amálgama na cavidade bucal. Nota: a mucosa do
        assoalho da cavidade bucal é altamente permeável;{"\n\n"}4 - Realizar a
        remoção do excesso de mercúrio. (não deve colocar os dedos) (PÉCORA)
        {"\n\n"}
        Toda sobra de mercúrio ou de liga preparada que não seja utilizada
        imediatamente não deve ser coletada em frasco a céu aberto ou em
        recipientes de vidro. A resolução SS-15 de 18 de Janeiro de 1999 da
        Secretaria de Saúde do Estado de São Paulo, dispõe nos seus Artigos 74 e
        75 que os restos mercuriais deverão ser mantidos em recipiente rígido,
        vedado por tampa rosqueável, contendo água em seu interior (cobrindo a
        massa de material armazenada), e posteriormente enviados para usinas de
        reciclagem, já que sua destinação final comum pode causar contaminação
        ao meio ambiente. (ALVES-REZENDE)
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
  );
};

export default Amalgama;

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
