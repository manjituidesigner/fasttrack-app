import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useI18n } from "../i18n/I18nProvider";

type Props = {
  onMenuPress?: () => void;
  onChatPress?: () => void;
  onAddPress?: () => void;
};

export function MyProjectsScreen({ onMenuPress, onChatPress, onAddPress }: Props) {
  const { t } = useI18n();
  const [rtbaExpanded, setRtbaExpanded] = useState(true);
  const [cafExpanded, setCafExpanded] = useState(true);

  return (
    <>
      <StatusBar style="dark" />

      {/* ===== Page Background ===== */}
      <LinearGradient colors={["#f8fafc", "#eef2ff"]} style={{ flex: 1 }}>
        {/* ===== Header ===== */}
        <View
          style={{
            height: 64,
            paddingHorizontal: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#ffffff",
            borderBottomWidth: 1,
            borderColor: "#e2e8f0"
          }}
        >
          <Pressable onPress={onMenuPress} style={{ padding: 8 }}>
            <MaterialIcons name="menu" size={24} color="#1e293b" />
          </Pressable>

          <Text style={{ fontSize: 18, fontWeight: "800", color: "#1d4ed8" }}>{t("myProjects.title")}</Text>

          <View>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKDdNesCdkuKndJYHsr4X-VLFRXXIQorbVL09p3jjzHE9dV0NoPt-vufss8YxyxwggLaRq9Vn1WGsuqH0Cztp78j0US6ShyG61lOH1ZngoMABU43LmhEwU694nspmWJnCTjX7TPj8ArDxpabPBgnFMzJ0_fmzjkYH2JsAwilNqf0sqjGCWwM-FIZen85IzL5if21e9g-4tJFLRnbOA5wHve4WoJ-44LYGulvHggO1wEgkr3e9U5YBSZaoHr7Lopj9DE_BdBkpvv498"
              }}
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                borderWidth: 1,
                borderColor: "#e2e8f0"
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: "#22c55e",
                borderWidth: 2,
                borderColor: "#fff"
              }}
            />
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 180 }}>
          {/* ===== Quick Action Grid ===== */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 16
            }}
          >
            {[
              {
                icon: "add-business",
                title: t("myProjects.quickAction.addProjectWithCaf"),
                bg: "#dbeafe",
                color: "#1d4ed8"
              },
              {
                icon: "post-add",
                title: t("myProjects.quickAction.applyNewServices"),
                bg: "#d1fae5",
                color: "#059669"
              },
              {
                icon: "verified-user",
                title: t("myProjects.quickAction.knowYourApproval"),
                bg: "#ffedd5",
                color: "#d97706"
              }
            ].map((item, i) => (
              <Pressable
                key={i}
                style={{
                  width: "30%",
                  height: 112,
                  borderRadius: 14,
                  backgroundColor: item.bg,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 10
                }}
              >
                <View
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    backgroundColor: "#ffffffcc",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 6
                  }}
                >
                  <MaterialIcons name={item.icon as any} size={22} color={item.color} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "800",
                    textAlign: "center",
                    color: "#1e293b"
                  }}
                >
                  {item.title}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* ===== RTBA ===== */}
          <SectionHeader title={t("myProjects.section.rtbaCaf")} expanded={rtbaExpanded} onPress={() => setRtbaExpanded((v) => !v)} />

          {rtbaExpanded ? (
            <>
              {/* ===== CAF SECTION ===== */}
              <View style={cardContainer}>
                <Pressable onPress={() => setCafExpanded((v) => !v)} style={cardHeader}>
                  <Text style={{ fontWeight: "800" }}>{t("myProjects.section.caf")}</Text>
                  <MaterialIcons name={cafExpanded ? "expand-less" : "expand-more"} size={22} color="#64748b" />
                </Pressable>

                {cafExpanded
                  ? [
                      {
                        pin: "250535096",
                        name: "K A Demo New",
                        status: t("myProjects.status.pendingVerification"),
                        color: "#3b82f6",
                        applicant: "Mr Sunny Kumar",
                        date: "01-May-2025",
                        sector: "Manufacturing",
                        district: "S.A.S Nagar"
                      },
                      {
                        pin: "250535098",
                        name: "Bond & Associates",
                        status: t("myProjects.status.filingInProcess"),
                        color: "#f59e0b",
                        applicant: "Mr Ankit Kumar",
                        date: "01-May-2025",
                        sector: "Manufacturing",
                        district: "S.A.S Nagar"
                      },
                      {
                        pin: "150535024",
                        name: "New Demo Industries",
                        status: t("myProjects.status.accepted"),
                        color: "#10b981",
                        applicant: "Mr Vikas Sharma",
                        date: "01-May-2025",
                        sector: "Other Service",
                        district: "S.A.S Nagar"
                      }
                    ].map((item, i) => <ProjectCard key={i} {...item} />)
                  : null}
              </View>

              {/* ===== S-CAF ===== */}
              <SectionHeader title={t("myProjects.section.scaf")} faded expanded={false} />
            </>
          ) : null}
        </ScrollView>

        {/* ===== Floating Buttons ===== */}
        <View style={{ position: "absolute", right: 16, bottom: 90 }}>
          <Pressable onPress={onChatPress} style={fab}>
            <MaterialIcons name="smart-toy" size={26} color="white" />
          </Pressable>

          <Pressable onPress={onAddPress} style={[fab, { marginTop: 12, backgroundColor: "#1d4ed8" }]}>
            <MaterialIcons name="add" size={28} color="white" />
          </Pressable>
        </View>

        {/* ===== Bottom Navigation ===== */}
        <View style={bottomBar}>
          {[
            { icon: "dashboard", label: t("myProjects.bottomNav.projects"), active: true },
            { icon: "business-center", label: t("myProjects.bottomNav.services") },
            { icon: "payments", label: t("myProjects.bottomNav.payments") },
            { icon: "person", label: t("myProjects.bottomNav.profile") }
          ].map((item, i) => (
            <View key={i} style={bottomItem}>
              <MaterialIcons name={item.icon as any} size={22} color={item.active ? "#1d4ed8" : "#64748b"} />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "600",
                  color: item.active ? "#1d4ed8" : "#64748b"
                }}
              >
                {item.label}
              </Text>
            </View>
          ))}
        </View>
      </LinearGradient>
    </>
  );
}

/* ===== Reusable Blocks ===== */

type SectionHeaderProps = {
  title: string;
  faded?: boolean;
  expanded?: boolean;
  onPress?: () => void;
};

function SectionHeader({ title, faded, expanded, onPress }: SectionHeaderProps) {
  const iconName = expanded ? "expand-less" : "expand-more";

  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: "#ffffff",
        marginHorizontal: 16,
        marginBottom: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#e2e8f0",
        padding: 16,
        opacity: faded ? 0.8 : 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Text style={{ fontSize: 14, fontWeight: "600" }}>{title}</Text>
      <MaterialIcons name={iconName} size={22} color="#64748b" />
    </Pressable>
  );
}

type ProjectCardProps = {
  pin: string;
  name: string;
  status: string;
  color: string;
  applicant: string;
  date: string;
  sector: string;
  district: string;
};

function ProjectCard({ pin, name, status, color, applicant, date, sector, district }: ProjectCardProps) {
  const { t } = useI18n();

  return (
    <View
      style={{
        backgroundColor: "#ffffff",
        margin: 12,
        padding: 14,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#e2e8f0",
        shadowOpacity: 0.08
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ fontSize: 11, color: "#94a3b8", fontWeight: "700" }}>{t("myProjects.pin")}: {pin}</Text>

        <View
          style={{
            backgroundColor: color + "1F",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 999
          }}
        >
          <Text style={{ fontSize: 11, fontWeight: "800", color }}>{status}</Text>
        </View>
      </View>

      <Text style={{ marginTop: 6, fontSize: 17, fontWeight: "900", color: "#0f172a" }}>{name}</Text>

      <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", gap: 12 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 10, color: "#94a3b8", fontWeight: "800" }}>{t("myProjects.field.applicant")}</Text>
          <Text style={{ fontSize: 12, color: "#334155", fontWeight: "700", marginTop: 2 }}>{applicant}</Text>

          <Text style={{ fontSize: 10, color: "#94a3b8", fontWeight: "800", marginTop: 10 }}>{t("myProjects.field.sector")}</Text>
          <Text style={{ fontSize: 12, color: "#334155", fontWeight: "700", marginTop: 2 }}>{sector}</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 10, color: "#94a3b8", fontWeight: "800" }}>{t("myProjects.field.date")}</Text>
          <Text style={{ fontSize: 12, color: "#334155", fontWeight: "700", marginTop: 2 }}>{date}</Text>

          <Text style={{ fontSize: 10, color: "#94a3b8", fontWeight: "800", marginTop: 10 }}>{t("myProjects.field.district")}</Text>
          <Text style={{ fontSize: 12, color: "#334155", fontWeight: "700", marginTop: 2 }}>{district}</Text>
        </View>
      </View>

      <View style={{ height: 1, backgroundColor: "#e2e8f0", marginTop: 12 }} />

      <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginTop: 10, gap: 12 }}>
        <MaterialIcons name="chat-bubble-outline" size={20} color="#94a3b8" />
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            backgroundColor: "#1d4ed81A",
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 10
          }}
        >
          <View
            style={{
              width: 18,
              height: 18,
              borderRadius: 9,
              backgroundColor: "#1d4ed8",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <MaterialIcons name="add" size={14} color="white" />
          </View>
          <Text style={{ fontWeight: "800", color: "#1d4ed8" }}>{t("myProjects.action")}</Text>
        </Pressable>
      </View>
    </View>
  );
}

/* ===== Styles ===== */
const cardContainer = {
  backgroundColor: "#ffffff",
  marginHorizontal: 16,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: "#e2e8f0"
} as const;

const cardHeader = {
  padding: 16,
  backgroundColor: "#f1f5f9",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center"
} as const;

const fab = {
  width: 56,
  height: 56,
  borderRadius: 28,
  backgroundColor: "#2563eb",
  alignItems: "center",
  justifyContent: "center",
  shadowOpacity: 0.3
} as const;

const bottomBar = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: 64,
  backgroundColor: "#ffffff",
  borderTopWidth: 1,
  borderColor: "#e2e8f0",
  flexDirection: "row"
} as const;

const bottomItem = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center"
} as const;
