import { StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      carousel: {
        height: 250,
      },
      carouselItem: {
        width: viewportWidth,
        height: 250,
      },
      carouselImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
      textContainer: {
        padding: 20,
      },
      Image:{
        width: 381,
        height: 186,
        marginTop: 20
      },
      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
      },
      description: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 5,
      },
      locationHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
      },
});

export default styles;
