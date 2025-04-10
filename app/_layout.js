import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

export default function Layout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#002f6c',
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#002f6c',
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cash-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="historial"
          options={{
            title: 'Historial del dólar',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="stats-chart-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="info"
          options={{
            title: 'Sobre el tipo de cambio',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
      <Toast /> 
    </>
  );
}
