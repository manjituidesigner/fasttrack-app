import { StatusBar } from "expo-status-bar";
import { Platform, View, ScrollView, TextInput, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useTheme } from "../theme/useTheme";
import { ThemedText } from "../components/ThemedText";
import { useI18n } from "../i18n/I18nProvider";

type Props = {
  onBack: () => void;
  onLoginSuccess: () => void;
};

export function LoginScreen({ onBack, onLoginSuccess }: Props) {
  const theme = useTheme();
  const { t } = useI18n();

  type ProjectTypeId = "industries" | "housing" | "startup";
  const [projectType, setProjectType] = useState<ProjectTypeId>("industries");
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
              {t("login.title")}
            </ThemedText>

            <View style={{ marginTop: 6 }}>
              <View style={{ position: "relative" }}>
                <MaterialIcons name="person" size={22} color="#94a3b8" style={{ position: "absolute", top: 18, left: 16 }} />
                <TextInput
                  placeholder={t("login.usernameOrEmail")}
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
                  placeholder={t("login.password")}
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
                  placeholder={t("login.code")}
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
              {t("login.projectType")}
            </ThemedText>

            {([
              {
                id: "industries" as const,
                label: t("login.projectType.industries"),
                icon: "business-center" as const
              },
              {
                id: "housing" as const,
                label: t("login.projectType.housing"),
                icon: "home-work" as const
              },
              {
                id: "startup" as const,
                label: t("login.projectType.startup"),
                icon: "emoji-objects" as const
              }
            ] satisfies { id: ProjectTypeId; label: string; icon: any }[]).map((item) => (
              <Pressable
                key={item.id}
                onPress={() => setProjectType(item.id)}
                style={{
                  paddingVertical: 14,
                  paddingHorizontal: 16,
                  borderRadius: 18,
                  backgroundColor: projectType === item.id ? "rgb(55, 155, 47)" : "#ffffff",
                  marginBottom: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                  <MaterialIcons name={item.icon} size={20} color={projectType === item.id ? "#ffffff" : "#64748b"} />
                  <ThemedText
                    style={{
                      fontSize: 14,
                      fontWeight: "700",
                      color: projectType === item.id ? "#ffffff" : "#0f172a"
                    }}
                  >
                    {item.label}
                  </ThemedText>
                </View>

                {projectType === item.id && <MaterialIcons name="check-circle" size={18} color="white" />}
              </Pressable>
            ))}

            <Pressable
              onPress={onLoginSuccess}
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
                {t("login.login")}
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
              <ThemedText style={{ fontSize: 16, fontWeight: "700" }}>{t("login.loginWithStartupIndia")}</ThemedText>
            </Pressable>

            <Pressable style={{ alignSelf: "center", marginTop: 14 }}>
              <ThemedText
                style={{
                  fontSize: 14,
                  fontWeight: "700",
                  color: "#4f46e5"
                }}
              >
                {t("login.forgotPassword")}
              </ThemedText>
            </Pressable>

            <View style={{ marginTop: 18, alignItems: "center" }}>
              <ThemedText style={{ color: "#64748b", fontWeight: "500" }}>
                {t("login.noAccount")} <ThemedText style={{ color: "#4f46e5", fontWeight: "800" }}>{t("login.signup")}</ThemedText>
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
              {t("login.footerDisclaimer")}
            </ThemedText>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
}
