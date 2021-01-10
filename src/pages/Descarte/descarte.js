import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Descarte = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        O local correto para descarte de materiais perfuro cortantes (grupo E)
        segundo a ANVISA (Agência Nacional de Vigilância Sanitária) é em
        recipientes rígidos, resistentes à punctura, ruptura e vazamento, com
        tampa e devidamente identificados, com descrição “Perfuro cortante” e os
        riscos adicionais quando houver como químico ou radiológico.{"\n\n"}
        As caixas coletoras perfuro cortantes devem ser fabricadas de acordo com
        as normas da ABNT NBR 13853, onde fornece proteção contra perfurações,
        vazamentos e garante segurança aos usuários. ( ANVISA){"\n\n"}É proibido
        esvaziar os recipientes para reutiliza-los. As agulhas devem ser
        abandonadas com as seringas, quando descartáveis, é proibido
        reencapá-las ou fazer sua retirada com as mãos.{"\n\n"}
        Os recipientes coletores têm capacidade que varia de 3 a 13 litros, são
        confeccionados em material resistente (papelão couro), especialmente
        desenvolvido para utilização em serviços de saúde e, de preferência,
        possuir desconectador de agulhas.{"\n\n"}O volume dos recipientes
        coletores, ou de acondicionamento, deve ser compatível com a geração
        diária deste tipo de resíduo.{"\n\n"}
        Estes recipientes só devem ser preenchidos até os 2/3 de sua capacidade,
        ou o nível de preenchimento ficar a 5 (cinco) cm de distância da boca do
        recipiente.
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

export default Descarte;

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
