import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useTheme } from "../theme/useTheme";
import { useI18n } from "../i18n/I18nProvider";

type Props = {
  onMenuPress?: () => void;
  onFillCaf?: () => void;
};

export function MyApplicationsScreen({ onMenuPress, onFillCaf }: Props) {
  const theme = useTheme();
  const { language, setLanguage, t } = useI18n();
  const [showMenu, setShowMenu] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [rtbaExpanded, setRtbaExpanded] = useState(true);
  const [cafExpanded, setCafExpanded] = useState(true);
  const [scafExpanded, setScafExpanded] = useState(true);
  const [showFabMenu, setShowFabMenu] = useState(false);

  const closeMenu = () => {
    setShowLanguageMenu(false);
    setShowMenu(false);
  };

  const closeFabMenu = () => {
    setShowFabMenu(false);
  };

  return (
    <>
      <StatusBar style="dark" />

      {/* ===== Background ===== */}
      <LinearGradient colors={theme.colors.background.gradient} style={{ flex: 1 }}>
        {/* ===== Header ===== */}
        <View style={styles.header}>
          <Pressable style={styles.iconBtn} onPress={onMenuPress}>
            <MaterialIcons name="menu" size={24} color="#6b7280" />
          </Pressable>

          <Text style={styles.headerTitle}>{t("myApplications.title")}</Text>

          <View style={{ position: "relative" }}>
            <Pressable
              onPress={() => {
                setShowMenu((v) => !v);
                setShowLanguageMenu(false);
              }}
              hitSlop={10}
              style={{ borderRadius: 999, overflow: "hidden" }}
            >
              <Image
                source={{
                  uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUMTasDMmgMrOEaBIWgw11dajvQiEBYCCQOYePI-aaS9Bk8T77Q4LhY5nX0_LVmTVF5BxJiAsCW0IoWRzBp4py2f1JPKUmuloz6ghOJ8cD3pi8kb4MU7CfN454j6X_J9hBAvHis5RBJQyDoUzuuHoKAAf3w8T2uDrXCNJ0udF-E3dn0ZkO01AhYegU6V8hyefsrlgFCkfYFe4g8_VaqgOSc19mhCZ-W6RAZ1_HegZP4cksmh1QlmBTyOH4xJjsUINk8D9-7jq26zT9"
                }}
                style={styles.avatar}
              />
              <View style={styles.onlineDot} />
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
                    top: 44,
                    right: 0,
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
                    <Text style={{ fontSize: 14, fontWeight: "700", color: "#0f172a" }}>{t("menu.language")}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                      <Text style={{ fontSize: 12, fontWeight: "700", color: "#64748b" }}>
                        {language === "en" ? "EN" : language === "hi" ? "HI" : "PA"}
                      </Text>
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
                          <Text style={{ fontSize: 14, fontWeight: "600", color: "#0f172a" }}>
                            {code === "en" ? t("language.english") : code === "pa" ? t("language.punjabi") : t("language.hindi")}
                          </Text>
                          {language === code ? <MaterialIcons name="check" size={18} color="rgb(55, 155, 47)" /> : null}
                        </Pressable>
                      ))}
                    </View>
                  ) : null}

                  <View style={{ height: 1, backgroundColor: "rgba(203,213,225,0.7)" }} />

                  <Pressable
                    onPress={closeMenu}
                    style={{ paddingHorizontal: 14, paddingVertical: 12, flexDirection: "row", alignItems: "center", gap: 10 }}
                  >
                    <MaterialIcons name="person" size={18} color="#0f172a" />
                    <Text style={{ fontSize: 14, fontWeight: "700", color: "#0f172a" }}>{t("myApplications.menu.profile")}</Text>
                  </Pressable>

                  <Pressable
                    onPress={closeMenu}
                    style={{ paddingHorizontal: 14, paddingVertical: 12, flexDirection: "row", alignItems: "center", gap: 10 }}
                  >
                    <MaterialIcons name="logout" size={18} color="#e11d48" />
                    <Text style={{ fontSize: 14, fontWeight: "700", color: "#e11d48" }}>{t("drawer.logout")}</Text>
                  </Pressable>
                </View>
              </>
            ) : null}
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{ zIndex: 1 }} contentContainerStyle={{ paddingBottom: 160 }}>
          {/* ===== Top Scrollable Tabs ===== */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16 }}>
            <Tab active label={t("myApplications.tab.applyNew")} icon="add-circle" bg="#26C6DA" />
            <Tab label={t("myApplications.tab.applied")} icon="description" color="#7986CB" />
            <Tab label={t("myApplications.tab.pending")} icon="pending" color="#FFB74D" />
            <Tab label={t("myApplications.tab.issued")} icon="check-circle" color="#AB47BC" />
            <Tab label={t("myApplications.tab.rejected")} icon="cancel" color="#EF5350" />
            <Tab label={t("myApplications.tab.withdrawn")} icon="undo" color="#66BB6A" />
          </ScrollView>

          {/* ===== Info Card ===== */}
          <View style={styles.infoCard}>
            <MaterialIcons name="info-outline" size={20} color="#3b82f6" />
            <Text style={styles.infoText}>
              {t("myApplications.info.line1")} {" "}
              <Text style={{ fontWeight: "700" }}>{t("myApplications.info.serviceCaf")}</Text> {t("myApplications.info.line1b")}{"\n"}
              <Text style={styles.link}>{t("myApplications.info.clickApply")}</Text>{"\n"}
              {t("myApplications.info.line2")} <Text style={styles.link}>{t("myApplications.info.clickHere")}</Text>
            </Text>
          </View>

          {/* ===== Sections ===== */}
          <Section
            title={t("myApplications.section.rtba")}
            badge="RTBA-CAF"
            badgeColor="#2563eb"
            expanded={rtbaExpanded}
            onToggle={() => setRtbaExpanded((v) => !v)}
            items={[
              {
                name: "P S INFRACORP PRIVATE LIMITED",
                date: "09-Dec-2025",
                person: "Mr. Sunny Kumar Birdi",
                phone: "+91 98765-43210",
                district: "Mohali, S.A.S Nagar",
                sector: t("myProjects.sector.manufacturing"),
                pin: "251247960"
              },
              {
                name: "VKJ Company 1",
                date: "11-Aug-2025",
                person: "Mr. Vinod Kumar",
                phone: "+91 98765-43211",
                district: "Mohali, S.A.S Nagar",
                sector: t("myProjects.sector.manufacturing"),
                pin: "250846284"
              }
            ]}
          />

          <Section
            title={t("myApplications.section.caf")}
            badge="CAF"
            badgeColor="#7c3aed"
            expanded={cafExpanded}
            onToggle={() => setCafExpanded((v) => !v)}
            items={[
              {
                name: "ASD Company 2",
                date: "03-Dec-2025",
                person: "Mr. Ajay Kumar",
                phone: "+91 98765-43212",
                district: "Mohali, S.A.S Nagar",
                sector: t("myProjects.sector.manufacturing"),
                pin: "250001234"
              },
              {
                name: "AJK Company 2",
                date: "31-Oct-2025",
                person: "Mr. Manjit Singh",
                phone: "+91 98765-43213",
                district: "Mohali",
                sector: t("myProjects.sector.otherService"),
                pin: "250005678"
              }
            ]}
          />

          <Section
            title={t("myApplications.section.scaf")}
            badge="S-CAF"
            badgeColor="#d97706"
            expanded={scafExpanded}
            onToggle={() => setScafExpanded((v) => !v)}
            items={[
              {
                name: "Test Project",
                date: "16-Dec-2025",
                person: "Mr. Sanjeev Chauhan",
                phone: "+91 98765-43214",
                district: "USA, Amritsar",
                sector: t("myProjects.sector.otherService"),
                pin: "250998877"
              },
              {
                name: "AS Consultant",
                date: "09-Dec-2025",
                person: "Mr. Sanjeev Kumar",
                phone: "+91 98765-43215",
                district: "Mohali",
                sector: t("myProjects.sector.otherService"),
                pin: "250112233"
              }
            ]}
          />
        </ScrollView>

        {showFabMenu ? (
          <>
            <Pressable
              onPress={closeFabMenu}
              style={{ position: "absolute", inset: 0, backgroundColor: "transparent", zIndex: 20 }}
            />
            <View
              style={{
                position: "absolute",
                right: 20,
                bottom: 110,
                width: 200,
                borderRadius: 14,
                overflow: "hidden",
                backgroundColor: "rgba(255,255,255,0.96)",
                borderWidth: 1,
                borderColor: "rgba(203,213,225,0.9)",
                zIndex: 30,
                elevation: 30
              }}
            >
              <Pressable
                onPress={() => {
                  closeFabMenu();
                  onFillCaf?.();
                }}
                style={{ paddingHorizontal: 14, paddingVertical: 12, flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <MaterialIcons name="description" size={18} color="#2563eb" />
                <Text style={{ fontSize: 14, fontWeight: "800", color: "#0f172a" }}>{t("myApplications.fab.fillCaf")}</Text>
              </Pressable>
            </View>
          </>
        ) : null}

        <Pressable
          onPress={() => setShowFabMenu((v) => !v)}
          style={styles.plusFab}
          hitSlop={10}
        >
          <MaterialIcons name={showFabMenu ? "close" : "add"} size={26} color="white" />
        </Pressable>
      </LinearGradient>
    </>
  );
}

/* ===== Components ===== */

function Tab({ label, icon, active, bg, color }: any) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 14,
        marginRight: 10,
        backgroundColor: active ? bg : "#ffffff",
        borderLeftWidth: active ? 0 : 4,
        borderColor: color
      }}
    >
      <MaterialIcons name={icon} size={18} color={active ? "#fff" : color} />
      <Text
        style={{
          marginLeft: 6,
          fontSize: 13,
          fontWeight: "700",
          color: active ? "#fff" : "#374151"
        }}
      >
        {label}
      </Text>
    </View>
  );
}

function Section({ title, badge, badgeColor, items, expanded, onToggle }: any) {
  const { t } = useI18n();
  return (
    <View style={styles.section}>
      <Pressable style={styles.sectionHeader} onPress={onToggle}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <MaterialIcons name={expanded ? "expand-less" : "expand-more"} size={22} color="#6b7280" />
      </Pressable>

      {expanded
        ? items.map((item: any, i: number) => (
            <View key={i} style={styles.card}>
              <View style={styles.cardTop}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                  <View
                    style={{
                      backgroundColor: badgeColor + "22",
                      paddingHorizontal: 8,
                      paddingVertical: 2,
                      borderRadius: 999
                    }}
                  >
                    <Text style={{ fontSize: 10, fontWeight: "800", color: badgeColor }}>{badge}</Text>
                  </View>
                  <Text style={styles.muted}>{item.date}</Text>
                </View>
                <MaterialIcons name="visibility" size={20} color="#0D9488" />
              </View>

              <Text style={styles.cardTitle}>{item.name}</Text>

              <Text style={styles.muted}>
                {item.person}, {item.phone}
              </Text>

              <Text style={styles.detail}>
                {t("myApplications.field.district")}: {item.district}
              </Text>
              <Text style={styles.detail}>
                {t("myApplications.field.sector")}: {item.sector}
              </Text>
              <Text style={styles.pin}>
                {t("myApplications.field.pin")}: {item.pin}
              </Text>
            </View>
          ))
        : null}
    </View>
  );
}

/* ===== Styles ===== */

const styles = {
  header: {
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: "#ffffffee",
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 50,
    elevation: 50
  },
  iconBtn: { padding: 8 },
  headerTitle: { fontSize: 18, fontWeight: "800" },
  avatar: { width: 36, height: 36, borderRadius: 18 },
  onlineDot: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#22c55e",
    borderWidth: 2,
    borderColor: "#fff"
  },
  infoCard: {
    margin: 16,
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    flexDirection: "row",
    gap: 10
  },
  infoText: { fontSize: 12, color: "#374151", flex: 1 },
  link: { color: "#2563eb", fontWeight: "700" },
  section: {
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 14,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5e7eb"
  },
  sectionHeader: {
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#e5e7eb"
  },
  sectionTitle: { fontSize: 13, fontWeight: "800", textTransform: "uppercase" },
  card: {
    padding: 14,
    borderBottomWidth: 1,
    borderColor: "#e5e7eb"
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6
  },
  cardTitle: { fontSize: 14, fontWeight: "800" },
  muted: { fontSize: 11, color: "#6b7280" },
  detail: { fontSize: 12, color: "#374151" },
  pin: { fontSize: 12, fontWeight: "800", color: "#2563eb", marginTop: 4 },
  plusFab: {
    position: "absolute",
    bottom: 32,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#2563eb",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 25,
    elevation: 25
  },
  fabWrap: {
    position: "absolute",
    bottom: 24,
    right: 16,
    alignItems: "center",
    gap: 12
  },
  botFab: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb"
  },
  mainFab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#0D9488",
    alignItems: "center",
    justifyContent: "center"
  }
} as const;
