import { StatusBar } from "expo-status-bar";
import { Platform, View, ScrollView, TextInput, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useTheme } from "../theme/useTheme";
import { ThemedText } from "../components/ThemedText";

type Props = {
  onBack: () => void;
};

export function LoginScreen({ onBack }: Props) {
  const theme = useTheme();
  const [projectType, setProjectType] = useState("Industries/Business");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <StatusBar style="dark" />

      <LinearGradient
        colors={theme.colors.background.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
          <View
            style={{
              maxWidth: 420,
              width: "100%",
              alignSelf: "center",
              paddingHorizontal: 24
            }}
          >
            <View style={{ paddingTop: 18, paddingBottom: 14, flexDirection: "row", alignItems: "center" }}>
              {Platform.OS === "web" ? (
                <Image
                  source={require("../assets/images/govt logo.svg")}
                  style={{ width: 62, height: 62, resizeMode: "contain", marginRight: 10 }}
                />
              ) : null}

              <Image
                source={require("../assets/images/ip-logo.png")}
                style={{ width: 95, height: 62, resizeMode: "contain" }}
              />

              <View style={{ flex: 1 }} />

              <Pressable
                onPress={onBack}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: "rgba(255,255,255,0.8)",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <MaterialIcons name="arrow-back" size={22} color="#1f2937" />
              </Pressable>
            </View>

            <ThemedText
              style={{
                fontSize: 25,
                fontWeight: "500",
                color: "rgb(58, 52, 151)",
                marginTop: 3,
                marginBottom: 9
              }}
            >
              Login
            </ThemedText>

            <View style={{ marginTop: 6 }}>
              <View style={{ position: "relative" }}>
                <MaterialIcons name="person" size={22} color="#94a3b8" style={{ position: "absolute", top: 18, left: 16 }} />
                <TextInput
                  placeholder="Username / Email"
                  placeholderTextColor="#94a3b8"
                  style={{
                    fontFamily: "Inter_500Medium",
                    paddingLeft: 52,
                    paddingRight: 16,
                    paddingVertical: 16,
                    borderRadius: 18,
                    backgroundColor: "#ffffff",
                    fontSize: 16
                  }}
                />
              </View>
            </View>

            <View style={{ marginTop: 16 }}>
              <View style={{ position: "relative" }}>
                <MaterialIcons name="lock" size={22} color="#94a3b8" style={{ position: "absolute", top: 18, left: 16 }} />
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#94a3b8"
                  secureTextEntry={!showPassword}
                  style={{
                    fontFamily: "Inter_500Medium",
                    paddingLeft: 52,
                    paddingRight: 52,
                    paddingVertical: 16,
                    borderRadius: 18,
                    backgroundColor: "#ffffff",
                    fontSize: 16
                  }}
                />
                <Pressable onPress={() => setShowPassword(!showPassword)} style={{ position: "absolute", top: 18, right: 16 }}>
                  <MaterialIcons name={showPassword ? "visibility-off" : "visibility"} size={22} color="#94a3b8" />
                </Pressable>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                gap: 12,
                marginTop: 18
              }}
            >
              <View style={{ flex: 1, position: "relative" }}>
                <MaterialIcons name="security" size={22} color="#94a3b8" style={{ position: "absolute", top: 18, left: 16 }} />
                <TextInput
                  placeholder="Code"
                  placeholderTextColor="#94a3b8"
                  style={{
                    fontFamily: "Inter_500Medium",
                    paddingLeft: 52,
                    paddingRight: 16,
                    paddingVertical: 16,
                    borderRadius: 18,
                    backgroundColor: "#ffffff",
                    fontSize: 16
                  }}
                />
              </View>

              <View
                style={{
                  width: 116,
                  height: 56,
                  borderRadius: 18,
                  backgroundColor: "rgba(15,23,42,0.06)",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <ThemedText
                  style={{
                    fontSize: 20,
                    fontWeight: "900",
                    letterSpacing: 3
                  }}
                >
                  8X2aP
                </ThemedText>
              </View>
            </View>

            <ThemedText
              style={{
                fontSize: 12,
                fontWeight: "800",
                color: "#64748b",
                marginTop: 18,
                marginBottom: 10,
                textTransform: "uppercase"
              }}
            >
              Project Type
            </ThemedText>

            {[
              {
                label: "Industries/Business",
                icon: "business-center" as const
              },
              {
                label: "Housing & Real Estate",
                icon: "home-work" as const
              },
              {
                label: "Starup",
                icon: "emoji-objects" as const
              }
            ].map((item) => (
              <Pressable
                key={item.label}
                onPress={() => setProjectType(item.label)}
                style={{
                  paddingVertical: 14,
                  paddingHorizontal: 16,
                  borderRadius: 18,
                  backgroundColor: projectType === item.label ? "rgb(55, 155, 47)" : "#ffffff",
                  marginBottom: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                  <MaterialIcons name={item.icon} size={20} color={projectType === item.label ? "#ffffff" : "#64748b"} />
                  <ThemedText
                    style={{
                      fontSize: 14,
                      fontWeight: "700",
                      color: projectType === item.label ? "#ffffff" : "#0f172a"
                    }}
                  >
                    {item.label}
                  </ThemedText>
                </View>

                {projectType === item.label && <MaterialIcons name="check-circle" size={18} color="white" />}
              </Pressable>
            ))}

            <Pressable
              style={{
                marginTop: 22,
                paddingVertical: 16,
                borderRadius: 18,
                alignItems: "center",
                backgroundColor: "#4f46e5"
              }}
            >
              <ThemedText
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "800"
                }}
              >
                Login
              </ThemedText>
            </Pressable>

            <Pressable
              style={{
                marginTop: 12,
                paddingVertical: 16,
                borderRadius: 18,
                backgroundColor: "#ffffff",
                alignItems: "center"
              }}
            >
              <ThemedText style={{ fontSize: 16, fontWeight: "700" }}>Login with Startup Inida</ThemedText>
            </Pressable>

            <Pressable style={{ alignSelf: "center", marginTop: 14 }}>
              <ThemedText
                style={{
                  fontSize: 14,
                  fontWeight: "700",
                  color: "#4f46e5"
                }}
              >
                Forgot Password
              </ThemedText>
            </Pressable>

            <View style={{ marginTop: 18, alignItems: "center" }}>
              <ThemedText style={{ color: "#64748b", fontWeight: "500" }}>
                Do not have an account? <ThemedText style={{ color: "#4f46e5", fontWeight: "800" }}>Signup</ThemedText>
              </ThemedText>
            </View>

            <ThemedText
              style={{
                marginTop: 16,
                fontSize: 10,
                fontWeight: "500",
                color: "#64748b",
                lineHeight: 15,
                textAlign: "center"
              }}
            >
              The National Single Window System has access to over 100 Central level approvals and State Single Window Systems of 14 States/UTs with one user id and password.
            </ThemedText>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
}
