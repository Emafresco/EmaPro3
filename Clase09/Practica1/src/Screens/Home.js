import React, { Component } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import Contador from "../Components/Contador";

class Home extends Component {
  saludar() {
    console.log("me clickearon");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hola Mundo!</Text>

        <Pressable onPress={() => this.saludar()} style={styles.boton}>
          <Text style={styles.textoBoton}>Clickeame</Text>
        </Pressable>

        <Contador />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
  container: {
    textAlign: "center",
    padding: 10,
  },
  
  boton: {
    padding: 4,
    backgroundColor: "#ccc",
    marginBottom: 10,
    borderRadius: 4,
  },
  
  textoBoton: {
    fontWeight: "bold",
  },
});

export default Home;


