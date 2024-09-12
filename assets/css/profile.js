import { Button, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
      },

      header: {
        backgroundColor: '#1D2E88',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 40,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
      },

      profileImage: {
        marginTop: 30,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#FFFFFF',
      },

      infoContainer: {
        marginTop: -40,
        backgroundColor: '#E5E5E5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        borderRadius: 20,
        marginBottom: -100
      },

      input: {
        backgroundColor: '#D3D3D3',
        borderRadius: 10,
        marginVertical:10,
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

      logoutButton: {
        backgroundColor: '#8D1F1F',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 10,
        marginHorizontal: 50,
        marginBottom: 70,
      },
      
      logoutButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },

      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },

      modalView: {
        width: '90%',
        backgroundColor: '#1B266B',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },

      modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#FFFFFF',
      },

      modalInput: {
        width: '100%',
        height: 40,
        backgroundColor: '#D3D3D3', 
        color: '#000', 
        borderWidth: 0, 
        borderRadius: 10,
        paddingLeft: 8,
        marginBottom: 10,
      },

      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        width: '100%', 
        marginTop: 20, 
      },
      

});

export default styles;
