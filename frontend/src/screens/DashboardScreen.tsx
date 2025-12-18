import { StatusBar } from "expo-status-bar";
import { View, ScrollView, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { ThemedText } from "../components/ThemedText";
import { useI18n } from "../i18n/I18nProvider";

type Props = {
  onMenuPress?: () => void;
  onChangePassword?: () => void;
  onLogout?: () => void;
};

export function DashboardScreen({ onMenuPress, onChangePassword, onLogout }: Props) {
  const { language, setLanguage, t } = useI18n();
  const [showMenu, setShowMenu] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const closeMenu = () => {
    setShowLanguageMenu(false);
    setShowMenu(false);
  };

  return (
    <>
      <StatusBar style="dark" />

      <LinearGradient colors={["rgb(238, 228, 255)", "rgb(214, 233, 255)", "rgb(214, 233, 255)"]} style={{ flex: 1 }}>
        <BlurView intensity={40} style={{ paddingTop: 48, zIndex: 20, elevation: 20 }}>
          <View
            style={{
              position: "relative",
              zIndex: 20,
              elevation: 20,
              height: 56,
              paddingHorizontal: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderColor: "rgba(255,255,255,0.4)"
            }}
          >
            <Pressable
              onPress={onMenuPress}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "rgba(255,255,255,0.6)",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <MaterialIcons name="menu" size={24} color="#1f2937" />
            </Pressable>

            <ThemedText
              style={{
                position: "absolute",
                left: "50%",
                transform: [{ translateX: -50 }],
                fontSize: 20,
                fontWeight: "900",
                color: "#0f172a"
              }}
            >
              {t("dashboard.title")}
            </ThemedText>

            <Pressable
              onPress={() => {
                setShowMenu((v) => !v);
                setShowLanguageMenu(false);
              }}
              style={{
                width: 32,
                height: 32,
                borderRadius: 16,
                backgroundColor: "#ddd",
                overflow: "hidden",
                borderWidth: 2,
                borderColor: "white"
              }}
            >
              <Image
                source={{
                  uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSKmcPIw2kCKjpIeOc4hhRBO_Ci6FAsZhqw6kQYiqjjuoWnlG08drwQItV1pLICZAlA0IqV7kPPfpeRAAF5Ws7_i0EwUD7rEGHWEUZEmkLvp8ApQDM4l-Qied6mXW7ZyFtq1rzJj3-WxqdeegxOTL0Xm9dMDYbAubCHVC9PrTkaW7RsA2aPcog_m2RLqqFzsCYk9jWIJm0mogUcs1_0x56k2DmTUeCFKRIlNZCOuy5v7lURYFzzs9AVtJWK5CX8HTejkoPHoGQESjt"
                }}
                style={{ width: "100%", height: "100%" }}
              />
            </Pressable>

            {showMenu ? (
              <>
                <Pressable
                  onPress={closeMenu}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: -9999,
                    right: -9999,
                    bottom: -9999,
                    backgroundColor: "transparent",
                    zIndex: 998
                  }}
                />

                <View
                  style={{
                    position: "absolute",
                    right: 20,
                    top: 56,
                    width: 220,
                    borderRadius: 16,
                    overflow: "hidden",
                    backgroundColor: "rgba(255,255,255,0.92)",
                    borderWidth: 1,
                    borderColor: "rgba(203,213,225,0.9)",
                    zIndex: 9999,
                    elevation: 9999
                  }}
                >
                  <Pressable
                    onPress={() => setShowLanguageMenu((v) => !v)}
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 12,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <ThemedText style={{ fontSize: 14, fontWeight: "700", color: "#0f172a" }}>{t("menu.language")}</ThemedText>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                      <ThemedText style={{ fontSize: 12, fontWeight: "700", color: "#64748b" }}>
                        {language === "en" ? "EN" : language === "hi" ? "HI" : "PA"}
                      </ThemedText>
                      <MaterialIcons name={showLanguageMenu ? "expand-less" : "expand-more"} size={18} color="#64748b" />
                    </View>
                  </Pressable>

                  {showLanguageMenu ? (
                    <View style={{ borderTopWidth: 1, borderColor: "rgba(203,213,225,0.7)" }}>
                      {["en", "pa", "hi"].map((code) => (
                        <Pressable
                          key={code}
                          onPress={() => {
                            setLanguage(code as any);
                            closeMenu();
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
                          <ThemedText style={{ fontSize: 14, fontWeight: "600", color: "#0f172a" }}>
                            {code === "en" ? t("language.english") : code === "pa" ? t("language.punjabi") : t("language.hindi")}
                          </ThemedText>
                          {language === code ? <MaterialIcons name="check" size={18} color="rgb(55, 155, 47)" /> : null}
                        </Pressable>
                      ))}
                    </View>
                  ) : null}

                  <View style={{ height: 1, backgroundColor: "rgba(203,213,225,0.7)" }} />

                  <Pressable
                    onPress={() => {
                      closeMenu();
                      onChangePassword?.();
                    }}
                    style={{ paddingHorizontal: 14, paddingVertical: 12, flexDirection: "row", alignItems: "center", gap: 10 }}
                  >
                    <MaterialIcons name="lock" size={18} color="#0f172a" />
                    <ThemedText style={{ fontSize: 14, fontWeight: "700", color: "#0f172a" }}>{t("menu.changePassword")}</ThemedText>
                  </Pressable>

                  <Pressable
                    onPress={() => {
                      closeMenu();
                      onLogout?.();
                    }}
                    style={{ paddingHorizontal: 14, paddingVertical: 12, flexDirection: "row", alignItems: "center", gap: 10 }}
                  >
                    <MaterialIcons name="logout" size={18} color="#e11d48" />
                    <ThemedText style={{ fontSize: 14, fontWeight: "700", color: "#e11d48" }}>{t("menu.logout")}</ThemedText>
                  </Pressable>
                </View>
              </>
            ) : null}
          </View>
        </BlurView>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 220 }}>
          <View style={{ padding: 20 }}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 16
              }}
            >
              {[
                {
                  icon: "currency-rupee" as const,
                  title: "Investment Project",
                  desc: "Apply New Project / Expansion",
                  color: "#4f46e5"
                },
                {
                  icon: "settings-applications" as const,
                  title: "Manage Applications",
                  desc: "Clearance | Incentive | Service",
                  color: "#7c3aed"
                },
                {
                  icon: "assignment" as const,
                  title: "My Applications",
                  desc: "View & Share Documents",
                  color: "#2563eb"
                },
                {
                  icon: "verified-user" as const,
                  title: "Know Your Approvals",
                  desc: "View Status & Progress",
                  color: "#0d9488"
                },
                {
                  icon: "lock" as const,
                  title: "Entity Vault",
                  desc: "Secure Document Storage",
                  color: "#e11d48"
                },
                {
                  icon: "analytics" as const,
                  title: "Project Dashboard",
                  desc: "Insights & Reports",
                  color: "#d97706"
                }
              ].map((item, i) => (
                <Pressable
                  key={i}
                  style={{
                    width: "47%",
                    backgroundColor: "rgba(255,255,255,0.95)",
                    borderRadius: 28,
                    padding: 16
                  }}
                >
                  <View
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 18,
                      backgroundColor: item.color + "20",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 10
                    }}
                  >
                    <MaterialIcons name={item.icon} size={26} color={item.color} />
                  </View>

                  <ThemedText
                    style={{
                      fontSize: 14,
                      fontWeight: "900",
                      textTransform: "uppercase"
                    }}
                  >
                    {item.title}
                  </ThemedText>

                  <ThemedText
                    style={{
                      fontSize: 10,
                      fontWeight: "500",
                      color: "#64748b",
                      marginTop: 4
                    }}
                  >
                    {item.desc}
                  </ThemedText>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
            <ThemedText
              style={{
                fontSize: 20,
                fontWeight: "900",
                marginBottom: 10
              }}
            >
              Recent Activity
            </ThemedText>

            {[
              {
                icon: "description" as const,
                title: "CAF Application #4922",
                desc: "Status updated to 'Scrutiny Completed'",
                color: "#2563eb"
              },
              {
                icon: "warning" as const,
                title: "Power Connection #2101",
                desc: "Action required: Site Map Clarification",
                color: "#f97316"
              }
            ].map((item, i) => (
              <View
                key={i}
                style={{
                  flexDirection: "row",
                  gap: 14,
                  padding: 16,
                  borderRadius: 20,
                  backgroundColor: "rgba(255,255,255,0.85)",
                  marginBottom: 12
                }}
              >
                <View
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: item.color + "20",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <MaterialIcons name={item.icon} size={24} color={item.color} />
                </View>

                <View style={{ flex: 1 }}>
                  <ThemedText style={{ fontSize: 14, fontWeight: "800" }}>{item.title}</ThemedText>
                  <ThemedText
                    style={{
                      fontSize: 12,
                      fontWeight: "500",
                      color: "#475569"
                    }}
                  >
                    {item.desc}
                  </ThemedText>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>

        <Pressable
          style={{
            position: "absolute",
            bottom: 110,
            right: 20,
            width: 56,
            height: 56,
            borderRadius: 28,
            backgroundColor: "#2563eb",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <MaterialIcons name="add" size={28} color="white" />
        </Pressable>

        <BlurView
          intensity={40}
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            {(["home", "grid-view", "description", "person"] as const).map((icon, i) => (
              <View key={i} style={{ alignItems: "center", width: 60 }}>
                <MaterialIcons name={icon} size={26} color={i === 0 ? "#4f46e5" : "#94a3b8"} />
                <ThemedText
                  style={{
                    fontSize: 10,
                    fontWeight: "800",
                    color: i === 0 ? "#4f46e5" : "#94a3b8"
                  }}
                >
                  {(["Home", "Services", "Docs", "Profile"] as const)[i]}
                </ThemedText>
              </View>
            ))}
          </View>
        </BlurView>
      </LinearGradient>
    </>
  );
}
