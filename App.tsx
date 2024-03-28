import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';

import { CartContextProvider } from './src/contexts/CartContext';
import { OneSignal } from 'react-native-onesignal';
import { tagUserInfoCreated } from './src/notifications/notificationsTags';


OneSignal.initialize("1c2be59e-1fe0-4b0a-be5a-830f61b65045")
OneSignal.Notifications.requestPermission(true)

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserInfoCreated()

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}