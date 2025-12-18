import { useState } from "react";
import { Platform, View } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black
} from "@expo-google-fonts/inter";
import { ThemeProvider } from "./theme/ThemeProvider";
import { HomeScreen } from "./screens/HomeScreen";
import { LoginScreen } from "./screens/LoginScreen";

type RouteName = "home" | "login";

export function AppRoot() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black
  });

  const [route, setRoute] = useState<RouteName>("home");

  if (!fontsLoaded) return null;

  const screen =
    route === "home" ? (
      <HomeScreen onLoginPress={() => setRoute("login")} />
    ) : (
      <LoginScreen onBack={() => setRoute("home")} />
    );

  return (
    <ThemeProvider>
      {Platform.OS === "web" ? (
        <View style={{ flex: 1, alignItems: "center" }}>
          <View style={{ flex: 1, width: "100%", maxWidth: 412 }}>{screen}</View>
        </View>
      ) : (
        screen
      )}
    </ThemeProvider>
  );
}
