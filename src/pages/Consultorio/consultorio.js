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

const Consultorio = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>
          Ao se projetar o ambiente de atendimento odontológico, é fundamental
          efetuar um estudo do espaço físico, das instalações hidrossanitárias,
          elétricas, de gases medicinais e a distribuição dos equipamentos
          odontológicos fixos e móveis. A simplificação obtida através do bom
          uso do espaço físico constitui um elemento importante na
          produtividade, e sendo bem planejada, permite a redução de tempo e
          movimentos na execução das atividades sendo esse o cumprimento das
          RDC/ANVISA n.º 50, de 21 de fevereiro de 2002.{"\n\n"}
          Conforme a RDC/ANVISA n.º 50/02, o consultório odontológico individual
          deve possuir área mínima de 9 m2, devendo possuir uma distância mínima
          livre de 0,8 m na cabeceira e de 1 m nas laterais de cada cadeira
          odontológica. Entre duas cadeiras, a distância mínima deve ser de 2 m,
          para permitir a circulação dos profissionais e minimizar a
          contaminação por aerossóis. Devem dispor de instalações hidráulicas
          (água fria e esgoto), elétricas (pontos de força e iluminação),
          iluminação natural ou artificial, ventilação natural ou forçada e,
          caso necessário, gases medicinais (oxigênio, ar comprimido e vácuo
          medicinal).{"\n\n"}
          Os consultórios odontológicos devem ainda possuir os seguintes
          ambientes de apoio: Sala de espera para pacientes e acompanhantes com
          área mínima de 1,2 m2 por pessoa. Depósito de material de limpeza
          (DML) com área mínima de 2 m2 e dimensão mínima de 1 m, equipado com
          tanque. Sanitário(s) para pacientes e público com área mínima de 1,6
          m2 e dimensão mínima de 1 m. Central de material esterilizado (CME)
          simplificada com dois ambientes contíguos: ambiente sujo - sala de
          lavagem e descontaminação de materiais com bancada pia e guichê para a
          área limpa (sala de esterilização de material), com área mínima de 4,8
          m2. Ambiente limpo - sala de preparo/esterilização/estocagem de
          material, com bancada para equipamentos de esterilização, armários
          para guarda de material e guichê para distribuição de material, com
          área mínima de 4,8 m².{"\n\n"}
          Os materiais para o revestimento de paredes, pisos e tetos de
          ambientes de áreas críticas e semicríticas devem ser resistentes à
          lavagem e ao uso de desinfetantes.{"\n"}(CFO)
        </Text>

        <Image
          style={styles.img}
          source={require("../../../imagens/consultorio.png")}
        />

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

export default Consultorio;

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
