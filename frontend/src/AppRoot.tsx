import { useEffect, useState } from "react";
import { Dimensions, Image, Modal, Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { ThemeProvider } from "./theme/ThemeProvider";
import { I18nProvider } from "./i18n/I18nProvider";
import { useI18n } from "./i18n/I18nProvider";
import { HomeScreen } from "./screens/HomeScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { DashboardScreen } from "./screens/DashboardScreen";
import { ChangePasswordScreen } from "./screens/ChangePasswordScreen";
import { MyProjectsScreen } from "./screens/MyProjectsScreen";
import { MyApplicationsScreen } from "./screens/MyApplicationsScreen";
import { CafFormScreen } from "./screens/CafFormScreen";
import { InvestmentProjectScreen } from "./screens/InvestmentProjectScreen";
import { ThemedText } from "./components/ThemedText";
import ChatbotIcon from "./assets/images/chatbot.svg";

type RouteName =
  | "home"
  | "login"
  | "dashboard"
  | "myProjects"
  | "myApplications"
  | "cafForm"
  | "investmentProject"
  | "changePassword";

/* ===== Menu Item ===== */
function MenuItem({ icon, label, active, badge, muted, danger, onPress }: any) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        height: 48,
        marginHorizontal: 12,
        marginVertical: 4,
        paddingHorizontal: 16,
        borderRadius: 14,
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        backgroundColor: active ? "rgba(19,182,236,0.15)" : "transparent"
      }}
    >
      <MaterialIcons
        name={icon}
        size={24}
        color={active ? "#13b6ec" : danger ? "#ef4444" : muted ? "#9ca3af" : "#6b7280"}
      />

      <Text
        style={{
          fontSize: 15,
          fontWeight: active ? "800" : "600",
          color: danger ? "#ef4444" : active ? "#13b6ec" : muted ? "#9ca3af" : "#374151",
          flex: 1
        }}
      >
        {label}
      </Text>

      {badge && (
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            backgroundColor: "#ef4444",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ fontSize: 10, fontWeight: "800", color: "white" }}>{badge}</Text>
        </View>
      )}
    </Pressable>
  );
}

export function AppRoot() {
  return (
    <I18nProvider>
      <ThemeProvider>
        {Platform.OS === "web" ? (
          <View style={{ flex: 1, alignItems: "center" }}>
            <View style={{ flex: 1, width: "100%", maxWidth: 412, position: "relative" }}>
              <AppShell />
            </View>
          </View>
        ) : (
          <AppShell />
        )}
      </ThemeProvider>
    </I18nProvider>
  );
}

function AppShell() {
  const { t, language, setLanguage } = useI18n();
  const [route, setRoute] = useState<RouteName>("home");
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [showDrawer, setShowDrawer] = useState(false);
  const [showDrawerProfileMenu, setShowDrawerProfileMenu] = useState(false);
  const [showDrawerLanguageMenu, setShowDrawerLanguageMenu] = useState(false);

  useEffect(() => {
    const baseFontFamily = Platform.OS === "web" ? "Roboto, sans-serif" : "Roboto";

    const TextAny = Text as any;
    TextAny.defaultProps = TextAny.defaultProps ?? {};
    const existingStyle = TextAny.defaultProps.style;
    TextAny.defaultProps.style = [existingStyle, { fontFamily: baseFontFamily }];
  }, [language]);

  const screen =
    route === "home" ? (
      <HomeScreen onLoginPress={() => setRoute("login")} />
    ) : route === "login" ? (
      <LoginScreen onBack={() => setRoute("home")} onLoginSuccess={() => setRoute("dashboard")} />
    ) : route === "changePassword" ? (
      <ChangePasswordScreen onBack={() => setRoute("dashboard")} onOpenDrawer={() => setShowDrawer(true)} />
    ) : route === "myProjects" ? (
      <MyProjectsScreen
        onBack={() => setRoute("dashboard")}
        onMenuPress={() => setShowDrawer(true)}
        onChatPress={() => setShowChat(true)}
        onAddPress={() => {}}
      />
    ) : route === "investmentProject" ? (
      <InvestmentProjectScreen onBack={() => setRoute("dashboard")} onOpenDrawer={() => setShowDrawer(true)} />
    ) : route === "cafForm" ? (
      <CafFormScreen onBack={() => setRoute("myApplications")} onOpenDrawer={() => setShowDrawer(true)} />
    ) : route === "myApplications" ? (
      <MyApplicationsScreen onBack={() => setRoute("dashboard")} onMenuPress={() => setShowDrawer(true)} onFillCaf={() => setRoute("cafForm")} />
    ) : (
      <DashboardScreen
        onMenuPress={() => setShowDrawer(true)}
        onInvestmentProject={() => setRoute("investmentProject")}
        onMyApplications={() => setRoute("myApplications")}
        onChangePassword={() => setRoute("changePassword")}
        onLogout={() => setRoute("home")}
      />
    );

  const shouldRenderChatModal = route === "dashboard" || route === "myProjects" || route === "myApplications";
  const shouldRenderChatFab = route === "dashboard" || route === "myApplications";

  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  const DRAWER_WIDTH = Math.min(windowWidth * 0.85, 360);
  const CHAT_ICON_SIZE = 72;
  const CHAT_ICON_RIGHT = 20;
  const CHAT_ICON_BOTTOM = 178;
  const CHAT_GAP = 12;
  const CHAT_PANEL_MAX_WIDTH = 320;
  const chatPanelWidth = Math.min(CHAT_PANEL_MAX_WIDTH, windowWidth - 32);
  const chatPanelRight = Math.max(16, CHAT_ICON_RIGHT);
  const chatPanelBottom = Math.max(24, CHAT_ICON_BOTTOM + CHAT_ICON_SIZE + CHAT_GAP);
  const chatPanelMaxHeight = Math.min(380, windowHeight - chatPanelBottom - 24);

  return (
    <View style={{ flex: 1 }}>
      {screen}

      {shouldRenderChatModal ? (
        <>
          <Modal visible={showChat} transparent animationType="fade" onRequestClose={() => setShowChat(false)}>
            <Pressable style={{ flex: 1, backgroundColor: "rgba(2,6,23,0.15)" }} onPress={() => setShowChat(false)}>
              <Pressable
                onPress={() => {}}
                style={{
                  position: "absolute",
                  right: chatPanelRight,
                  bottom: chatPanelBottom,
                  width: chatPanelWidth,
                  maxWidth: "92%",
                  borderRadius: 18,
                  overflow: "hidden",
                  backgroundColor: "rgba(255,255,255,0.96)",
                  borderWidth: 1,
                  borderColor: "rgba(203,213,225,0.9)",
                  elevation: 30
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 14,
                    paddingVertical: 12,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <ChatbotIcon width={26} height={26} />
                    <ThemedText style={{ fontSize: 14, fontWeight: "900", color: "#0f172a" }}>{t("chatbot.title")}</ThemedText>
                  </View>

                  <Pressable
                    onPress={() => setShowChat(false)}
                    style={{ width: 34, height: 34, borderRadius: 12, alignItems: "center", justifyContent: "center" }}
                  >
                    <MaterialIcons name="close" size={20} color="#0f172a" />
                  </Pressable>
                </View>

                <View style={{ paddingHorizontal: 14, paddingBottom: 12 }}>
                  <View
                    style={{
                      height: Math.max(140, chatPanelMaxHeight - 80),
                      borderRadius: 14,
                      backgroundColor: "rgba(241,245,249,0.9)",
                      padding: 12
                    }}
                  >
                    <ThemedText style={{ fontSize: 12, fontWeight: "700", color: "#475569" }}>{t("chatbot.greeting")}</ThemedText>
                  </View>

                  <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <TextInput
                      value={chatMessage}
                      onChangeText={setChatMessage}
                      placeholder={t("chatbot.placeholder")}
                      placeholderTextColor="#94a3b8"
                      style={{
                        flex: 1,
                        paddingHorizontal: 12,
                        paddingVertical: 10,
                        borderRadius: 14,
                        backgroundColor: "white",
                        borderWidth: 1,
                        borderColor: "rgba(203,213,225,0.9)",
                        fontFamily: Platform.OS === "web" ? "Roboto, sans-serif" : "Roboto",
                        fontWeight: "500",
                        fontSize: 14
                      }}
                    />
                    <Pressable
                      onPress={() => setChatMessage("")}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 16,
                        backgroundColor: "#2563eb",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <MaterialIcons name="send" size={20} color="white" />
                    </Pressable>
                  </View>
                </View>
              </Pressable>
            </Pressable>
          </Modal>
        </>
      ) : null}

      {shouldRenderChatFab ? (
        <Pressable
          onPress={() => setShowChat(true)}
          style={{
            position: "absolute",
            bottom: CHAT_ICON_BOTTOM,
            right: CHAT_ICON_RIGHT,
            width: CHAT_ICON_SIZE,
            height: CHAT_ICON_SIZE,
            backgroundColor: "transparent",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ChatbotIcon width={CHAT_ICON_SIZE} height={CHAT_ICON_SIZE} />
        </Pressable>
      ) : null}

      <Modal
        visible={
          showDrawer &&
          (route === "dashboard" ||
            route === "myProjects" ||
            route === "myApplications" ||
            route === "investmentProject" ||
            route === "cafForm" ||
            route === "changePassword")
        }
        transparent
        animationType="fade"
        onRequestClose={() => setShowDrawer(false)}
      >
        <>
          <Pressable
            onPress={() => {
              setShowDrawerLanguageMenu(false);
              setShowDrawerProfileMenu(false);
              setShowDrawer(false);
            }}
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.4)",
              zIndex: 40
            }}
          />

          <BlurView
            intensity={80}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: DRAWER_WIDTH,
              height: "100%",
              zIndex: 50,
              borderTopRightRadius: 32,
              borderBottomRightRadius: 32,
              overflow: "hidden"
            }}
          >
            <View style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.95)" }}>
              <View
                style={{
                  paddingTop: 48,
                  paddingBottom: 20,
                  paddingHorizontal: 20,
                  borderBottomWidth: 1,
                  borderColor: "rgba(0,0,0,0.06)",
                  position: "relative",
                  zIndex: 60
                }}
              >
                <Pressable
                  onPress={() => {
                    setShowDrawerLanguageMenu(false);
                    setShowDrawerProfileMenu(false);
                    setShowDrawer(false);
                  }}
                  style={{
                    position: "absolute",
                    top: 18,
                    right: 18,
                    padding: 6
                  }}
                >
                  <MaterialIcons name="close" size={24} color="#9ca3af" />
                </Pressable>

                <View style={{ flexDirection: "row", alignItems: "center", gap: 14 }}>
                  <View>
                    <View
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 28,
                        padding: 2,
                        backgroundColor: "#13b6ec"
                      }}
                    >
                      <Image
                        source={{
                          uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_WtLd2woarJUFRbZghDmuqja6_4IPAuPZGL7ha4eXMrhN7Ghn4pyD1i8RYTyOnUKcxinEns07-CicPVFN75gzmA3SrEDnx5q_rrhXyCHoK2DVbQseBXoeyc5nhi75hqdc3SHn4EgPMvrSmNB2Xtgxjxk37v2o9jFv2yUlGbEj3ZAocerqnEWrfJU6iTuVBCvZKuxK8qEhEtPnSir1QfeIBZ_Vu7X8V6lmxXAxFfG7IqrNWoLoinuAaV5qbyc3GJ5v16lutMWIXgHy"
                        }}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 26
                        }}
                      />
                    </View>

                    <View
                      style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        width: 14,
                        height: 14,
                        borderRadius: 7,
                        backgroundColor: "#22c55e",
                        borderWidth: 2,
                        borderColor: "white"
                      }}
                    />
                  </View>

                  <Pressable
                    onPress={() => {
                      setShowDrawerLanguageMenu(false);
                      setShowDrawerProfileMenu((v) => !v);
                    }}
                    hitSlop={10}
                    style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
                  >
                    <View>
                      <Text style={{ fontSize: 17, fontWeight: "800" }}>{t("drawer.profile.name")}</Text>
                      <Text style={{ fontSize: 13, color: "#6b7280", fontWeight: "500" }}>{t("drawer.profile.company")}</Text>
                    </View>

                    <MaterialIcons name={showDrawerProfileMenu ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color="#94a3b8" />
                  </Pressable>
                </View>

                {showDrawerProfileMenu ? (
                  <View
                    style={{
                      position: "absolute",
                      top: 110,
                      right: 18,
                      width: 220,
                      borderRadius: 16,
                      overflow: "hidden",
                      backgroundColor: "rgba(255,255,255,0.98)",
                      borderWidth: 1,
                      borderColor: "rgba(203,213,225,0.9)",
                      zIndex: 999,
                      elevation: 999
                    }}
                  >
                    <Pressable
                      onPress={() => setShowDrawerLanguageMenu((v) => !v)}
                      style={{ paddingHorizontal: 14, paddingVertical: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
                    >
                      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <MaterialIcons name="language" size={18} color="#0f172a" />
                        <Text style={{ fontSize: 14, fontWeight: "700", color: "#0f172a" }}>{t("drawer.language")}</Text>
                      </View>
                      <MaterialIcons name={showDrawerLanguageMenu ? "expand-less" : "expand-more"} size={20} color="#94a3b8" />
                    </Pressable>

                    {showDrawerLanguageMenu ? (
                      <View style={{ borderTopWidth: 1, borderColor: "rgba(0,0,0,0.06)" }}>
                        {[
                          { code: "en", label: t("language.english") },
                          { code: "pa", label: t("language.punjabi") },
                          { code: "hi", label: t("language.hindi") }
                        ].map((opt) => (
                          <Pressable
                            key={opt.code}
                            onPress={() => {
                              setLanguage(opt.code as any);
                              setShowDrawerLanguageMenu(false);
                              setShowDrawerProfileMenu(false);
                              setShowDrawer(false);
                            }}
                            style={{
                              paddingHorizontal: 14,
                              paddingVertical: 10,
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                              backgroundColor: language === opt.code ? "rgba(55, 155, 47, 0.12)" : "transparent"
                            }}
                          >
                            <Text style={{ fontSize: 13, fontWeight: "600", color: "#0f172a" }}>{opt.label}</Text>
                            {language === opt.code ? <MaterialIcons name="check" size={18} color="rgb(55, 155, 47)" /> : null}
                          </Pressable>
                        ))}
                      </View>
                    ) : null}

                    <Pressable
                      onPress={() => {
                        setShowDrawerLanguageMenu(false);
                        setShowDrawerProfileMenu(false);
                        setShowDrawer(false);
                        setRoute("changePassword");
                      }}
                      style={{ paddingHorizontal: 14, paddingVertical: 12, flexDirection: "row", alignItems: "center", gap: 10, borderTopWidth: 1, borderColor: "rgba(0,0,0,0.06)" }}
                    >
                      <MaterialIcons name="lock" size={18} color="#0f172a" />
                      <Text style={{ fontSize: 14, fontWeight: "700", color: "#0f172a" }}>{t("drawer.changePassword")}</Text>
                    </Pressable>

                    <Pressable
                      onPress={() => {
                        setShowDrawerLanguageMenu(false);
                        setShowDrawerProfileMenu(false);
                        setShowDrawer(false);
                        setRoute("home");
                      }}
                      style={{ paddingHorizontal: 14, paddingVertical: 12, flexDirection: "row", alignItems: "center", gap: 10, borderTopWidth: 1, borderColor: "rgba(0,0,0,0.06)" }}
                    >
                      <MaterialIcons name="logout" size={18} color="#ef4444" />
                      <Text style={{ fontSize: 14, fontWeight: "700", color: "#ef4444" }}>{t("drawer.logout")}</Text>
                    </Pressable>
                  </View>
                ) : null}
              </View>

              <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 12 }}>
                <MenuItem
                  icon="home"
                  label={t("drawer.home")}
                  active={route === "dashboard"}
                  onPress={() => {
                    setShowDrawer(false);
                    setRoute("dashboard");
                  }}
                />

                <MenuItem
                  icon="work"
                  label={t("drawer.myProjects")}
                  active={route === "myProjects"}
                  onPress={() => {
                    setShowDrawer(false);
                    setRoute("myProjects");
                  }}
                />
                <MenuItem
                  icon="description"
                  label={t("drawer.myApplications")}
                  badge="3"
                  active={route === "myApplications"}
                  onPress={() => {
                    setShowDrawer(false);
                    setRoute("myApplications");
                  }}
                />
                <MenuItem icon="monetization-on" label={t("drawer.fiscalIncentives")} onPress={() => setShowDrawer(false)} />
                <MenuItem icon="assignment" label={t("drawer.fiscalRegistrations")} onPress={() => setShowDrawer(false)} />
                <MenuItem icon="lock" label={t("drawer.eVault")} onPress={() => setShowDrawer(false)} />
                <MenuItem icon="help" label={t("drawer.knowYourApprovals")} onPress={() => setShowDrawer(false)} />
              </ScrollView>

              <View
                style={{
                  padding: 16,
                  borderTopWidth: 1,
                  borderColor: "rgba(0,0,0,0.06)"
                }}
              >
                <MenuItem icon="settings" label={t("drawer.settings")} muted onPress={() => setShowDrawer(false)} />
              </View>
            </View>
          </BlurView>
        </>
      </Modal>
    </View>
  );
}
