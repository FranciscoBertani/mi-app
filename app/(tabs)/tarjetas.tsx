import Tarjeta from "@/components/Tarjeta";

import React from "react";
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.contenedorDeTarjetas}>
      <Tarjeta titulo="Tarjeta 1" colorA="cyan" colorB="blue" />
      <Tarjeta titulo="Tarjeta 2" colorA="magenta" colorB="purple" />
      <Tarjeta titulo="Tarjeta 3" colorA="yellow" colorB="orange" />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorDeTarjetas: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
});