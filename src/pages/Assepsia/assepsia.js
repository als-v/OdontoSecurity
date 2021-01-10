import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Assepsia = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Outro fator que possibilita sua durabilidade é a conservação através da
        limpeza e assepsia. A assepsia habitual ou corrente deverá ser feita
        antes e depois do atendimento de cada paciente, dessa forma, é garantido
        que nenhuma contaminação ocorra de um paciente para outro.{"\n\n"}A
        ponteira de fibra óptica pode ser esterilizada em Autoclave a 134°C a
        pressão de 2,3 kg/cm2 já a ponteira de polímero NÃO deve ser
        autoclavada. Para efetuar a limpeza e desinfecção do seu equipamento,
        pode-se utilizar substancias bactericidas como: Lenços umedecidos com
        desinfetante ou liquido desinfetante de superfície; À limpeza dos
        óculos, do protetor ocular e da ponteira condutora de luz pode ser
        realizada utilizando lenços descartáveis umedecidos com álcool 70% ou
        lavados com água e sabão neutro.
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

export default Assepsia;

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
