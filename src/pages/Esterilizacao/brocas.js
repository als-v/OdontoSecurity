import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Brocas = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Brocas de uso único é uma opção, para não causar iatrogênia (dor
        pós-operatória) no dente do paciente. Já no caso de brocas que conservam
        seus diamantes e podendo ser usadas novamente, devem ser imersas em
        detergente enzimático e limpas com escova de aço para brocas ou o uso de
        ultrassom porem as brocas devem estar separadas entre si em um estojo de
        brocas durante a imersão, para evitar danos às lâminas. Seguindo depois
        o processo da esterilização sendo bem inspecionado como qualquer outro
        material e empacotadas em pacotinhos individuais para serem
        autoclavadas.{"\n\n"}
        Autoclave a Vapor 121ºC (250ºF) por 20 minutos a 15 p.s.i.{"\n"}(LOPES).
      </Text>

      <View style={styles.button}>
        <Button
          color="#ff0532"
          title="Voltar"
          accessibilityLabel="Voltar"
          onPress={() => navigation.navigate("Esterilizacao")}
        />
      </View>
    </View>
  );
};

export default Brocas;

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
