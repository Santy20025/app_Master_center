import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

      headerContainer: {
        width: '100%',
        height: 450,
        backgroundColor: '#1B266B', 
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
        borderBottomLeftRadius: 67, 
        borderBottomRightRadius: 67, 
        position: 'relative', 
        zIndex: 1, 
        flex: 1
      },

      logo: {
        width: 187,
        height: 187,
        borderRadius: 100,
        borderColor: 'white',
    },

      textBackground: {
        marginTop: 10,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        minWidth: 229,
        minHeight: 50,
        overflow: 'hidden',
        position: 'relative',
      },
  
      backgroundImageStyle: {
        width: 250,
        height: '150%',
        opacity: 0.6, 
      },

      text: {
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent', 
        marginTop: 2
      },

      form: {
        width: '90%',
        backgroundColor: 'white', 
        padding: 20,
        borderRadius: 10, 
        marginTop: -94, 
        zIndex: 2, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 10, 
        marginLeft: 20,
      },

      inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },

      input: {
        width: '48%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 20,
        borderRadius: 5,
      },

      inputFull: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 20,
        borderRadius: 5,
      },

      button: {
        backgroundColor: '#711515', 
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },

      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },

      footer: {
        marginTop: 80,
        alignItems: 'center',
      },

      footerText: {
        fontSize: 16,
        color: '#666',
      },

      loginText: {
        color: '#1B266B',
        fontWeight: 'bold',
        marginTop: 10,
      },
});

export default styles;
