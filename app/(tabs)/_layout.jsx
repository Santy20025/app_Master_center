import { View, Text, Image, Button, StatusBar } from 'react-native';
import { Tabs } from 'expo-router';
import { useNavigation, useRoute } from '@react-navigation/native';
import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', gap: 2 }}>
      <Image
        source={icon}
        resizeMode='contain'
        style={{ width: 24, height: 24, tintColor: color }}
      />
      <Text
        style={{
          color: color,
          fontWeight: focused ? '600' : '400',
          fontSize: 12,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const handleLogout = () => {
    console.log('Sesión cerrada');
    console.log('Current Route:', route.name); 
    navigation.replace('sign-in');
  };

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#960404',
          tabBarStyle: {
            backgroundColor: '#032154',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 58,
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Inicio"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="service"
          options={{
            title: 'Servicios',
            headerShadowVisible: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.service}
                color={color}
                name="Servicios"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="cars"
          options={{
            title: 'Vehiculos',
            headerShadowVisible: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.cars}
                color={color}
                name="Vehiculos"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: 'Perfil',
            headerShadowVisible: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Perfil"
                focused={focused}
              />
            ),
            headerRight: () => (
              <Button
                onPress={handleLogout}
                title="Cerrar sesión"
                color="#960404"
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor='#010b1d' style="light" />
    </>
  );
};

export default TabsLayout;
