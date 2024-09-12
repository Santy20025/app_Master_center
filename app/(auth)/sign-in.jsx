import { View, Text, ScrollView, Image, Alert, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { router } from 'expo-router';
import styles from '../../assets/css/sign-up';
import { images } from '../../constants';
import { signIn, deleteSession } from '../../lib/appwrite';

const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = async () => {
        if (!form.email || !form.password) {
            Alert.alert('Error', 'Por favor rellena todos los campos');
            return;
        }

        setIsSubmitting(true);

        try {
            // Intenta cerrar sesión si hay una sesión activa
            try {
                await deleteSession(); // Cierra cualquier sesión activa
            } catch (error) {
                console.log("No hay sesión activa para cerrar.");
            }

            // Intenta iniciar sesión con las credenciales proporcionadas
            await signIn(form.email, form.password);
            router.replace('/home');
        } catch (error) {
            Alert.alert('Error', 'No se pudo iniciar sesión: ' + error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Image style={styles.logo} source={images.LogoMC} />
                    <ImageBackground
                        source={images.Fondo}
                        style={styles.textBackground}
                        imageStyle={styles.backgroundImageStyle}
                    >
                        <Text style={styles.text}>Master Center</Text>
                    </ImageBackground>
                </View>

                <View style={styles.form}>
                    <TextInput
                        style={styles.inputFull}
                        placeholder="Correo"
                        value={form.email}
                        onChangeText={(text) => setForm({ ...form, email: text })}
                        keyboardType="email-address"
                    />

                    <TextInput
                        style={styles.inputFull}
                        placeholder="Contraseña"
                        value={form.password}
                        onChangeText={(text) => setForm({ ...form, password: text })}
                        secureTextEntry
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={submit}
                        disabled={isSubmitting}
                    >
                        <Text style={styles.buttonText}>{isSubmitting ? 'Iniciando...' : 'Iniciar Sesión'}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>¿Aún no tienes Cuenta?</Text>
                    <Link href="/sign-up">
                        <Text style={styles.loginText}>Registrar</Text>
                    </Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;
