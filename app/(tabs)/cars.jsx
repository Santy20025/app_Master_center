import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Alert, FlatList } from 'react-native';
import styles from '../../assets/css/cars';
import { createVehicle, getVehicles } from '../../lib/appwrite';

const Cars = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
      marca: '',
      modelo: '',
      placa: '',
      registro: '',
      kilometraje: '',
      estado: ''
  });
  const [vehicles, setVehicles] = useState([]);

  const handleInputChange = (name, value) => {
      setFormData({
          ...formData,
          [name]: value,
      });
  };

  const agregarVehiculo = async () => {
      const { marca, modelo, placa, registro, kilometraje, estado } = formData;
      if (!marca || !modelo || !placa || !registro || !kilometraje || !estado) {
          Alert.alert('Error', 'Por favor, rellena todos los campos.');
          return;
      }

      try {
          await createVehicle(
              marca,
              modelo,
              placa,
              registro,
              kilometraje,
              estado
          );
          await fetchVehicles();
          setModalVisible(false);
          setFormData({
              marca: '',
              modelo: '',
              placa: '',
              registro: '',
              kilometraje: '',
              estado: ''
          });
      } catch (error) {
          console.error("Error agregando vehículo:", error.message);
      }
  };

  const cancelar = () => {
      setModalVisible(false);
  };

  const fetchVehicles = async () => {
      try {
          const vehicleList = await getVehicles();
          setVehicles(vehicleList);
      } catch (error) {
          console.error('Error obteniendo vehículos:', error.message);
      }
  };

  useEffect(() => {
      fetchVehicles();
  }, []);

    return (
        <View style={styles.container}>
            <View style={styles.blueBackground}></View>
            <View style={styles.card}>
                <Text style={styles.title}>Mis Vehículos</Text>

                <FlatList
                    data={vehicles}
                    keyExtractor={(item) => item.$id}
                    renderItem={({ item }) => (
                        <View style={styles.vehicleContainer}>
                            <View style={styles.vehicleDetail}>
                                <TextInput
                                    style={styles.modalInput}
                                    value={item.Marca}
                                    onChangeText={(value) => handleInputChange('marca', value)}
                                />
                            </View>
                            <View style={styles.vehicleDetail}>
                                <TextInput
                                    style={styles.modalInput}
                                    value={item.Modelo}
                                    onChangeText={(value) => handleInputChange('modelo', value)}
                                />
                            </View>
                            <View style={styles.vehicleDetail}>
                                <TextInput
                                    style={styles.modalInput}
                                    value={item.Placa}
                                    onChangeText={(value) => handleInputChange('placa', value)}
                                />
                            </View>
                            <View style={styles.vehicleDetail}>
                                <TextInput
                                    style={styles.modalInput}
                                    value={item.Registro}
                                    onChangeText={(value) => handleInputChange('registro', value)}
                                />
                            </View>
                            <View style={styles.vehicleDetail}>
                                <TextInput
                                    style={styles.modalInput}
                                    value={item.Kilometraje}
                                    onChangeText={(value) => handleInputChange('kilometraje', value)}
                                />
                            </View>
                            <View style={styles.vehicleDetail}>
                                <TextInput
                                    style={styles.modalInput}
                                    value={item.Estado}
                                    onChangeText={(value) => handleInputChange('estado', value)}
                                />
                            </View>
                        </View>
                    )}
                    ListEmptyComponent={<Text style={styles.noVehicleText}>Por favor registre un vehículo!</Text>}
                />
            </View>

             {/* Botones de edición y borrado */}
            <View style={styles.iconContainer}>
              <TouchableOpacity style={styles.iconButton} >
                <Text>🗑️</Text>
                <Text style={styles.iconText}>Borrar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton} >
                <Text>✏️</Text>
                <Text style={styles.iconText}>Editar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.addButtonContainer}>
                <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Agregar</Text>
                </TouchableOpacity>
            </View>

            <Modal visible={modalVisible} transparent={true} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Agregar Vehículo</Text>
                        {['Marca', 'Modelo', 'Placa', 'Kilometraje', 'Estado'].map((field, index) => (
                            <View key={index} style={styles.modalInputContainer}>
                                <TextInput
                                    style={styles.modalInput}
                                    placeholder={field}
                                    value={formData[field.toLowerCase()]}
                                    onChangeText={(value) => handleInputChange(field.toLowerCase(), value)}
                                />
                            </View>
                        ))}
                        <View style={styles.modalInputContainer}>
                            <TextInput
                                style={styles.modalInput}
                                placeholder="Registro (YYYY-MM-DD)"
                                value={formData.registro}
                                onChangeText={(value) => handleInputChange('registro', value)}
                                keyboardType="numeric"
                            />
                        </View>
                        <TouchableOpacity style={styles.saveButton} onPress={agregarVehiculo}>
                            <Text style={styles.buttonText}>Agregar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton} onPress={cancelar}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Cars;
