import { View, Text, ScrollView, Image, Alert, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import styles from '../../assets/css/sign-up';
import { images } from '../../constants';
import { createUser } from '../../lib/appwrite';

const SignUp = () => {
    const [form, setForm] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = async () => {
        if (!form.name || !form.lastName || !form.email || !form.password) {
            Alert.alert('Error', 'Por favor rellene todos los campos');
            return;
        }

        setIsSubmitting(true);
        try {
            const result = await createUser(form.email, form.password, form.name, form.lastName);
            router.replace('/home');
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Image style={styles.logo} source={images.LogoMC} />
                    <ImageBackground source={images.Fondo} style={styles.textBackground} imageStyle={styles.backgroundImageStyle}>
                        <Text style={styles.text}>Master Center</Text>
                    </ImageBackground>
                </View>

                <View style={styles.form}>
                    <View style={styles.inputRow}>
                        <TextInput
                            style={styles.input}
                            placeholder="Nombre"
                            value={form.name}
                            onChangeText={(text) => setForm({ ...form, name: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Apellido"
                            value={form.lastName}
                            onChangeText={(text) => setForm({ ...form, lastName: text })}
                        />
                    </View>

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
                        onPress={submit} // Connect the button to the submit function
                        disabled={isSubmitting} // Disable the button while the form is being submitted
                    >
                        <Text style={styles.buttonText}>{isSubmitting ? 'Registrando...' : 'Registrar'}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>¿Ya tienes cuenta?</Text>
                    <Link href="/sign-in">
                        <Text style={styles.loginText}>Inicia sesión</Text>
                    </Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUp;
