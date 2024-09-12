import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        style={[
          styles.button,
          containerStyles,
          isLoading && { opacity: 0.5 }
        ]}
        disabled={isLoading}
    >
        <Text style={[styles.text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#711515', // Cambia el color del botón aquí
    borderRadius: 12, // Cambia el redondeo de bordes aquí
    minHeight: 62,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF', // Cambia el color del texto aquí
    fontFamily: 'Poppins-SemiBold', // Cambia la fuente aquí
    fontSize: 16,
  }
});

export default CustomButton;
