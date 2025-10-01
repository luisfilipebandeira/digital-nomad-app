import { Redirect, Stack } from "expo-router";

const isSignIn = true
export default function ProtectedLayout() {

    if (!isSignIn) {
        return <Redirect href="/sign-in" />
    }

  return (
    <Stack screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}>
        <Stack.Screen name="(tabs)" />
    </Stack>
  );
}