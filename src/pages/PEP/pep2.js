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

const PEP2 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>
          O ideal é que a PEP seja iniciada nas primeiras 2h pós infecção, com
          um prazo máximo de até 72 horas.{"\n\n"}
          Os esquemas preferenciais para PPE estabelecidos pelo Ministério da
          Saúde são:{"\n\n"}
          1) Básico – ZIDOVUDINA (AZT) + LAMIVUDINA (3TC) – Preferencialmente
          combinados em um mesmo comprimido. Esquema alternativo: TENOFOVIR +
          LAMIVUDINA (TDF + 3TC) ou ESTAVUDINA + LAMIVUDINA (d4T + 3TC).{"\n\n"}
          2) Ampliado – ZIDOVUDINA (AZT) + LAMIVUDINA (3TC) + LOPIVANIR/
          RITONAVIR ou ZIDOVUDINA (AZT) + LAMIVUDINA (3TC) + TENOFOVIR Esquema
          alternativo TENOFOVIR + LAMIVUDINA + LOPIVANIR/ RITONAVIR.{"\n\n"}
          Doses habitualmente utilizadas na infecção pelo HIV/Aids devem ser
          prescritas nos esquemas de PPE.{"\n\n"}O esquema padrão de AZT
          (zidovudina) associado a 3TC (lamivudina) está indicado para a maioria
          das exposições.
        </Text>

        <Text style={styles.title}>HIV</Text>

        <Image
          style={styles.img}
          source={require("../../../imagens/hiv.png")}
        />

        <Text style={styles.title}>Hepatite B</Text>

        <Image
          style={styles.img}
          source={require("../../../imagens/hepatiteB.png")}
        />

        <Text style={styles.title}>Hepatite C</Text>

        <Image
          style={styles.img}
          source={require("../../../imagens/hepatiteC.png")}
        />

        <Text style={styles.title}>
          Exames a serem realizados no paciente-fonte do acidente
        </Text>

        <Text style={styles.text}>
          Teste rápido para HIV; HBs Ag; Anti-HBc IgM; Anti-HCV; Anti-HIV
          convencional (Elisa)
        </Text>

        <Text style={styles.title}>
          Exames a serem realizados no acidentado
        </Text>

        <Text style={styles.text}>
          Se documentadamente imunizado para hepatite B (AntiHBs maior ou igual
          a 10 UI/L): − anti-HCV; − TGP/ALT; − anti-HIV.{"\n\n"}Sem evidência de
          proteção para hepatite B, não sabe ou não realizado: − HBsAg; −
          anti-HBc IgM; − anti-HBs; − anti-HCV; − anti-HIV; − TGP/ALT.
        </Text>

        <Text style={styles.title}>
          Exames a serem solicitados no caso de indicação de Profilaxia
          Pós-Exposição (PPE)
        </Text>

        <Text style={styles.text}>
          Hemograma+Plaquetas; TGO (AST) e TGP(ALT); Bilirrubinas; Uréia;
          Creatinina; Glicemia, quando for utilizado o esquema ampliado;{"\n"}
          (Trindade, DM et al,2011 pg. 45 e 46)
        </Text>

        <View style={{ height: 50 }}></View>

        <View style={styles.buttonContainer}>
          <Button
            color="#ff0532"
            title="              Voltar              "
            accessibilityLabel="Voltar"
            onPress={() => navigation.navigate("PEP")}
          />

          <Button
            color="#1Bc3ce"
            title="      Página anterior     "
            accessibilityLabel="Página anterior"
            onPress={() => navigation.navigate("PEP1")}
          />
        </View>

        <View style={{ height: 25 }}></View>
      </View>
    </ScrollView>
  );
};

export default PEP2;

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
    height: 2480,
    right: 40,
    top: 150,
  },
  title: {
    fontSize: 23,
    marginTop: 25,
    marginLeft: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  img: {
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
