import Perfil from "@/components/Perfil";

import React from "react";
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.contenedorDeTarjetas}>
      <Perfil/>
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

