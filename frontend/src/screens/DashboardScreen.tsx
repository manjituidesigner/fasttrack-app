import { StatusBar } from "expo-status-bar";
import { View, ScrollView, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";
 import Constants from "expo-constants";
import { useState } from "react";
import { ThemedText } from "../components/ThemedText";
import { useI18n } from "../i18n/I18nProvider";
import { useTheme } from "../theme/useTheme";

type Props = {
  onMenuPress?: () => void;
  onInvestmentProject?: () => void;
  onChangePassword?: () => void;
  onLogout?: () => void;
  onMyApplications?: () => void;
};

export function DashboardScreen({ onMenuPress, onInvestmentProject, onChangePassword, onLogout, onMyApplications }: Props) {
  const theme = useTheme();
  const { language, setLanguage, t } = useI18n();
  const [showMenu, setShowMenu] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const STATUS_BAR_HEIGHT = Constants.statusBarHeight ?? 0;

  const closeMenu = () => {
    setShowLanguageMenu(false);
    setShowMenu(false);
  };

  return (
    <>
      <StatusBar style="dark" />

      <LinearGradient colors={theme.colors.background.gradient} style={{ flex: 1 }}>
        <BlurView intensity={40} style={{ zIndex: 20, elevation: 20 }}>
          <View
            style={{
              position: "relative",
              zIndex: 20,
              elevation: 20,
              height: 56 + STATUS_BAR_HEIGHT,
              paddingTop: STATUS_BAR_HEIGHT,
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
              hitSlop={10}
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: "rgba(255,255,255,0.6)",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <MaterialIcons name="menu" size={24} color="#1f2937" />
            </Pressable>

            <View
              pointerEvents="none"
              style={{
                position: "absolute",
                left: "50%",
                transform: [{ translateX: -50 }]
              }}
            >
              <ThemedText
                style={{
                  fontSize: 20,
                  fontWeight: "900",
                  color: "#0f172a"
                }}
              >
                {t("dashboard.title")}
              </ThemedText>
            </View>

            <Pressable
              onPress={() => {
                setShowMenu((v) => !v);
                setShowLanguageMenu(false);
              }}
              hitSlop={10}
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
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
                    top: 56 + STATUS_BAR_HEIGHT,
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
                  titleKey: "dashboard.card.investmentProject.title" as const,
                  descKey: "dashboard.card.investmentProject.desc" as const,
                  color: "#4f46e5"
                },
                {
                  icon: "settings-applications" as const,
                  titleKey: "dashboard.card.manageApplications.title" as const,
                  descKey: "dashboard.card.manageApplications.desc" as const,
                  color: "#7c3aed"
                },
                {
                  icon: "assignment" as const,
                  titleKey: "dashboard.card.myApplications.title" as const,
                  descKey: "dashboard.card.myApplications.desc" as const,
                  color: "#2563eb"
                },
                {
                  icon: "verified-user" as const,
                  titleKey: "dashboard.card.knowYourApprovals.title" as const,
                  descKey: "dashboard.card.knowYourApprovals.desc" as const,
                  color: "#0d9488"
                },
                {
                  icon: "lock" as const,
                  titleKey: "dashboard.card.entityVault.title" as const,
                  descKey: "dashboard.card.entityVault.desc" as const,
                  color: "#e11d48"
                },
                {
                  icon: "analytics" as const,
                  titleKey: "dashboard.card.projectDashboard.title" as const,
                  descKey: "dashboard.card.projectDashboard.desc" as const,
                  color: "#d97706"
                }
              ].map((item, i) => (
                <Pressable
                  key={i}
                  onPress={() => {
                    if (item.titleKey === "dashboard.card.investmentProject.title") {
                      onInvestmentProject?.();
                    }
                    if (item.titleKey === "dashboard.card.myApplications.title") {
                      onMyApplications?.();
                    }
                  }}
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
                    {t(item.titleKey)}
                  </ThemedText>

                  <ThemedText
                    style={{
                      fontSize: 10,
                      fontWeight: "500",
                      color: "#64748b",
                      marginTop: 4
                    }}
                  >
                    {t(item.descKey)}
                  </ThemedText>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={{ paddingHorizontal: 20, paddingTop: 4 }}>
            <Pressable
              onPress={() => {}}
              style={{
                height: 160,
                borderRadius: 22,
                overflow: "hidden",
                backgroundColor: "rgba(15, 23, 42, 0.8)",
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.35)"
              }}
            >
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=60"
                }}
                style={{ width: "100%", height: "100%" }}
              />

              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(2,6,23,0.25)",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 18,
                    backgroundColor: "rgba(239, 68, 68, 0.95)",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <MaterialIcons name="play-arrow" size={36} color="white" />
                </View>

                <ThemedText
                  style={{
                    marginTop: 14,
                    fontSize: 13,
                    fontWeight: "900",
                    color: "white",
                    letterSpacing: 1,
                    textTransform: "uppercase"
                  }}
                >
                  {t("dashboard.investorsWalkthrough")}
                </ThemedText>
              </View>
            </Pressable>
          </View>

          <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <ThemedText
                style={{
                  fontSize: 20,
                  fontWeight: "900"
                }}
              >
                {t("dashboard.recentActivity")}
              </ThemedText>

              <Pressable
                onPress={() => {}}
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 8,
                  borderRadius: 999,
                  backgroundColor: "rgba(255,255,255,0.75)",
                  borderWidth: 1,
                  borderColor: "rgba(203,213,225,0.7)"
                }}
              >
                <ThemedText style={{ fontSize: 12, fontWeight: "800", color: "#4f46e5" }}>{t("dashboard.viewLogs")}</ThemedText>
              </Pressable>
            </View>

            {[
              {
                icon: "description" as const,
                titleKey: "dashboard.activity.caf.title" as const,
                descKey: "dashboard.activity.caf.desc" as const,
                color: "#2563eb"
              },
              {
                icon: "warning" as const,
                titleKey: "dashboard.activity.power.title" as const,
                descKey: "dashboard.activity.power.desc" as const,
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
                  <ThemedText style={{ fontSize: 14, fontWeight: "800" }}>{t(item.titleKey)}</ThemedText>
                  <ThemedText
                    style={{
                      fontSize: 12,
                      fontWeight: "500",
                      color: "#475569"
                    }}
                  >
                    {t(item.descKey)}
                  </ThemedText>
                </View>
              </View>
            ))}

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 14,
                padding: 16,
                borderRadius: 20,
                backgroundColor: "rgba(255,255,255,0.85)",
                marginTop: 6
              }}
            >
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: "rgba(15, 23, 42, 0.08)",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <MaterialIcons name="support-agent" size={24} color="#0f172a" />
              </View>

              <View style={{ flex: 1 }}>
                <ThemedText style={{ fontSize: 12, fontWeight: "900", color: "#64748b", textTransform: "uppercase" }}>
                  {t("dashboard.helpLine.label")}
                </ThemedText>
                <ThemedText style={{ fontSize: 16, fontWeight: "900", color: "#0f172a" }}>{t("dashboard.helpLine.number")}</ThemedText>
                <ThemedText style={{ fontSize: 11, fontWeight: "700", color: "#64748b" }}>{t("dashboard.helpLine.hours")}</ThemedText>
              </View>
            </View>
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
                  {([
                    t("dashboard.bottomNav.home"),
                    t("dashboard.bottomNav.services"),
                    t("dashboard.bottomNav.docs"),
                    t("dashboard.bottomNav.profile")
                  ] as const)[i]}
                </ThemedText>
              </View>
            ))}
          </View>
        </BlurView>
      </LinearGradient>
    </>
  );
}
