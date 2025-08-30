import { Picker } from '@react-native-picker/picker';
import React, { JSX, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export default function Home(): JSX.Element {
  const [peso, setPeso] = useState<string>("");
  const [altura, setAltura] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [sexo, setSexo] = useState<"M" | "F">("M");
  const [resultado, setResultado] = useState<string>("");

  function toNumber(value: string): number {
    const normalized = value.replace(",", ".").replace(/[^\d.]/g, "");
    return parseFloat(normalized);
  }

  function calcular(): void {
    const pesoNum = toNumber(peso);
    const alturaNum = toNumber(altura);
    const idadeNum = parseInt(idade, 10);

    if (!pesoNum || !alturaNum || !idadeNum) {
      setResultado("Preencha todos os campos corretamente.");
      return;
    }

    const alturaM = alturaNum > 3 ? alturaNum / 100 : alturaNum;

    // Cálculo IMC
    const imc = pesoNum / (alturaM * alturaM);
    let classificacao = "";
    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 24.9) classificacao = "Peso normal";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else classificacao = "Obesidade";

    // Cálculo TMB
    let tmb = 0;
    if (sexo === "M") {
      tmb = 88.36 + 13.4 * pesoNum + 4.8 * (alturaM * 100) - 5.7 * idadeNum;
    } else {
      tmb = 447.6 + 9.2 * pesoNum + 3.1 * (alturaM * 100) - 4.3 * idadeNum;
    }

    setResultado(
      `IMC: ${imc.toFixed(2)} (${classificacao})\nTMB estimada: ${tmb.toFixed(0)} kcal/dia`
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora IMC + TMB</Text>

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="decimal-pad"
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (m ou cm)"
        keyboardType="decimal-pad"
        value={altura}
        onChangeText={setAltura}
      />

      <TextInput
        style={styles.input}
        placeholder="Idade (anos)"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Sexo:</Text>
        <Picker
          selectedValue={sexo}
          
          onValueChange={(itemValue: string) => setSexo(itemValue as "M" | "F")}
        >
          <Picker.Item label="Masculino" value="M" />
          <Picker.Item label="Feminino" value="F" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {resultado ? <Text style={styles.result}>{resultado}</Text> : null}
    </View>
  );
}
