import { useState } from "react";
import { ThemeProvider } from "./theme/ThemeProvider";
import { HomeScreen } from "./screens/HomeScreen";
import { LoginScreen } from "./screens/LoginScreen";

type RouteName = "home" | "login";

export function AppRoot() {
  const [route, setRoute] = useState<RouteName>("home");

  return (
    <ThemeProvider>
      {route === "home" ? (
        <HomeScreen onLoginPress={() => setRoute("login")} />
      ) : (
        <LoginScreen onBack={() => setRoute("home")} />
      )}
    </ThemeProvider>
  );
}
