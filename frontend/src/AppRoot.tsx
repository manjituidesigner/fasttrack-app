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
import { I18nProvider } from "./i18n/I18nProvider";
import { HomeScreen } from "./screens/HomeScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { DashboardScreen } from "./screens/DashboardScreen";
import { ChangePasswordScreen } from "./screens/ChangePasswordScreen";

type RouteName = "home" | "login" | "dashboard" | "changePassword";

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
    ) : route === "login" ? (
      <LoginScreen onBack={() => setRoute("home")} onLoginSuccess={() => setRoute("dashboard")} />
    ) : route === "changePassword" ? (
      <ChangePasswordScreen onBack={() => setRoute("dashboard")} />
    ) : (
      <DashboardScreen onChangePassword={() => setRoute("changePassword")} onLogout={() => setRoute("home")} />
    );

  return (
    <I18nProvider>
      <ThemeProvider>
        {Platform.OS === "web" ? (
          <View style={{ flex: 1, alignItems: "center" }}>
            <View style={{ flex: 1, width: "100%", maxWidth: 412 }}>{screen}</View>
          </View>
        ) : (
          screen
        )}
      </ThemeProvider>
    </I18nProvider>
  );
}
