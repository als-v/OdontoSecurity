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

const Horas = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>
          O esquema funciona como em um mostrador de relógio imaginário colocado
          sobre a cadeira odontológica, apresentando número 12 do relógio
          posicionado na cabeça do paciente e o número 6 em seus pés.{"\n\n"}A
          posição pode ser determinada com base no posicionamento do
          profissional em relação a seu paciente. Normalmente, o profissional
          destro posiciona-se em 7, 9 ou 11 horas e o canhoto em 5, 3 e 1 horas.{" "}
          {"\n\n"}
          Para o dentista destro, ainda conforme Porto (1994), a posição com as
          costas voltadas para as 7 h e com as pernas paralelas a cadeira é
          contraindicada por obrigar o dentista a inclinar o corpo para 12 h à
          direita, causando prejuízos posturais. A posição 9 h é muito adotada
          por permitir trabalhar em visão direta, mesmo nas regiões de difícil
          acesso. Nessa posição a perna do dentista fica posicionada sob o
          encosto da cadeira do paciente e do lado direito do braço da cadeira.
          Na posição 11 horas, por sua vez, o dentista fica atrás do paciente
          trabalhando com boa visão indireta, utilizando espelhos, nessa posição
          a perna esquerda do dentista fica sob o encosto da cadeira.{"\n\n"}
          Para o dentista canhoto a posição muda, assim como a posição dos
          equipamentos, localizando-se à esquerda da cadeira do paciente. A
          posição 5 h não é a posição ideal, apresentando os mesmos
          inconvenientes da posição 7 h, sendo as mais indicadas as posições 3 e
          1 h, que correspondem às 9 e 11 h do dentista destro, respectivamente.
        </Text>

        <Image
          style={styles.img}
          source={require("../../../imagens/horas.png")}
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

export default Horas;

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
