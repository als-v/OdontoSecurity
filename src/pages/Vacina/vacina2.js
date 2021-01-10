import React from "react";
import { Button, View, StyleSheet, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Vacina2 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Hepatite B</Text>

        <Text style={styles.text}>
          É indicado fazer o Anti-HBs entre o sétimo e o decimo terceiro mês
          para documentar a viragem sorológica e a cada tres anos para ratificar
          a imunidade para a Hepatite B. {"\n"}
          Número de doses: três doses via intramuscular no M. deltoide. {"\n"}
          Período de aplicação: aplicasse a segunda dose um mês após a primeira,
          e a última cinco meses após segunda dose.
        </Text>

        <Text style={styles.title}>Gripe (Influenza)</Text>

        <Text style={styles.text}>
          Número de doses: uma dose anualmente via intramuscular. {"\n"}
          Período de aplicação:
        </Text>

        <Text style={styles.title}>
          Tétano e Difteria (dT adulto ou toxoide tetânico)
        </Text>

        <Text style={styles.text}>
          Vacinar gestantes a partir do segundo trimestre. {"\n"}
          Número de doses: três doses via intramuscular. {"\n"}
          Período de aplicação: aplicasse a segunda dose entre quatro a oito
          semanas após a primeira dose, e a terceira dose entre seis a doze
          semanas após a segunda, com reforço de dose única a cada dez anos.
        </Text>

        <Text style={styles.title}>Varicela</Text>

        <Text style={styles.text}>
          É contraindicado para gestantes e é aconselhável evitar gestação até
          um mês após receber a vacina. {"\n"}
          Número de doses: duas doses via subcutânea. {"\n"}
          Período de aplicação: aplicasse a segunda dose entre quatro a oito
          semanas após a primeira.
        </Text>

        <Text style={styles.title}>
          Rubéola, Sarampo e Caxumba (MMR Tríplice Viral)
        </Text>

        <Text style={styles.text}>
          É contraindicada na gestação e recomenda-se evitar gestação até um mês
          após receber a vacina. Contraindicada para alérgico a ovo e neomicina.{" "}
          {"\n"}
          Número de doses: uma dose via subcutânea. {"\n"}
          Período de aplicação: recomendasse uma segunda dose para atingir
          melhor imunização sendo o intervalo de um mês após a primeira dose.
        </Text>

        <Text style={styles.title}>Tuberculose (BCG)</Text>

        <Text style={styles.text}>
          Apesar de não existir estudos que comprovem sua eficiência na fase
          adulta, alguns autores ainda indicam a BCG (Bacille Calmette-Guérin)
          para prevenção da tuberculose em profissionais de saúde. {"\n"}
          Número de doses: {"\n"}
          Período de aplicação:
        </Text>

        <Text style={styles.title}>
          Tríplice bacteriana para adultos (DTP: Coqueluche, Tétano e Difteria):
        </Text>

        <Text style={styles.text}>
          Como terceiro reforço, já que faz parte do calendário básico de
          vacinação da criança. {"\n"}
          Número de doses: uma dose via intramuscular. {"\n"}
          Período de aplicação:
        </Text>

        <Text style={styles.title}>Hepatite A</Text>

        <Text style={styles.text}>
          Indicada na profilaxia pós-exposição. {"\n"}
          Número de doses: duas doses via intramuscular. {"\n"}
          Período de aplicação: aplicasse a segunda dose seis meses após a
          primeira dose. {"\n"}
          (Dental Cremer, 2017)
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

export default Vacina2;

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
