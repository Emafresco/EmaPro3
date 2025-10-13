import React, { Component } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }

  aumentarContador() {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Cantidad de clicks: {this.state.contador}</Text>
        <Pressable onPress={() => this.aumentarContador()} style={styles.boton}>
          <Text style={styles.textoBoton}>Click aquí para contar</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { marginVertical: 5 },
  boton: {
    padding: 7,
    backgroundColor: "rgba(0, 255, 0, 0.5)",
    marginBottom: 10,
    borderRadius: 4,
  },
  textoBoton: { fontWeight: "bold" },
});

export default Contador;




