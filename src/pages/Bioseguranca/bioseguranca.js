import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Bioseguranca = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Controle de risco físico:</Text>

        <Text style={styles.text}>
          Ruídos, radiação ionizante ou não, vibrações, materiais
          perfuro-cortantes, ultrassom, etc.
        </Text>

        <Text style={styles.title}>Controle de risco químico:</Text>

        <Text style={styles.text}>Ácidos, resinas, mercúrio, poeira.</Text>

        <Text style={styles.title}>Controle de risco biológico:</Text>

        <Text style={styles.text}>Secreções com bactérias, vírus, fungos.</Text>

        <Text style={styles.title}>
          Controle de risco ergonômico e emocional:
        </Text>

        <Text style={styles.text}>
          Má postura, ritmo excessivo de trabalho, monotonia, depressão,
          estresse, etc.
        </Text>

        <Text style={styles.title}>Controle de risco de acidente:</Text>

        <Text style={styles.text}>
          Equipamento sem proteção, armazenamento inadequado, falta de adoção
          das medidas de precaução padrão.
        </Text>

        <Text style={styles.title}>
          Tendo algumas medidas de proteção que evitam maiores riscos da saúde
          do profissional e sua equipe:
        </Text>

        <Text style={styles.text2}>
          Exame médico periódico imunização degermação (redução ou remoção
          parcial dos microrganismos da pele, ou outros tecidos por métodos
          químico-mecânicos), esquema vacinal básico para equipe de saúde.
          Medidas que evitam contato direto com a matéria orgânica: uso de
          barreiras protetoras – EPI (Equipamento de proteção individual) (De
          acordo com a NR-6 da Portaria nº 3214 de 8 de junho de 1978, do
          Ministério do Trabalho e Emprego, considera-se EPI (Equipamento de
          Proteção Individua)l todo dispositivo de uso individual destinado a
          proteger a saúde e a integridade física do trabalhador) ou cobrir os
          equipamentos com plástico estéril e de uso único limitando a
          propagação de microrganismos na superfície de objetos, realizando a
          limpeza, desinfecção dos artigos e das superfícies na sequencia de
          limpeza, desinfecção, esterilização, antissepsia descarte de lixo
          contaminado e não contaminado.
        </Text>

        <Text style={styles.title}>Resumo:</Text>

        <Text style={styles.text2}>
          As manobras têm como finalidade evitar a proliferação e transmissão de
          microrganismos junto com proteger o profissional da saúde que já foi
          imunizado a tal doença. (CUNHA)
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

export default Bioseguranca;

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
  text2: {
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
});
