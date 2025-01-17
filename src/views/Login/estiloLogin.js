import { StyleSheet } from "react-native";

const estiloLogin = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 37,
    color: "#FFFFFF",
    fontFamily: "Trebuchet MS",
    fontWeight: "bold",
    textAlign: "center",
    position: "relative",
    top: 130,
  },
  fundo: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  text: {
    position: "relative",
    top: 140,
    textAlign: "center",
    color: "white",
    fontFamily: "Trebuchet MS",
    fontSize: 15,
    opacity: 0.9,
  },
  botaoLoginTexto: {
    fontFamily: "Trebuchet MS",
    fontSize: 23,
    color: "#FFFFFF",
  },
  botaoLoginContainer: {
    marginTop: 50,
    position: "relative",
    top: 130,
    height: 60,
    width: 220,
    borderWidth: 5,
    borderColor: "#5667ff",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    backgroundColor: "#5667ff",
    justifyContent: "center",
    alignItems: "center",
  },
  botaoRegistrarContainer: {
    zIndex: 1,
    marginTop: 20,
    position: "relative",
    top: 130,
    height: 65,
    width: 220,
    borderWidth: 5,
    borderColor: "#5667ff",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoRegistrarTexto: {
    fontFamily: "Trebuchet MS",
    fontSize: 23,
    color: "#5667ff",
  },
});

export default estiloLogin;
