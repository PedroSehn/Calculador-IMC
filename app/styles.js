import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginVertical: 10,
  },
  input: {
    width: "100%",
    height: 52,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#d1d5db",
    marginVertical: 8,
  },
  pickerContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d1d5db",
    marginVertical: 8,
  },
  pickerLabel: {
    paddingHorizontal: 12,
    paddingTop: 8,
    fontSize: 14,
    color: "#374151",
  },
  picker: {
    width: "100%",
    height: 44,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 14,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  resultBox: {
    marginTop: 12,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  result: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
});
