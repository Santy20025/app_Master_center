import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        marginTop: 40.
      },
      card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
      },
      description: {
        fontSize: 14,
        color: '#666',
      },
});

export default styles;
