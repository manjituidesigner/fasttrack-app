import { StatusBar } from "expo-status-bar";
import { View, ScrollView, Pressable, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";
 import Constants from "expo-constants";
import { useState } from "react";
import { ThemedText } from "../components/ThemedText";
import { useI18n } from "../i18n/I18nProvider";
import { useTheme } from "../theme/useTheme";

type Props = {
  userRole?: "investor" | "officer";
  onSetUserRole?: (role: "investor" | "officer") => void;
  onMenuPress?: () => void;
  onInvestmentProject?: () => void;
  onChangePassword?: () => void;
  onLogout?: () => void;
  onManageApplications?: () => void;
  onMyApplications?: () => void;
  onKnowYourApprovals?: () => void;
  onEntityVault?: () => void;
  onProjectDashboard?: () => void;
};

export function DashboardScreen({
  userRole: userRoleProp,
  onSetUserRole,
  onMenuPress,
  onInvestmentProject,
  onChangePassword,
  onLogout,
  onManageApplications,
  onMyApplications,
  onKnowYourApprovals,
  onEntityVault,
  onProjectDashboard
}: Props) {
  const theme = useTheme();
  const { language, setLanguage, t } = useI18n();
  const [showMenu, setShowMenu] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const STATUS_BAR_HEIGHT = Constants.statusBarHeight ?? 0;

  const activeRole: "investor" | "officer" = userRoleProp ?? "investor";

  const closeMenu = () => {
    setShowLanguageMenu(false);
    setShowMenu(false);
  };

  if (activeRole === "officer") {
    return (
      <OfficerDashboard
        statusBarHeight={STATUS_BAR_HEIGHT}
        userRole={activeRole}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        showLanguageMenu={showLanguageMenu}
        setShowLanguageMenu={setShowLanguageMenu}
        closeMenu={closeMenu}
        language={language}
        setLanguage={setLanguage}
        t={t}
        onSetUserRole={onSetUserRole}
        onChangePassword={onChangePassword}
        onLogout={onLogout}
        onMenuPress={onMenuPress}
        onManageApplications={onManageApplications}
        onKnowYourApprovals={onKnowYourApprovals}
      />
    );
  }

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
                  fontWeight: "700",
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
                    onPress={() => {
                      onSetUserRole?.("investor");
                      closeMenu();
                    }}
                    style={{ paddingHorizontal: 14, paddingVertical: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
                  >
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                      <MaterialIcons name="person" size={18} color="#0f172a" />
                      <ThemedText style={{ fontSize: 14, fontWeight: "700", color: "#0f172a" }}>Invester</ThemedText>
                    </View>
                    <MaterialIcons name="check" size={18} color="rgb(55, 155, 47)" />
                  </Pressable>

                  <Pressable
                    onPress={() => {
                      onSetUserRole?.("officer");
                      closeMenu();
                    }}
                    style={{ paddingHorizontal: 14, paddingVertical: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderTopWidth: 1, borderColor: "rgba(203,213,225,0.7)" }}
                  >
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                      <MaterialIcons name="badge" size={18} color="#0f172a" />
                      <ThemedText style={{ fontSize: 14, fontWeight: "700", color: "#0f172a" }}>Officer</ThemedText>
                    </View>
                    {null}
                  </Pressable>

                  <Pressable
                    onPress={() => setShowLanguageMenu((v) => !v)}
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 12,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderTopWidth: 1,
                      borderColor: "rgba(203,213,225,0.7)"
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

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 140 }}>
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
                    if (item.titleKey === "dashboard.card.manageApplications.title") {
                      onManageApplications?.();
                    }
                    if (item.titleKey === "dashboard.card.myApplications.title") {
                      onMyApplications?.();
                    }
                    if (item.titleKey === "dashboard.card.knowYourApprovals.title") {
                      onKnowYourApprovals?.();
                    }
                    if (item.titleKey === "dashboard.card.entityVault.title") {
                      onEntityVault?.();
                    }
                    if (item.titleKey === "dashboard.card.projectDashboard.title") {
                      onProjectDashboard?.();
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
                      fontWeight: "700",
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
                    fontWeight: "700",
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
                  fontWeight: "700"
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
                <ThemedText style={{ fontSize: 12, fontWeight: "700", color: "#4f46e5" }}>{t("dashboard.viewLogs")}</ThemedText>
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
                  <ThemedText style={{ fontSize: 14, fontWeight: "700" }}>{t(item.titleKey)}</ThemedText>
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
                <ThemedText style={{ fontSize: 12, fontWeight: "700", color: "#64748b", textTransform: "uppercase" }}>
                  {t("dashboard.helpLine.label")}
                </ThemedText>
                <ThemedText style={{ fontSize: 16, fontWeight: "700", color: "#0f172a" }}>{t("dashboard.helpLine.number")}</ThemedText>
                <ThemedText style={{ fontSize: 11, fontWeight: "700", color: "#64748b" }}>{t("dashboard.helpLine.hours")}</ThemedText>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
}

function OfficerDashboard({
  statusBarHeight,
  userRole,
  showMenu,
  setShowMenu,
  showLanguageMenu,
  setShowLanguageMenu,
  closeMenu,
  language,
  setLanguage,
  t,
  onSetUserRole,
  onChangePassword,
  onLogout,
  onMenuPress,
  onManageApplications,
  onKnowYourApprovals
}: {
  statusBarHeight: number;
  userRole: "investor" | "officer";
  showMenu: boolean;
  setShowMenu: (next: boolean | ((v: boolean) => boolean)) => void;
  showLanguageMenu: boolean;
  setShowLanguageMenu: (next: boolean | ((v: boolean) => boolean)) => void;
  closeMenu: () => void;
  language: string;
  setLanguage: (code: any) => void;
  t: (key: any) => string;
  onSetUserRole?: (role: "investor" | "officer") => void;
  onChangePassword?: () => void;
  onLogout?: () => void;
  onMenuPress?: () => void;
  onManageApplications?: () => void;
  onKnowYourApprovals?: () => void;
}) {
  return (
    <>
      <StatusBar style="dark" />

      <View style={{ flex: 1, backgroundColor: "#f6f6f8" }}>
        <View
          style={{
            paddingTop: statusBarHeight,
            backgroundColor: "rgba(255,255,255,0.90)",
            borderBottomWidth: 1,
            borderBottomColor: "#e5e7eb",
            position: "relative",
            zIndex: 50,
            elevation: 50
          }}
        >
          <View style={{ paddingHorizontal: 24, paddingVertical: 16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ flex: 1, paddingRight: 14 }}>
              <Text style={{ fontSize: 20, fontWeight: "700", color: "#111827" }}>Officer Portal</Text>
              <Text style={{ marginTop: 2, fontSize: 12, fontWeight: "600", color: "#6b7280" }}>Designation • Department of Industries</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", gap: 14 }}>
              <Pressable hitSlop={10} style={{ width: 44, height: 44, borderRadius: 22, alignItems: "center", justifyContent: "center" }}>
                <View style={{ position: "absolute", top: 8, right: 8, width: 10, height: 10, borderRadius: 5, backgroundColor: "#EF4444", borderWidth: 2, borderColor: "#ffffff" }} />
                <MaterialIcons name="notifications-none" size={30} color="#9ca3af" />
              </Pressable>

              <Pressable
                hitSlop={10}
                onPress={() => {
                  setShowMenu((v) => !v);
                  setShowLanguageMenu(false);
                }}
                style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "rgba(19,91,236,0.10)", borderWidth: 2, borderColor: "#ffffff", overflow: "hidden" }}
              >
                <Image
                  source={{
                    uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjDq_EAZzbxo4OXWlZyqiL3vLZilhJfoqmNFTrZhBVshI1gnWa6gggAw1GW5PHzKwzPLxIR1_rgNgC6xujmssHzmEyvjZm5tbLvDHayMp2h_Cjuay6a4zgEwZ44gwVBCqyXqPnMh2GAKYmRSU6VtqwjDrnH_iLx989gKxAD4dPtK5jwTKNOT2SLOY1-oAsMInHEF6wnsRRqUwwgPvmf1heQjWcWXY-vcU6OLl87u5Rj_G5YgYx7nN238BdZby6FRZWx0WkelososY"
                  }}
                  style={{ width: "100%", height: "100%" }}
                />
              </Pressable>
            </View>
          </View>

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
                  top: 56 + statusBarHeight,
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
                  onPress={() => {
                    onSetUserRole?.("investor");
                    closeMenu();
                  }}
                  style={{ paddingHorizontal: 14, paddingVertical: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <MaterialIcons name="person" size={18} color="#0f172a" />
                    <ThemedText style={{ fontSize: 14, fontWeight: "700", color: "#0f172a" }}>Invester</ThemedText>
                  </View>
                  {userRole === "investor" ? <MaterialIcons name="check" size={18} color="rgb(55, 155, 47)" /> : null}
                </Pressable>

                <Pressable
                  onPress={() => {
                    onSetUserRole?.("officer");
                    closeMenu();
                  }}
                  style={{ paddingHorizontal: 14, paddingVertical: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderTopWidth: 1, borderColor: "rgba(203,213,225,0.7)" }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <MaterialIcons name="badge" size={18} color="#0f172a" />
                    <ThemedText style={{ fontSize: 14, fontWeight: "700", color: "#0f172a" }}>Officer</ThemedText>
                  </View>
                  {userRole === "officer" ? <MaterialIcons name="check" size={18} color="rgb(55, 155, 47)" /> : null}
                </Pressable>

                <Pressable
                  onPress={() => setShowLanguageMenu((v) => !v)}
                  style={{
                    paddingHorizontal: 14,
                    paddingVertical: 12,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTopWidth: 1,
                    borderColor: "rgba(203,213,225,0.7)"
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

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 24, paddingBottom: 120 }}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View>
              <Text style={{ fontSize: 14, fontWeight: "600", color: "#6b7280" }}>Wednesday, Oct 24</Text>
              <Text style={{ marginTop: 4, fontSize: 18, fontWeight: "800", color: "#111827" }}>Overview</Text>
            </View>
            <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
              <Text style={{ fontSize: 14, fontWeight: "700", color: "#135bec" }}>Generate Report</Text>
              <MaterialIcons name="arrow-forward" size={16} color="#135bec" />
            </Pressable>
          </View>

          <View style={{ marginTop: 18, flexDirection: "row", flexWrap: "wrap", gap: 14 }}>
            <OfficerKpiCard
              borderColor="#EF4444"
              accentColor="#EF4444"
              title="Total Pending"
              value="124"
              badgeLabel="12%"
              badgeIcon="arrow-upward"
              badgeBg="rgba(239,68,68,0.10)"
              badgeFg="#EF4444"
              subtitle="vs. last week"
              bigIcon="pending-actions"
            />

            <OfficerKpiCard
              borderColor="#F97316"
              accentColor="#F97316"
              title="Scrutiny Due"
              value="45"
              badgeLabel="Urgent"
              badgeIcon="priority-high"
              badgeBg="rgba(249,115,22,0.10)"
              badgeFg="#F97316"
              subtitle="Requires action"
              bigIcon="content-paste-search"
            />

            <OfficerEscalatedCard />

            <OfficerKpiCard
              borderColor="#10B981"
              accentColor="#10B981"
              title="Approved Today"
              value="08"
              badgeLabel="Done"
              badgeIcon="check"
              badgeBg="rgba(16,185,129,0.10)"
              badgeFg="#10B981"
              subtitle="Clearance issued"
              bigIcon="verified"
            />
          </View>

          <View style={{ marginTop: 26 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <MaterialIcons name="error-outline" size={22} color="#EF4444" />
                <Text style={{ fontSize: 18, fontWeight: "800", color: "#111827" }}>Urgent Attention Needed</Text>
              </View>
              <View style={{ paddingHorizontal: 10, paddingVertical: 6, borderRadius: 10, backgroundColor: "#e5e7eb" }}>
                <Text style={{ fontSize: 12, fontWeight: "800", color: "#4b5563" }}>{"> 30 Days"}</Text>
              </View>
            </View>

            <View style={{ gap: 12 }}>
              <OfficerTaskCard
                code="IND-2023-889"
                title="Steel Plant Expansion"
                subtitle="Ludhiana Industrial Area • Phase 2"
                days="34"
                daysColor="#EF4444"
                footerLeftType="avatars"
                primaryLabel="Review"
                primaryAction={onManageApplications}
              />

              <OfficerTaskCard
                code="IND-2023-902"
                title="Bio-Ethanol Refinery"
                subtitle="Bathinda Zone • Sector 4"
                days="31"
                daysColor="#F97316"
                footerLeftType="warning"
                footerLeftIcon="warning"
                footerLeftText="Missing Fire NOC"
                secondaryLabel="View Details"
                secondaryAction={onKnowYourApprovals}
              />

              <OfficerTaskCard
                code="TEX-2023-112"
                title="Cotton Mill Upgrade"
                subtitle="Amritsar Textiles Park"
                days="42"
                daysColor="#EF4444"
                footerLeftType="note"
                footerLeftIcon="edit-note"
                footerLeftText="Draft pending review"
                secondaryLabel="Resume"
                secondaryAction={onManageApplications}
                faded
              />
            </View>
          </View>

          <View style={{ marginTop: 26 }}>
            <Text style={{ fontSize: 18, fontWeight: "800", color: "#111827", marginBottom: 14 }}>Quick Actions</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", rowGap: 14 }}>
              <OfficerQuickAction icon="add-task" label="New Task" bg="rgba(59,130,246,0.10)" fg="#135bec" />
              <OfficerQuickAction icon="analytics" label="Reports" bg="rgba(124,58,237,0.10)" fg="#7c3aed" />
              <OfficerQuickAction icon="history" label="History" bg="rgba(249,115,22,0.10)" fg="#f97316" />
              <OfficerQuickAction icon="groups" label="Team" bg="rgba(13,148,136,0.10)" fg="#0d9488" />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

function OfficerKpiCard({
  borderColor,
  accentColor,
  title,
  value,
  badgeLabel,
  badgeIcon,
  badgeBg,
  badgeFg,
  subtitle,
  bigIcon
}: {
  borderColor: string;
  accentColor: string;
  title: string;
  value: string;
  badgeLabel: string;
  badgeIcon: string;
  badgeBg: string;
  badgeFg: string;
  subtitle: string;
  bigIcon: string;
}) {
  return (
    <View
      style={{
        width: "47%",
        backgroundColor: "#ffffff",
        borderRadius: 16,
        padding: 16,
        borderLeftWidth: 4,
        borderLeftColor: borderColor,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
        elevation: 2,
        overflow: "hidden"
      }}
    >
      <View style={{ position: "absolute", top: 8, right: 8, opacity: 0.10 }}>
        <MaterialIcons name={bigIcon as any} size={64} color={accentColor} />
      </View>

      <Text style={{ fontSize: 12, fontWeight: "800", color: "#6b7280", textTransform: "uppercase", letterSpacing: 0.5 }}>{title}</Text>
      <View style={{ marginTop: 6, flexDirection: "row", alignItems: "flex-end", gap: 10 }}>
        <Text style={{ fontSize: 32, fontWeight: "800", color: "#111827", lineHeight: 34 }}>{value}</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: 6, paddingVertical: 4, borderRadius: 8, backgroundColor: badgeBg }}>
          <MaterialIcons name={badgeIcon as any} size={12} color={badgeFg} />
          <Text style={{ fontSize: 12, fontWeight: "800", color: badgeFg }}>{badgeLabel}</Text>
        </View>
      </View>
      <Text style={{ marginTop: 8, fontSize: 10, fontWeight: "600", color: "#9ca3af" }}>{subtitle}</Text>
    </View>
  );
}

function OfficerEscalatedCard() {
  return (
    <View
      style={{
        width: "47%",
        backgroundColor: "#991B1B",
        borderRadius: 16,
        padding: 16,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 10 },
        elevation: 6,
        overflow: "hidden"
      }}
    >
      <View style={{ position: "absolute", right: -10, bottom: -10, opacity: 0.20 }}>
        <MaterialIcons name="warning" size={84} color="#fff" />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "#fff" }} />
        <Text style={{ fontSize: 12, fontWeight: "800", color: "rgba(255,255,255,0.80)", textTransform: "uppercase", letterSpacing: 0.6 }}>Escalated</Text>
      </View>
      <Text style={{ fontSize: 32, fontWeight: "800", color: "#fff", lineHeight: 34 }}>12</Text>
      <Text style={{ marginTop: 8, fontSize: 10, fontWeight: "600", color: "rgba(255,255,255,0.75)" }}>Critical attention needed</Text>
    </View>
  );
}

function OfficerTaskCard({
  code,
  title,
  subtitle,
  days,
  daysColor,
  footerLeftType,
  footerLeftIcon,
  footerLeftText,
  primaryLabel,
  primaryAction,
  secondaryLabel,
  secondaryAction,
  faded
}: {
  code: string;
  title: string;
  subtitle: string;
  days: string;
  daysColor: string;
  footerLeftType: "avatars" | "warning" | "note";
  footerLeftIcon?: string;
  footerLeftText?: string;
  primaryLabel?: string;
  primaryAction?: () => void;
  secondaryLabel?: string;
  secondaryAction?: () => void;
  faded?: boolean;
}) {
  return (
    <View
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: "#f3f4f6",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
        elevation: 1,
        opacity: faded ? 0.8 : 1
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
        <View style={{ flex: 1, paddingRight: 12 }}>
          <View style={{ alignSelf: "flex-start", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8, backgroundColor: "rgba(19,91,236,0.10)" }}>
            <Text style={{ fontSize: 10, fontWeight: "800", color: "#135bec" }}>{code}</Text>
          </View>
          <Text style={{ marginTop: 8, fontSize: 16, fontWeight: "800", color: "#111827" }}>{title}</Text>
          <Text style={{ marginTop: 4, fontSize: 12, fontWeight: "600", color: "#6b7280" }}>{subtitle}</Text>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ fontSize: 22, fontWeight: "800", color: daysColor }}>{days}</Text>
          <Text style={{ marginTop: 2, fontSize: 10, fontWeight: "700", color: "#9ca3af", textTransform: "uppercase" }}>Days Pending</Text>
        </View>
      </View>

      <View style={{ height: 1, backgroundColor: "#f3f4f6", marginTop: 14, marginBottom: 14 }} />

      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        {footerLeftType === "avatars" ? (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlp2pXseV44Nt1fWaeTRv-2v0THzOL-l4JleEwpfoNMR-yLExQV-lEFxKuk6L-mUgEP3JNoj6Vj14p4dU4X0-_0ebC4O3tBBYR2idbl0W4ATpEIKDiig5c677Ys1wku3VUUKVB6DrsPmolhmcZuZQvjL0haDryWuuy5hyOO6hvsa0dltVSXc_4QuinjBmOhOrupBdXITWcsPjsFaokqOFkdZiS4x9yYxy9bCUVsWa3FZoNPMd9qTkzGo4x17hhDtCrRrRlY3ZeciU"
              }}
              style={{ width: 28, height: 28, borderRadius: 14, borderWidth: 2, borderColor: "#fff" }}
            />
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnUjl2GbrUrmKmg4tqMouzJZxLBmbxeFltgXae4DPtjtB3SUnoWgfERILr-_f7LMC_hZarrN66WzfC-OwWhvEbDX-gfZTUiIROqk5JRQZRPC0Vu5sCg0r7cjy30FAa66wy-Q04LdKLovh2wo-j1wKKDnrQ8mdmKdeAl0iao8elX8kVS_iTNI7X8Sj6vV1k75LzPR4IgmgW0kevUQBmT4w2he28UmHwvFpEZIFjC-5-RAyanzkJd9FN9uKihAF_GcI5ONlukFBG_0U"
              }}
              style={{ width: 28, height: 28, borderRadius: 14, borderWidth: 2, borderColor: "#fff", marginLeft: -8 }}
            />
            <View style={{ width: 28, height: 28, borderRadius: 14, borderWidth: 2, borderColor: "#fff", backgroundColor: "#f3f4f6", alignItems: "center", justifyContent: "center", marginLeft: -8 }}>
              <Text style={{ fontSize: 10, fontWeight: "800", color: "#6b7280" }}>+1</Text>
            </View>
          </View>
        ) : (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <MaterialIcons name={(footerLeftIcon ?? "info-outline") as any} size={16} color={footerLeftType === "warning" ? "#F97316" : "#135bec"} />
            <Text style={{ fontSize: 12, fontWeight: "600", color: "#6b7280" }}>{footerLeftText}</Text>
          </View>
        )}

        {primaryLabel ? (
          <Pressable
            onPress={primaryAction}
            style={{ paddingHorizontal: 18, paddingVertical: 10, borderRadius: 12, backgroundColor: "#135bec", flexDirection: "row", alignItems: "center", gap: 6, shadowColor: "#135bec", shadowOpacity: 0.18, shadowRadius: 12, shadowOffset: { width: 0, height: 8 }, elevation: 3 }}
          >
            <Text style={{ fontSize: 14, fontWeight: "700", color: "#fff" }}>{primaryLabel}</Text>
            <MaterialIcons name="arrow-forward" size={16} color="#fff" />
          </Pressable>
        ) : (
          <Pressable
            onPress={secondaryAction}
            style={{ paddingHorizontal: 18, paddingVertical: 10, borderRadius: 12, backgroundColor: "#ffffff", borderWidth: 1, borderColor: "#e5e7eb" }}
          >
            <Text style={{ fontSize: 14, fontWeight: "700", color: "#374151" }}>{secondaryLabel}</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

function OfficerQuickAction({ icon, label, bg, fg }: { icon: string; label: string; bg: string; fg: string }) {
  return (
    <Pressable style={{ width: "22%", alignItems: "center", gap: 8 }}>
      <View style={{ width: 56, height: 56, borderRadius: 18, backgroundColor: bg, alignItems: "center", justifyContent: "center" }}>
        <MaterialIcons name={icon as any} size={26} color={fg} />
      </View>
      <Text style={{ fontSize: 10, fontWeight: "700", color: "#6b7280", textAlign: "center" }}>{label}</Text>
    </Pressable>
  );
}

function OfficerNavItem({ icon, label, active }: { icon: string; label: string; active?: boolean }) {
  return (
    <Pressable style={{ alignItems: "center", gap: 4, width: 56 }}>
      <MaterialIcons name={icon as any} size={24} color={active ? "#135bec" : "#9ca3af"} />
      <Text style={{ fontSize: 10, fontWeight: active ? "800" : "600", color: active ? "#135bec" : "#9ca3af" }}>{label}</Text>
    </Pressable>
  );
}
