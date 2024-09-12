import { StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    blueBackground: {
        backgroundColor: '#1A2B6D',
        height: 240,
        width: 420,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        position: 'absolute',
        top: 0,
    },
    card: {
        backgroundColor: '#E0E0E0',
        borderRadius: 20,
        padding: 20,
        marginTop: 120,
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    vehicleContainer: {
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    vehicleDetail: {
        marginBottom: 12,
    },
    modalInput: {
        backgroundColor: '#D3D3D3',
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'flex-end',
        marginRight: 30, 
        marginBottom: -40
      },

      iconButton: {
        alignContent:'Left',
        alignItems: 'center',
        marginLeft: 10,
        
      },

      iconText: {
        fontSize: 12,
        color: '#888888',
      },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#F0F0F0',
        padding: 20,
        borderRadius: 20,
        width: '85%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    modalInputContainer: {
        marginBottom: 15,
    },
    saveButton: {
        backgroundColor: '#8B0000',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#A9A9A9',
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
    },
    noVehicleText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#8B0000',
        marginTop: 20,
    },

    addButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end', // Alinea los elementos al final del contenedor
        margin: 80,
      },
      addButton: {
        backgroundColor: '#711515', // Color verde
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        width: '100%' // Sombra en Android
      },
      buttonText: {
        color: '#FFFFFF', // Texto blanco
        fontSize: 16,
        fontWeight: 'bold',
      },
      
});

export default styles;
