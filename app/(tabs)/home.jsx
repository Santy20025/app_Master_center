import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, Dimensions, ScrollView, StatusBar } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

import styles from '../../assets/css/home';

const images = [
  require('../../assets/images/MASTER-CENTER.jpg'),  // Asegúrate de que estas rutas sean correctas
  require('../../assets/images/login-bg.jpeg'),
  require('../../assets/images/carro.jpeg'),
];

const home = () => {
  const scrollViewRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Cambio automático de imagen cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        scrollViewRef.current.scrollTo({ x: nextIndex * viewportWidth, animated: true });
        return nextIndex;
      });
    }, 3000); // Cambia la imagen cada 3 segundos
    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  const onScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / viewportWidth);
    setActiveIndex(index);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Carrusel con ScrollView horizontal */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        style={styles.carousel}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.carouselItem}>
            <Image source={image} style={styles.carouselImage} />
          </View>
        ))}
      </ScrollView>
      
      {/* Texto después del carrusel */}
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Nosotros</Text>
        <Text style={styles.description}>
          En Master Center, nos especializamos en la reparación y mantenimiento de vehículos BMW y Mini Cooper.
        </Text>
        <Text style={styles.description}>
          Con años de experiencia en el sector automotriz, nuestro equipo de profesionales está comprometido a ofrecer un servicio de alta calidad para garantizar la satisfacción y seguridad de nuestros clientes.
        </Text>

        <View>
          <Image style={styles.Image} source={require('../../assets/images/acerca de.jpeg')}/>
        </View>

        {/* Ubicación y otros textos */}
        <Text style={styles.locationHeading}>Ubicación</Text>
        <Text style={styles.description}>
          Ubicados en la Avenida 134 en Bogotá, Colombia, contamos con instalaciones modernas y equipadas con la tecnología más avanzada.
        </Text>
        <Text style={styles.description}>
          Desde mantenimientos preventivos hasta reparaciones complejas, estamos aquí para ayudarle.
        </Text>
      </View>
      <StatusBar backgroundColor='#ffff' style="ligth"/>
    </ScrollView>
  );
};

export default home;
