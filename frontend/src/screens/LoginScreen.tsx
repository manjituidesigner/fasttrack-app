import { StatusBar } from "expo-status-bar";
import { View, ScrollView, TextInput, Pressable } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
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

  const BG = "#E9EEF5";
  const TEXT_DARK = "#111827";
  const TEXT_MUTED = "#6b7280";
  const PLACEHOLDER = "#9ca3af";
  const BORDER = "#E5E7EB";

  const TITLE_SIZE = 21;
  const LABEL_SIZE = 14;
  const INPUT_SIZE = 13;
  const PROJECT_LABEL_SIZE = 14;
  const ROW_TEXT_SIZE = 14;
  const BUTTON_TEXT_SIZE = 14;
  const FOOTER_SIZE = 12;

  const TITLE_WEIGHT: any = "500";
  const LABEL_WEIGHT: any = "500";
  const INPUT_WEIGHT: any = "500";
  const PROJECT_LABEL_WEIGHT: any = "500";
  const ROW_TEXT_WEIGHT: any = "500";
  const BUTTON_TEXT_WEIGHT: any = "500";

  type ProjectTypeId = "industries" | "housing" | "startup";
  const [projectType, setProjectType] = useState<ProjectTypeId>("industries");
  const [showPassword, setShowPassword] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  return (
    <>
      <StatusBar style="dark" />

      <View style={{ flex: 1, backgroundColor: BG }}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 28, paddingTop: STATUS_BAR_HEIGHT + 18 }}>
          <View style={{ paddingHorizontal: 24, flex: 1 }}>
            <View style={{ alignSelf: "center", width: "100%", maxWidth: 520 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <ThemedText style={{ fontSize: TITLE_SIZE, fontWeight: TITLE_WEIGHT, color: TEXT_DARK, marginTop: 6, marginBottom: 18 }}>
                  {t("login.title")}
                </ThemedText>

                <Pressable onPress={() => setShowLangMenu((v) => !v)} hitSlop={10} style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
                  <ThemedText style={{ fontSize: 12, fontWeight: "700", color: TEXT_DARK }}>
                    {language === "en" ? "EN" : language === "hi" ? "HI" : "PA"}
                  </ThemedText>
                  <MaterialIcons name="keyboard-arrow-down" size={18} color={TEXT_DARK} />
                </Pressable>
              </View>

              {showLangMenu ? (
                <View
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 58,
                    width: 170,
                    borderRadius: 14,
                    overflow: "hidden",
                    backgroundColor: "rgba(255,255,255,0.98)",
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
                      <ThemedText style={{ fontSize: 14, fontWeight: "500", color: "#0f172a" }}>
                        {code === "en" ? t("language.english") : code === "pa" ? t("language.punjabi") : t("language.hindi")}
                      </ThemedText>
                      {language === code ? <MaterialIcons name="check" size={18} color="rgb(55, 155, 47)" /> : null}
                    </Pressable>
                  ))}
                </View>
              ) : null}

              <View style={{ marginTop: 6 }}>
                <ThemedText style={{ fontSize: LABEL_SIZE, fontWeight: LABEL_WEIGHT, color: "#4b5563", marginBottom: 8 }}>
                  {t("login.usernameOrEmail")} *
                </ThemedText>
                <View style={{ position: "relative" }}>
                  <MaterialCommunityIcons name="account-outline" size={20} color={TEXT_DARK} style={{ position: "absolute", top: 12, left: 16 }} />
                  <View style={{ position: "absolute", left: 48, top: 10, width: 1, height: 22, backgroundColor: BORDER }} />
                  <TextInput
                    placeholder={t("login.usernameOrEmail") + " *"}
                    placeholderTextColor={PLACEHOLDER}
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: INPUT_WEIGHT,
                      paddingLeft: 62,
                      paddingRight: 16,
                      height: 43,
                      borderRadius: 999,
                      backgroundColor: "#ffffff",
                      fontSize: INPUT_SIZE,
                      color: TEXT_DARK
                    }}
                  />
                </View>

                <ThemedText style={{ fontSize: LABEL_SIZE, fontWeight: LABEL_WEIGHT, color: "#4b5563", marginTop: 16, marginBottom: 8 }}>
                  {t("login.password")} *
                </ThemedText>
                <View style={{ position: "relative" }}>
                  <MaterialCommunityIcons name="lock-outline" size={20} color={TEXT_DARK} style={{ position: "absolute", top: 12, left: 16 }} />
                  <View style={{ position: "absolute", left: 48, top: 10, width: 1, height: 22, backgroundColor: BORDER }} />
                  <TextInput
                    placeholder={t("login.password") === "Password" ? "Enter Your Password" : t("login.password")}
                    placeholderTextColor={PLACEHOLDER}
                    secureTextEntry={!showPassword}
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: INPUT_WEIGHT,
                      paddingLeft: 62,
                      paddingRight: 46,
                      height: 43,
                      borderRadius: 999,
                      backgroundColor: "#ffffff",
                      fontSize: INPUT_SIZE,
                      color: TEXT_DARK
                    }}
                  />
                  <Pressable onPress={() => setShowPassword(!showPassword)} style={{ position: "absolute", top: 6, right: 10, padding: 6 }}>
                    <MaterialCommunityIcons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color={TEXT_DARK} />
                  </Pressable>
                </View>

                <ThemedText style={{ fontSize: LABEL_SIZE, fontWeight: LABEL_WEIGHT, color: "#4b5563", marginTop: 16, marginBottom: 8 }}>
                  {t("login.code")} *
                </ThemedText>
                <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                  <View style={{ flex: 1, position: "relative" }}>
                    <MaterialCommunityIcons name="shield-outline" size={20} color={TEXT_DARK} style={{ position: "absolute", top: 12, left: 16 }} />
                    <View style={{ position: "absolute", left: 48, top: 10, width: 1, height: 22, backgroundColor: BORDER }} />
                    <TextInput
                      placeholder={t("login.code") === "Captcha" ? "Enter Code" : t("login.code")}
                      placeholderTextColor={PLACEHOLDER}
                      style={{
                        fontFamily: "Roboto",
                        fontWeight: INPUT_WEIGHT,
                        paddingLeft: 62,
                        paddingRight: 16,
                        height: 43,
                        borderRadius: 999,
                        backgroundColor: "#ffffff",
                        fontSize: INPUT_SIZE,
                        color: TEXT_DARK
                      }}
                    />
                  </View>

                  <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <View
                      style={{
                        height: 43,
                        minWidth: 92,
                        paddingHorizontal: 10,
                        borderRadius: 999,
                        backgroundColor: "#C6CDD8",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <ThemedText style={{ fontSize: 14, fontWeight: "500", letterSpacing: 2, color: TEXT_DARK }}>8X2aP</ThemedText>
                    </View>
                    <Pressable onPress={() => null} hitSlop={10} style={{ width: 38, height: 38, borderRadius: 999, alignItems: "center", justifyContent: "center" }}>
                      <MaterialCommunityIcons name="refresh" size={24} color={TEXT_DARK} />
                    </Pressable>
                  </View>
                </View>
              </View>

              <ThemedText style={{ fontSize: PROJECT_LABEL_SIZE, fontWeight: PROJECT_LABEL_WEIGHT, color: TEXT_DARK, marginTop: 20, marginBottom: 10, textTransform: "uppercase" }}>
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
                      height: 43,
                      paddingHorizontal: 18,
                      borderRadius: 999,
                      backgroundColor: selected ? "#2F8F2F" : "#ffffff",
                      marginBottom: 12,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderWidth: 0,
                      borderColor: "transparent"
                    }}
                  >
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
                      <MaterialCommunityIcons
                        name={item.id === "industries" ? "factory" : item.id === "housing" ? "office-building-outline" : "rocket-launch-outline"}
                        size={18}
                        color={selected ? "#ffffff" : TEXT_DARK}
                      />
                      <ThemedText style={{ fontSize: ROW_TEXT_SIZE, fontWeight: ROW_TEXT_WEIGHT, color: selected ? "#ffffff" : TEXT_DARK }}>{item.label}</ThemedText>
                    </View>

                    <MaterialCommunityIcons
                      name={selected ? "check-circle" : "checkbox-blank-circle-outline"}
                      size={18}
                      color={selected ? "#ffffff" : "#AAB4C3"}
                    />
                  </Pressable>
                );
              })}

              <View style={{ paddingTop: 14, paddingBottom: 0 }}>
                <Pressable
                  onPress={onLoginSuccess}
                  style={{
                    width: "100%",
                    height: 43,
                    backgroundColor: "#1D4ED8",
                    borderRadius: 999,
                    marginBottom: 6,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <ThemedText style={{ color: "#ffffff", fontSize: BUTTON_TEXT_SIZE, fontWeight: BUTTON_TEXT_WEIGHT }}>{t("login.login")}</ThemedText>
                </Pressable>

                <Pressable
                  style={{
                    marginTop: 10,
                    width: "100%",
                    height: 43,
                    backgroundColor: "#ffffff",
                    borderRadius: 999,
                    borderWidth: 0,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <ThemedText style={{ color: TEXT_DARK, fontSize: BUTTON_TEXT_SIZE, fontWeight: BUTTON_TEXT_WEIGHT }}>{t("login.loginWithStartupIndia")}</ThemedText>
                </Pressable>

                <View style={{ paddingTop: 12, gap: 8, alignItems: "center" }}>
                  <Pressable>
                    <ThemedText style={{ fontSize: 14, fontWeight: "500", color: "#1D4ED8" }}>{t("login.forgotPassword")}</ThemedText>
                  </Pressable>

                  <ThemedText style={{ color: TEXT_MUTED, fontWeight: "500", fontSize: 12 }}>
                    {t("login.noAccount")} <ThemedText style={{ color: "#1D4ED8", fontWeight: "500" }}>{t("login.signup")}</ThemedText>
                  </ThemedText>
                </View>

                <ThemedText
                  style={{
                    marginTop: 16,
                    fontSize: FOOTER_SIZE,
                    fontWeight: "500",
                    color: "#9ca3af",
                    lineHeight: 16,
                    textAlign: "center",
                    paddingHorizontal: 6
                  }}
                >
                  {t("login.footerDisclaimer")}
                </ThemedText>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
