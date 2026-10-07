import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#111", padding: 16, paddingTop: 50 },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#222",
    color: "white",
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  buttons: { flexDirection: "row" },
  button: {
    backgroundColor: "#7C5CFF",
    borderRadius: 8,
    padding: 10,
    marginRight: 8,
  },
  buttonText: { color: "white", fontWeight: "bold" },
  card: {
    backgroundColor: "#222",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  cardDone: { backgroundColor: "#1d3b2c" },
  text: { color: "white", fontSize: 16 },
  streak: { color: "gray" },
});
