import { StatusBar } from "expo-status-bar";
import { View, ScrollView, TextInput, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
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
  const { t, language, setLanguage } = useI18n();
  const STATUS_BAR_HEIGHT = Constants.statusBarHeight ?? 0;

  type ProjectTypeId = "industries" | "housing" | "startup";
  const [projectType, setProjectType] = useState<ProjectTypeId>("industries");
  const [showPassword, setShowPassword] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  return (
    <>
      <StatusBar style="dark" />

      <LinearGradient
        colors={["#F9FAFB", "#EFF6FF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 28 }}>
          <View style={{ paddingHorizontal: 24, flex: 1 }}>
            <View
              style={{
                paddingTop: 18 + STATUS_BAR_HEIGHT,
                paddingBottom: 14,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Pressable
                onPress={onBack}
                hitSlop={10}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#ffffff",
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#000",
                  shadowOpacity: 0.06,
                  shadowRadius: 10,
                  shadowOffset: { width: 0, height: 6 },
                  elevation: 3
                }}
              >
                <MaterialIcons name="arrow-back" size={22} color="#374151" />
              </Pressable>

              <Pressable
                onPress={() => setShowLangMenu((v) => !v)}
                hitSlop={10}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  paddingHorizontal: 12,
                  height: 34,
                  borderRadius: 999,
                  backgroundColor: "#ffffff",
                  shadowColor: "#000",
                  shadowOpacity: 0.06,
                  shadowRadius: 10,
                  shadowOffset: { width: 0, height: 6 },
                  elevation: 3
                }}
              >
                <ThemedText style={{ fontSize: 12, fontWeight: "700", color: "#4b5563" }}>
                  {language === "en" ? "EN" : language === "hi" ? "HI" : "PA"}
                </ThemedText>
                <MaterialIcons name="expand-more" size={18} color="#6b7280" />
              </Pressable>
            </View>

            {showLangMenu ? (
              <View
                style={{
                  position: "absolute",
                  right: 24,
                  top: 66 + STATUS_BAR_HEIGHT,
                  width: 170,
                  borderRadius: 14,
                  overflow: "hidden",
                  backgroundColor: "rgba(255,255,255,0.96)",
                  borderWidth: 1,
                  borderColor: theme.colors.border.hairline,
                  zIndex: 999,
                  elevation: 999
                }}
              >
                {["en", "pa", "hi"].map((code) => (
                  <Pressable
                    key={code}
                    onPress={() => {
                      setLanguage(code as any);
                      setShowLangMenu(false);
                    }}
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 12,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: language === code ? "rgba(55, 155, 47, 0.12)" : "transparent"
                    }}
                  >
                    <ThemedText style={{ fontSize: 14, fontWeight: "700", color: "#0f172a" }}>
                      {code === "en" ? t("language.english") : code === "pa" ? t("language.punjabi") : t("language.hindi")}
                    </ThemedText>
                    {language === code ? <MaterialIcons name="check" size={18} color="rgb(55, 155, 47)" /> : null}
                  </Pressable>
                ))}
              </View>
            ) : null}

            <ThemedText style={{ fontSize: 30, fontWeight: "700", color: "#312e81", marginTop: 6, marginBottom: 14 }}>
              {t("login.title")}
            </ThemedText>

            <View style={{ gap: 14 }}>
              <View style={{ position: "relative" }}>
                <MaterialIcons name="person" size={20} color="#9ca3af" style={{ position: "absolute", top: 18, left: 16 }} />
                <TextInput
                  placeholder={t("login.usernameOrEmail")}
                  placeholderTextColor="#9ca3af"
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "500",
                    paddingLeft: 48,
                    paddingRight: 16,
                    paddingVertical: 16,
                    borderRadius: 24,
                    backgroundColor: "#ffffff",
                    fontSize: 15,
                    shadowColor: "#000",
                    shadowOpacity: 0.05,
                    shadowRadius: 12,
                    shadowOffset: { width: 0, height: 8 },
                    elevation: 2
                  }}
                />
              </View>

              <View style={{ position: "relative" }}>
                <MaterialIcons name="lock" size={20} color="#9ca3af" style={{ position: "absolute", top: 18, left: 16 }} />
                <TextInput
                  placeholder={t("login.password")}
                  placeholderTextColor="#9ca3af"
                  secureTextEntry={!showPassword}
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "500",
                    paddingLeft: 48,
                    paddingRight: 48,
                    paddingVertical: 16,
                    borderRadius: 24,
                    backgroundColor: "#ffffff",
                    fontSize: 15,
                    shadowColor: "#000",
                    shadowOpacity: 0.05,
                    shadowRadius: 12,
                    shadowOffset: { width: 0, height: 8 },
                    elevation: 2
                  }}
                />
                <Pressable onPress={() => setShowPassword(!showPassword)} style={{ position: "absolute", top: 16, right: 14, padding: 6 }}>
                  <MaterialIcons name={showPassword ? "visibility-off" : "visibility"} size={20} color="#9ca3af" />
                </Pressable>
              </View>

              <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
                <View style={{ flex: 1, position: "relative" }}>
                  <MaterialIcons name="security" size={20} color="#9ca3af" style={{ position: "absolute", top: 18, left: 16 }} />
                  <TextInput
                    placeholder={t("login.code")}
                    placeholderTextColor="#9ca3af"
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "500",
                      paddingLeft: 48,
                      paddingRight: 16,
                      paddingVertical: 16,
                      borderRadius: 24,
                      backgroundColor: "#ffffff",
                      fontSize: 15,
                      shadowColor: "#000",
                      shadowOpacity: 0.05,
                      shadowRadius: 12,
                      shadowOffset: { width: 0, height: 8 },
                      elevation: 2
                    }}
                  />
                </View>

                <View
                  style={{
                    width: 124,
                    height: 58,
                    borderRadius: 24,
                    backgroundColor: "#D1E1F5",
                    alignItems: "center",
                    justifyContent: "center",
                    shadowColor: "#000",
                    shadowOpacity: 0.05,
                    shadowRadius: 12,
                    shadowOffset: { width: 0, height: 8 },
                    elevation: 2
                  }}
                >
                  <ThemedText style={{ fontSize: 20, fontWeight: "700", letterSpacing: 4, color: "#111827" }}>8X2aP</ThemedText>
                </View>
              </View>
            </View>

            <ThemedText style={{ fontSize: 11, fontWeight: "700", color: "#6b7280", marginTop: 18, marginBottom: 12, textTransform: "uppercase" }}>
              {t("login.projectType")}
            </ThemedText>

            {([
              {
                id: "industries" as const,
                label: t("login.projectType.industries"),
                icon: "business-center" as const,
                iconBg: "rgba(22,163,74,0.14)",
                iconColor: "#16a34a"
              },
              {
                id: "housing" as const,
                label: t("login.projectType.housing"),
                icon: "home" as const,
                iconBg: "rgba(37,99,235,0.12)",
                iconColor: "#2563eb"
              },
              {
                id: "startup" as const,
                label: t("login.projectType.startup"),
                icon: "emoji-objects" as const,
                iconBg: "rgba(245,158,11,0.16)",
                iconColor: "#f59e0b"
              }
            ] satisfies { id: ProjectTypeId; label: string; icon: any; iconBg: string; iconColor: string }[]).map((item) => {
              const selected = projectType === item.id;
              return (
                <Pressable
                  key={item.id}
                  onPress={() => setProjectType(item.id)}
                  style={{
                    paddingVertical: 16,
                    paddingHorizontal: 16,
                    borderRadius: 24,
                    backgroundColor: selected ? "#16a34a" : "#ffffff",
                    marginBottom: 12,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOpacity: selected ? 0.10 : 0.05,
                    shadowRadius: 12,
                    shadowOffset: { width: 0, height: 8 },
                    elevation: selected ? 3 : 2
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
                    <View
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: selected ? "rgba(255,255,255,0.18)" : item.iconBg
                      }}
                    >
                      <MaterialIcons name={item.icon} size={18} color={selected ? "#ffffff" : item.iconColor} />
                    </View>
                    <ThemedText style={{ fontSize: 14.5, fontWeight: "700", color: selected ? "#ffffff" : "#111827" }}>{item.label}</ThemedText>
                  </View>

                  {selected ? <MaterialIcons name="check-circle" size={22} color="#ffffff" /> : null}
                </Pressable>
              );
            })}

            <View style={{ paddingTop: 14, paddingBottom: 10 }}>
              <Pressable
                onPress={onLoginSuccess}
                style={{
                  width: "100%",
                  paddingVertical: 16,
                  backgroundColor: "#1D4ED8",
                  borderRadius: 24,
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#1D4ED8",
                  shadowOpacity: 0.28,
                  shadowRadius: 18,
                  shadowOffset: { width: 0, height: 10 },
                  elevation: 4
                }}
              >
                <ThemedText style={{ color: "#ffffff", fontSize: 18, fontWeight: "700" }}>{t("login.login")}</ThemedText>
              </Pressable>

              <Pressable
                style={{
                  marginTop: 12,
                  width: "100%",
                  paddingVertical: 16,
                  backgroundColor: "#ffffff",
                  borderRadius: 24,
                  borderWidth: 1,
                  borderColor: "rgba(226,232,240,0.95)",
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#000",
                  shadowOpacity: 0.04,
                  shadowRadius: 12,
                  shadowOffset: { width: 0, height: 8 },
                  elevation: 2
                }}
              >
                <ThemedText style={{ color: "#1E293B", fontSize: 18, fontWeight: "700" }}>{t("login.loginWithStartupIndia")}</ThemedText>
              </Pressable>

              <View style={{ paddingTop: 14, gap: 10, alignItems: "center" }}>
                <Pressable>
                  <ThemedText style={{ fontSize: 14, fontWeight: "700", color: "#4f46e5" }}>{t("login.forgotPassword")}</ThemedText>
                </Pressable>

                <ThemedText style={{ color: "#6b7280", fontWeight: "600" }}>
                  {t("login.noAccount")} <ThemedText style={{ color: "#4f46e5", fontWeight: "700" }}>{t("login.signup")}</ThemedText>
                </ThemedText>
              </View>

              <ThemedText
                style={{
                  marginTop: 14,
                  fontSize: 10,
                  fontWeight: "600",
                  color: "#9ca3af",
                  lineHeight: 15,
                  textAlign: "center",
                  paddingHorizontal: 16
                }}
              >
                {t("login.footerDisclaimer")}
              </ThemedText>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
}
