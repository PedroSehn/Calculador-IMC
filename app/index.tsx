import React, { JSX, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Home(): JSX.Element {
  const [peso, setPeso] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");

  function mostrarPeso(): void {
    setMensagem(`Peso digitado: ${peso} kg`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite seu peso</Text>

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <TouchableOpacity style={styles.button} onPress={mostrarPeso}>
        <Text style={styles.buttonText}>Mostrar peso</Text>
      </TouchableOpacity>

      {mensagem ? <Text style={styles.result}>{mensagem}</Text> : null}
    </View>
  );
}
