import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Contador () {
  const [contador, setContador] = useState (0);
  
  const incrementar = () => {
    setContador (prev => prev + 1);
  }

  const decrementar = () => {
    setContador (prev => prev - 1);
  }

  return(
    <View style={styles.viewStyle}>
        <View>
            <Text style = {{justifyContent: 'center' }}>Contador: {contador}</Text>
        </View>
        <View style={styles.contadorStyle}>
            <Pressable style={styles.pressableStyle} onPress={incrementar}>
                <Text>Incrementar</Text>
            </Pressable>
            <Pressable style={styles.pressableStyle} onPress={decrementar}>
                <Text>Decrementar</Text>
            </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    pressableStyle : {
        backgroundColor : 'powderblue',
        padding : 20,
    },
    contadorStyle : {
        flexDirection : 'row'
    },
    viewStyle : {
        justifyContent: 'center',
        alignItems:'center',
        flex: 1,
        height:"100%",
    }
})

