import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Vacina1 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>BCG</Text>

        <Text style={styles.text}>
          Protege a criança contra a tuberculose. {"\n"}
          Número de doses: uma dose. {"\n"}
          Período de aplicação: primeiras horas do recém-nascido, deve ser
          aplicada antes do primeiro mês de vida.
        </Text>

        <Text style={styles.title}>DTP e HIB</Text>

        <Text style={styles.text}>
          Vacina tetravalente, ela protege o bebê contra difteria, tétano,
          coqueluche e meningite. {"\n"}
          Número de doses: três doses {"\n"}
          Período de aplicação: aos dois, quatro e seis meses do bebe. Com mais
          duas doses de reforço uma quando a criança atingi um ano e três meses
          e a outra aos quatro anos.
        </Text>

        <Text style={styles.title}>Hepatite B</Text>

        <Text style={styles.text}>
          Contra Hepatite B. {"\n"}
          Número de doses: três doses. {"\n"}
          Período de aplicação: aplicadas após o nascimento, no primeiro mês e
          com seis meses de idade.
        </Text>

        <Text style={styles.title}>Pneumocócica 10</Text>

        <Text style={styles.text}>
          Esta vacina combate a pneumonia, a meningite e a otite. {"\n"}
          Número de doses: quatro doses. {"\n"}
          Período de aplicação: aplicados aos dois, quatro, seis e doze meses de
          idade.
        </Text>

        <Text style={styles.title}>VORH</Text>

        <Text style={styles.text}>
          A Vacina Oral de Rotavírus Humano imuniza o bebê da diarreia provocada
          pelo microorganismo conhecido por rotavírus. {"\n"}
          Número de doses: duas doses. {"\n"}
          Período de aplicação: aplica aos dois e aos quatro meses de idade.
        </Text>

        <Text style={styles.title}>VOP</Text>

        <Text style={styles.text}>
          A Vacina Oral Poliomielite protege a criança contra a chamada
          paralisia infantil. {"\n"}
          Número de doses: duas. {"\n"}
          Período de aplicação: aplica aos quatro e aos seis meses de idade, com
          reforço com um ano e três meses de idade.
        </Text>

        <Text style={styles.title}>Meningocócica C</Text>

        <Text style={styles.text}>
          Contra a meningite. {"\n"}
          Número de doses: três doses. {"\n"}
          Período de aplicação: aplica aos três meses, aos cinco meses e com um
          ano e três meses de idade.
        </Text>

        <Text style={styles.title}>Febre amarela</Text>

        <Text style={styles.text}>
          Contra a febre amarela. {"\n"}
          Número de doses: uma dose. {"\n"}
          Período de aplicação: aplica aos nove meses de idade.
        </Text>

        <Text style={styles.title}>SCR</Text>

        <Text style={styles.text}>
          Conhecida como tríplice viral, a vacina previne contra a caxumba,
          rubéola e sarampo. {"\n"}
          Número de doses: duas doses. {"\n"}
          Período de aplicação: aplica no primeiro ano e com quatro anos de
          idade. {"\n"}
          (Albrecht, N et al,2018) (Fernandez, CS et al,2013)
        </Text>

        <View style={{ height: 20 }}></View>

        <View style={styles.button}>
          <Button
            color="#ff0532"
            title="Voltar"
            accessibilityLabel="Voltar"
            onPress={() => navigation.navigate("Vacina")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Vacina1;

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
