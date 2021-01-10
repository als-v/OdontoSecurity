import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Entrevista = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>
          Os problemas que os cirurgiões-dentistas encontraram são na coluna
          vertebral, como cervicalgia, dorsalgia e lombalgia, podendo ocasionar
          hérnia de disco por conta da má postura e com a pressão maior dos
          disco pode ocorrer artrose precoce devido a posição e o desgaste dela.
          Das hérnias de disco a principal que acontece é a cervical, podendo
          causar uma neuropatia dos membros superiores, e com isso perder a
          força no membro e até tendinites crônicas.{"\n\n"}A maioria dos
          tratamentos são realizados com fisioterapia, com o fortalecimento da
          musculatura paravertebral e correção da postura, e também com
          tratamento medicamentoso com anti-inflamatório, analgésico opioides.
          {"\n"}
          CRM/PR: 31932 – RQE: 23569 José Rodolfo Martines Balbino{"\n\n"}
          Lesões:{"\n"}
          Hérnia discal cervical{"\n"}
          Cervicobraquialgia{"\n"}
          Tendinite do supra-espinhal, bursites, epicondilites{"\n"}
          LER (Lesão por Esforço Repetitivo){"\n"}
          Síndrome do Túnel do carpo{"\n\n"}
          Tratamento:{"\n"}
          Primeiramente é necessário retirar a causa do mecanismo de lesão, na
          maioria das vezes má postura, portanto ter cuidado com a postura no
          momento do atendimento, como por exemplo, elevar mais a cadeira do
          paciente para evitar ficar em flexão torácica e cervical com abdução
          de ombro e flexão de cotovelo (postura comum adotada no momento dos
          atendimentos), por um longo período de tempo. A pratica de atividade
          física regular para manter a musculatura fortalecida, bem como
          alongamentos de pescoço, tronco e membros é necessária na prevenção de
          tais lesões. Para a prevenção de doenças ocupacionais é necessário
          conhecer dois pontos: 1. A escolha do equipamento e 2. Relacionado à
          ergonomia correta da posição de trabalho do profissional.{"\n\n"}
          Em relação à Fisioterapia propriamente dita, vai depender muito do
          diagnóstico do paciente. É claro que é necessário tratar a inflamação
          dos tecidos, bem como realizar alongamentos específicos, uso de
          terapia manual para melhorar a circulação sanguínea local e evitar o
          acúmulo de pontos de tensão (trigger points) na musculatura,
          mobilização neural, uso de eletroterapia como meio de analgesia,
          fortalecimento muscular e correção postural. Porém, nada disso será
          eficaz se a causa primária da lesão não for corrigida (má postura, mau
          posicionamento do profissional por longo período de tempo, má posição
          do equipamento de trabalho, etc). É de suma importância que o
          profissional se corrija e corrija seu ambiente de trabalho, e que faça
          uma boa prevenção para que o tratamento fisioterápico seja eficaz.
          {"\n\n"}
          CREFITO 176039 – F Emily de C. Ferrari{"\n"}
          CREFITO 114356 – F Bruna P. Giglioti.{"\n"}
          CREFITO 257641 – F Camila B. Macedo
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
    </ScrollView>
  );
};

export default Entrevista;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
