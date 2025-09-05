import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface TarjetaProps {
  titulo: string;
  colorA: string;
  colorB: string;
}

export default function Tarjeta ({titulo, colorA, colorB} : TarjetaProps) {
    const [estaActivo, setEstaActivo] = useState(false);

    const cambiarEstilo = () => {
        setEstaActivo(!estaActivo);
    }

    const estiloDinamicoFondo = estaActivo ? colorB : colorA;
    const estiloDinamicoTexto = estaActivo ? styles.textStyleB : styles.textStyleA;

    return (
    <View style={styles.viewStyle}>
        <Pressable  style={[styles.tarjetaStyle, {backgroundColor: estiloDinamicoFondo}]} onPress={cambiarEstilo}>
            <Text style={estiloDinamicoTexto} onPress={cambiarEstilo}>{titulo}</Text>
        </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
    tarjetaStyle : {
        padding : 20,
        height : 150,
        width : 300,
        margin : 10,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
    },
    textStyleA : {
        color : 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    textStyleB : {
        color : 'yellow',
        fontWeight: 'bold',
        fontSize: 20,
    },
    viewStyle : {
        justifyContent: 'center',
        alignItems:'center',
        flex: 1,
        height:"100%",
        width:"100%"
    }
})