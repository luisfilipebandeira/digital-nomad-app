import theme from '@/src/theme/theme';
import { ThemeProvider } from '@shopify/restyle';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';


export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(protected)" options={{ headerShown: false }} />
        <Stack.Screen name='+not-found' />
        <Stack.Screen name='sign-in' />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
