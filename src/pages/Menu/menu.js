import React from "react";
import { Button, View, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.button1}>
          <Button
            color="#1Bc3ce"
            title="Vacinas"
            accessibilityLabel="Vacina"
            onPress={() => navigation.navigate("Vacina")}
          />
        </View>

        <View style={styles.button}>
          <Button
            color="#1Bc3ce"
            title="PEP"
            accessibilityLabel="PEP"
            onPress={() => navigation.navigate("PEP")}
          />
        </View>

        <View style={styles.button}>
          <Button
            color="#1Bc3ce"
            title="CRO e ANVISA"
            accessibilityLabel="CRO e ANVISA"
            onPress={() => navigation.navigate("CRO")}
          />
        </View>

        <View style={styles.button}>
          <Button
            color="#1Bc3ce"
            title="Manobras de Biosegurança"
            accessibilityLabel="Manobras de Biosegurança"
            onPress={() => navigation.navigate("Bioseguranca")}
          />
        </View>

        <View style={styles.button}>
          <Button
            color="#1Bc3ce"
            title="Projeto consultório"
            accessibilityLabel="Projeto consultório"
            onPress={() => navigation.navigate("Consultorio")}
          />
        </View>

        <View style={styles.button}>
          <Button
            color="#1Bc3ce"
            title="Instrumentos Críticos"
            accessibilityLabel="Tabela Instrumentos Críticos"
            onPress={() => navigation.navigate("Instrumentos")}
          />
        </View>

        <View style={styles.button}>
          <Button
            color="#1Bc3ce"
            title="Esterilização de Instrumentos"
            accessibilityLabel="Esterilização de Instrumentos"
            onPress={() => navigation.navigate("Esterilizacao")}
          />
        </View>

        <View style={styles.button}>
          <Button
            color="#1Bc3ce"
            title="Controle de humidade"
            accessibilityLabel="Utensílios para controle de humidade"
            onPress={() => navigation.navigate("Humidade")}
          />
        </View>

        <View style={styles.button}>
          <Button
            color="#1Bc3ce"
            title="Fotopolimerizador"
            accessibilityLabel="Fotopolimerizador"
            onPress={() => navigation.navigate("Fotopolimerizador")}
          />
        </View>

        <View style={styles.button}>
          <Button
            color="#1Bc3ce"
            title="Limpeza e Assepsia"
            accessibilityLabel="Limpeza e Assepsia"
            onPress={() => navigation.navigate("Assepsia")}
          />
        </View>

        <View style={styles.button}>
          <Button
            color="#1Bc3ce"
            title="Manipulação"
            accessibilityLabel="Manipulação"
            onPress={() => navigation.navigate("Manipulacao")}
          />
        </View>

        <View style={styles.button}>
          <Button
            color="#1Bc3ce"
            title="Coordenadas"
            accessibilityLabel="Coordenadas"
            onPress={() => navigation.navigate("Coordenadas")}
          />
        </View>

        <View style={styles.button}>
          <Button
            color="#1Bc3ce"
            title="Descarte de materiais"
            accessibilityLabel="Descarte de materiais"
            onPress={() => navigation.navigate("Descarte")}
          />
        </View>

        <View style={styles.button}>
          <Button
            color="#1Bc3ce"
            title="Classificação de resíduos"
            accessibilityLabel="Classificação de resíduos"
            onPress={() => navigation.navigate("Residuo")}
          />
        </View>

        <View style={styles.button}>
          <Button
            color="#1Bc3ce"
            title="Entrevista com profissionais"
            accessibilityLabel="Entrevista com profissionais"
            onPress={() => navigation.navigate("Entrevista")}
          />
        </View>

        <View style={styles.button}>
          <Button
            color="#1Bc3ce"
            title="Referências Bibliográficas"
            accessibilityLabel="Referências Bibliográficas"
            onPress={() => navigation.navigate("Referencia")}
          />
        </View>

        <View style={styles.button}>
          <Button
            color="#ff0532"
            title="Sair"
            accessibilityLabel="Sair"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  button1: {
    width: 300,
    height: 50,
    marginTop: 20,
  },
  button: {
    width: 300,
    height: 50,
  },
});
