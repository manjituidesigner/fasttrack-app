import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, TextInput, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useTheme } from "../theme/useTheme";

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
        <View style={{ paddingTop: 50, paddingHorizontal: 16 }}>
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

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
          <View
            style={{
              maxWidth: 420,
              width: "100%",
              alignSelf: "center",
              paddingHorizontal: 24
            }}
          >
            <View style={{ paddingTop: 20, paddingBottom: 18, alignItems: "center" }}>
              <View
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 20,
                  backgroundColor: "rgba(255,255,255,0.9)",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  source={require("../assets/images/ip-logo.png")}
                  style={{ width: "100%", height: "100%", resizeMode: "contain" }}
                />
              </View>
            </View>

            <View style={{ marginTop: 6 }}>
              <View style={{ position: "relative" }}>
                <MaterialIcons name="person" size={22} color="#94a3b8" style={{ position: "absolute", top: 18, left: 16 }} />
                <TextInput
                  placeholder="Username / Email"
                  placeholderTextColor="#94a3b8"
                  style={{
                    paddingLeft: 52,
                    paddingRight: 16,
                    paddingVertical: 16,
                    borderRadius: 18,
                    backgroundColor: "#ffffff",
                    fontSize: 16,
                    fontWeight: "500"
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
                    paddingLeft: 52,
                    paddingRight: 52,
                    paddingVertical: 16,
                    borderRadius: 18,
                    backgroundColor: "#ffffff",
                    fontSize: 16,
                    fontWeight: "500"
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
                    paddingLeft: 52,
                    paddingVertical: 16,
                    borderRadius: 18,
                    backgroundColor: "#ffffff",
                    fontSize: 16,
                    fontWeight: "500"
                  }}
                />
              </View>

              <View
                style={{
                  width: 120,
                  height: 56,
                  borderRadius: 18,
                  backgroundColor: "#e5e7eb",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "900",
                    letterSpacing: 4,
                    fontStyle: "italic"
                  }}
                >
                  8X2aP
                </Text>
              </View>
            </View>

            <Text
              style={{
                fontSize: 12,
                fontWeight: "800",
                textTransform: "uppercase",
                color: "#64748b",
                marginTop: 22,
                marginBottom: 10
              }}
            >
              Project Type
            </Text>

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
                  backgroundColor: projectType === item.label ? "#0f172a" : "#ffffff",
                  marginBottom: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                  <MaterialIcons name={item.icon} size={20} color={projectType === item.label ? "#ffffff" : "#64748b"} />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "700",
                      color: projectType === item.label ? "#ffffff" : "#0f172a"
                    }}
                  >
                    {item.label}
                  </Text>
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
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "800"
                }}
              >
                Login
              </Text>
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
              <Text style={{ fontSize: 16, fontWeight: "700" }}>Login with Startup Inida</Text>
            </Pressable>

            <Pressable style={{ alignSelf: "center", marginTop: 14 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "700",
                  color: "#4f46e5"
                }}
              >
                Forgot Password
              </Text>
            </Pressable>

            <View style={{ marginTop: 18, alignItems: "center" }}>
              <Text style={{ color: "#64748b", fontWeight: "500" }}>
                Do not have an account? <Text style={{ color: "#4f46e5", fontWeight: "800" }}>Signup</Text>
              </Text>
            </View>

            <Text
              style={{
                marginTop: 16,
                fontSize: 10,
                lineHeight: 14,
                color: "#64748b",
                fontWeight: "500",
                textAlign: "center"
              }}
            >
              The National Single Window System has access to over 100 Central level approvals and State Single Window Systems of 14 States/UTs with one user id and password.
            </Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
}
