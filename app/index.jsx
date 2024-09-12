import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustonBotton from './components/CustonBotton';
import { Redirect, router } from 'expo-router';
import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {
  const {isLoading, isLoggedIn } = useGlobalContext();

  if(!isLoading && isLoggedIn) return <Redirect href="/home"/>

  return (
    <SafeAreaView className="h-full" style={{ flex: 1, paddingTop: 230, backgroundColor: "#1B266B" }}>
      <ScrollView style={{ flex: 1 }}>
        <View className="w-full justify-center items-center min-h-[-7vh] px-10 mt-19">
          <Image
            source={images.Logo}
            style={{ width: 363, height: 110, borderRadius: 100 }}
            resizeMode='contain'
          />
          <View className="relative mt-5">
            <Text className="text-2xl text-white font-bold text-center">MASTER CENTER</Text>
          </View>
          <View style={{ width: '80%', paddingHorizontal: 30, marginBottom: 20, marginTop: 301 }}>
            <CustonBotton 
              title="Registrate"
              handlePress={() => router.push('/sign-up')}
              containerStyles="w-full mt-7"
            />
          </View>
          <View style={{ width: '80%', paddingHorizontal: 30, marginBottom: 20, marginTop: -30 }}> 
          <Text style={{ color: '#ffffff', textAlign: 'center', marginTop: 20 }}>
          ¿Ya tienes una cuenta?</Text>
          <TouchableOpacity onPress={() => router.push('/sign-in')}>
             <Text style={{ color: '#a01c1c', fontWeight: 'bold', textAlign: 'center', }}> Inicia sesión aquí</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}
