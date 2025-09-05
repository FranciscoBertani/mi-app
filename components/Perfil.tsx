import { useState } from "react";
import { Button, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Perfil() {
  const [nombre, setNombre] = useState<string>("Francisco Bertani");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [nuevoNombre, setNuevoNombre] = useState<string>(nombre);

  const guardarNombre = () => {
    setNombre(nuevoNombre);
    setModalVisible(false);
  };

  return (
    <View style={styles.viewStyle}>
      <Pressable style={styles.tarjetaStyle} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Nombre: {nombre}</Text>
      </Pressable>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.textStyle}>Cambiar nombre</Text>
            <TextInput
              style={styles.input}
              value={nuevoNombre}
              onChangeText={setNuevoNombre}
              placeholder="Nuevo nombre"
            />
            <View style={styles.buttons}>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} />
              <Button title="Guardar" onPress={guardarNombre} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: "100%",
    width: "100%",
  },
  tarjetaStyle: {
    padding: 20,
    height: 150,
    width: 300,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "darksalmon",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    width: 300,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    width: "100%",
    padding: 10,
    marginVertical: 15,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
});
