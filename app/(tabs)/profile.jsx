import React, { useEffect, useState } from 'react';
import { View, Text, Alert, TouchableOpacity, Image, TextInput, Modal, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { deleteSession, getSession, deleteUserAccount, fetchUser, account} from '../../lib/appwrite';
import styles from '../../assets/css/profile';
import { icons } from '../../constants';

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    phone: '',
    profileImage: ''
  });

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await getSession();
        if (!session) {
          router.replace('/sign-in');
        } else {
          const user = await fetchUser();
          setUserData({
            ...userData,
            name: user.name,
            email: user.email,
          });
        }
      } catch (error) {
        console.log('Error al verificar la sesión:', error.message);
      }
    };

    checkSession();
  }, []);

  const handleLogout = async () => {
    try {
      const session = await getSession();
      if (session) {
        await deleteSession();
        router.replace('/sign-in');
      } else {
        Alert.alert('Error', 'No hay una sesión activa');
      }
    } catch (error) {
      Alert.alert('Error al cerrar sesión', error.message);
    }
  };

  const handleDeleteAccount = async () => {
    Alert.alert(
      "Confirmación de eliminación",
      "¿Estás seguro de que deseas eliminar tu cuenta? Esta acción es irreversible.",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Eliminar",
          onPress: async () => {
            try {
              await deleteUserAccount();
              Alert.alert('Cuenta eliminada', 'Tu cuenta ha sido eliminada exitosamente.');
              router.replace('/sign-in');
            } catch (error) {
              Alert.alert('Error', 'Hubo un problema al eliminar la cuenta: ' + error.message);
            }
          },
          style: "destructive"
        }
      ]
    );
  };

  const handleEditProfile = () => {
    setModalVisible(true);
  };

  const handleSaveProfile = async () => {
    try {
      if (!userData.password) {
        Alert.alert('Error', 'La contraseña es obligatoria para actualizar el perfil.');
        return;
      }
  
      // Actualizar el perfil del usuario en Appwrite
      await account.updateEmail(userData.email, userData.password); // Proporcionar la contraseña
      if (userData.password) {
        await account.updatePassword(userData.password);
      }
  
      // Actualizar el perfil del usuario en la colección de clientes en la base de datos personalizada
      const userDocumentId = await fetchUserDocumentId(userData.email); // Método para obtener el ID del documento de usuario
      await databases.updateDocument(
        appwriteConfig.databaseId,
        appwriteConfig.clienteId,
        userDocumentId, // ID del documento del usuario
        {
          Nombre: userData.name,
          Apellido: userData.lastname,
          Correo: userData.email,
          Número: userData.phone,
        }
      );
  
      setModalVisible(false);
      Alert.alert('Perfil actualizado', 'Los cambios han sido guardados exitosamente.');
  
      // Actualizar datos del usuario en el estado principal
      const updatedUser = await fetchUser();
      setUserData({
        ...userData,
        name: updatedUser.name,
        lastname: updatedUser.lastname,
        email: updatedUser.email,
        phone: updatedUser.phone,
      });
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al actualizar el perfil: ' + error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Sección del perfil */}
      <View style={styles.header}>
        <Image
          source={{ uri: userData.profileImage || 'https://via.placeholder.com/100' }}
          style={styles.profileImage}
        />
      </View>

      {/* Campos de información del usuario */}
      <View style={styles.infoContainer}>
        <TextInput style={styles.input} placeholder="Nombre" value={userData.name} />
        <TextInput style={styles.input} placeholder="Correo" value={userData.email} />
        <TextInput style={styles.input} placeholder="Número de contacto" value={userData.phone} />
      </View>

      {/* Botones de edición y borrado */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={handleDeleteAccount}>
          <Text>🗑️</Text>
          <Text style={styles.iconText}>Borrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={handleEditProfile}>
          <Text>✏️</Text>
          <Text style={styles.iconText}>Editar</Text>
        </TouchableOpacity>
      </View>

      {/* Botón Cerrar Sesión */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>

      {/* Modal para editar perfil */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Editar Perfil</Text>

            <TextInput
              style={styles.modalInput}
              placeholder="Nombre"
              value={userData.name}
              onChangeText={(text) => setUserData({ ...userData, name: text })}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Correo"
              value={userData.email}
              onChangeText={(text) => setUserData({ ...userData, email: text })}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Contraseña"
              secureTextEntry={true}
              value={userData.password}
              onChangeText={(text) => setUserData({ ...userData, password: text })}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Número de contacto"
              value={userData.phone}
              onChangeText={(text) => setUserData({ ...userData, phone: text })}
            />
            <View style={styles.buttonContainer}>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} color="red" />
              <Button title="Guardar" onPress={handleSaveProfile} />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Profile;
