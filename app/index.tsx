import React, { JSX, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Home(): JSX.Element {
  const [peso, setPeso] = useState<string>("");
  const [altura, setAltura] = useState<string>("");
  const [resultado, setResultado] = useState<string>("");

  // Converte "72,5" -> 72.5 e remove lixo
  function toNumber(value: string): number {
    const normalized = value.replace(",", ".").replace(/[^\d.]/g, "");
    return parseFloat(normalized);
  }

  function calcularIMC(): void {
    const pesoNum = toNumber(peso);
    const alturaEntrada = toNumber(altura);

    if (!pesoNum || !alturaEntrada) {
      setResultado("Preencha peso e altura corretamente.");
      return;
    }

    // Se digitou 175, 180 etc, converte para metros
    const alturaM = alturaEntrada > 3 ? alturaEntrada / 100 : alturaEntrada;

    if (alturaM <= 0) {
      setResultado("Altura inválida.");
      return;
    }

    const imc = pesoNum / (alturaM * alturaM);

    let classificacao = "";
    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 24.9) classificacao = "Peso normal";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else classificacao = "Obesidade";

    setResultado(`IMC: ${imc.toFixed(2)} (${classificacao})`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Peso (kg) — ex: 72.5"
        keyboardType="decimal-pad"
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (m ou cm) — ex: 1.75 ou 175"
        keyboardType="decimal-pad"
        value={altura}
        onChangeText={setAltura}
      />

      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>

      {resultado ? <Text style={styles.result}>{resultado}</Text> : null}
    </View>
  );
}
