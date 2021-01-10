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

const Circulos = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>
          Consiste no traçado de três círculos concêntricos (que apresentam um
          mesmo centro), cada um com 0,50m de raio, a partir do ponto
          correspondente à cavidade bucal do paciente, de modo que o círculo A
          0,50m de raio; o círculo B tem 1,0m de raio e o círculo C tem 1,50m.
          Isto configura 9m2 de área. Assim temos como características:{"\n\n"}
          Círculo A: Zona de transferência, deve ter tudo aquilo que se
          transfere a boca do paciente, portanto aí devem estar situados os
          instrumentos e as pontas do equipo, além dos mochos para o CD e ASB.
          {"\n\n"}Círculo B: Com 1,0m de raio limita a área útil de trabalho
          (espaço máximo de pega), que pode ser alcançado com o braço esticado.
          Nele devem estar as mesas auxiliares.{"\n\n"}Círculo C: Com 1,50m de
          raio limita a área total da sala de tratamento, que não deve,
          portanto, ter mais de 3,0m de largura para não ser anti-ergonômica.
          Nele devem estar localizadas pias e armários fixos, sendo que as
          gavetas quando abertas devem cair no círculo B.{"\n\n"}O objetivo da
          ergonomia na odontologia é obter meios e sistemas para prevenir
          fadiga, oferecer maior conforto e simplificação do trabalho, tanto
          para o cirurgião-dentista quanto para o paciente, ou seja,
          racionalização do trabalho odontológico, diminuindo estresse físico e
          mental e prevenindo doenças relacionadas com a prática odontológica.
        </Text>

        <Image
          style={styles.img}
          source={require("../../../imagens/circulo.png")}
        />

        <View style={{ height: 50 }}></View>

        <View style={styles.button}>
          <Button
            color="#ff0532"
            title="Voltar"
            accessibilityLabel="Voltar"
            onPress={() => navigation.navigate("Coordenadas")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Circulos;

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
  img: {
    marginTop: 10,
  },
});
