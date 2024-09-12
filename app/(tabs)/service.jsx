import { View, Text, Image, ScrollView } from 'react-native';
import styles from '../../assets/css/service';
import React from 'react'

const Bookmark = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Mantenimiento Preventivo */}
      <View style={styles.card}>
        <Image
          source={require('../../assets/images/Servicios/Mantenimiento.jpg') } 
          style={styles.image}
        />
        <Text style={styles.title}>Mantenimiento Preventivo</Text>
        <Text style={styles.description}>
          Realizamos revisiones y ajustes periódicos para prevenir fallas y asegurar el buen funcionamiento de su vehículo.
        </Text>
      </View>

      {/* Reparacion de Motor */}
      <View style={styles.card}>
        <Image
          source={ require('../../assets/images/Servicios/motores.jpg') } 
          style={styles.image}
        />
        <Text style={styles.title}>Reparacion de motor</Text>
        <Text style={styles.description}>
          Detectamos y solucionamos problemas en el motor de su vehículo, restaurando su rendimiento óptimo.
        </Text>
      </View>

      <View style={styles.card}>
        <Image
          source={ require('../../assets/images/Servicios/Frenos.jpg') } 
          style={styles.image}
        />
        <Text style={styles.title}>Servicio de Frenos</Text>
        <Text style={styles.description}>
        Aseguramos un frenado efectivo y seguro con nuestros servicios especializados en frenos.
        </Text>
      </View>

      <View style={styles.card}>
        <Image
          source={ require('../../assets/images/Servicios/Alineacion.jpg') } 
          style={styles.image}
        />
        <Text style={styles.title}>Alineación y Balanceo</Text>
        <Text style={styles.description}>
        Mejoramos la estabilidad y el manejo de su vehículo con la aliación de ruedas y su efectivo balanceo.
        </Text>
      </View>

      <View style={styles.card}>
        <Image
          source={ require('../../assets/images/Servicios/Electricidad.jpg') } 
          style={styles.image}
        />
        <Text style={styles.title}>Electricidad Automotriz</Text>
        <Text style={styles.description}>
        Reparamos y mantenemos los sistemas eléctricos de su vehículo para un funcionamiento óptimo.
        </Text>
      </View>

      <View style={styles.card}>
        <Image
          source={ require('../../assets/images/Servicios/Tecno-M.png') } 
          style={styles.image}
        />
        <Text style={styles.title}>Revicion Tecno-Mecanica</Text>
        <Text style={styles.description}>
        Realizamos una inspección exhaustiva para cumplir con las normativas de seguridad y emisiones, evaluando todos los sistemas mecánicos y técnicos de su vehículo.
        </Text>
      </View>
    </ScrollView>
  )
}

export default Bookmark