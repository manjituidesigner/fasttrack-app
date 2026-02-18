import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, Pressable, StyleProp, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useState } from "react";
import { useI18n } from "../i18n/I18nProvider";
import { useTheme } from "../theme/useTheme";

type Props = {
  onBack?: () => void;
  onMenuPress?: () => void;
};

type StatusType = "verified" | "filing" | "pending";

function getStatusColor(statusType: StatusType) {
  if (statusType === "verified") return "#10b981";
  if (statusType === "filing") return "#f59e0b";
  return "#3b82f6";
}

export function MyProjectsScreen({ onBack, onMenuPress }: Props) {
  const theme = useTheme();
  const { t } = useI18n();
  const [rtbaExpanded, setRtbaExpanded] = useState(true);
  const [cafExpanded, setCafExpanded] = useState(true);
  const [scafExpanded, setScafExpanded] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const STATUS_BAR_HEIGHT = Constants.statusBarHeight ?? 0;

  return (
    <>
      <StatusBar style="dark" />

      {/* ===== Page Background ===== */}
      <LinearGradient colors={theme.colors.background.gradient} style={{ flex: 1 }}>
        {/* ===== Header ===== */}
        <View
          style={{
            height: 64 + STATUS_BAR_HEIGHT,
            paddingTop: STATUS_BAR_HEIGHT,
            paddingHorizontal: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#ffffff",
            borderBottomWidth: 1,
            borderColor: "#e2e8f0",
            position: "relative",
            zIndex: 50,
            elevation: 50
          }}
        >
          <Pressable
            onPress={onBack}
            hitSlop={10}
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <MaterialIcons name="arrow-back" size={24} color="#1e293b" />
          </Pressable>

          <Text style={{ fontSize: 18, fontWeight: "700", color: "#1d4ed8" }}>{t("myProjects.title")}</Text>

          <Pressable
            onPress={onMenuPress}
            hitSlop={10}
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <MaterialIcons name="menu" size={24} color="#1e293b" />
          </Pressable>
        </View>

        {openMenuId ? (
          <Pressable
            onPress={() => setOpenMenuId(null)}
            style={{ position: "absolute", inset: 0, backgroundColor: "transparent", zIndex: 900, elevation: 900 }}
          />
        ) : null}

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ zIndex: 1 }}
          contentContainerStyle={{ paddingTop: 12, paddingBottom: 140 }}
        >
          {/* ===== RTBA ===== */}
          <SectionHeader
            title={t("myProjects.section.rtbaCaf")}
            expanded={rtbaExpanded}
            onPress={() => setRtbaExpanded((v) => !v)}
          />

          {rtbaExpanded ? (
            <View style={[cardContainer, { marginBottom: 12 }]}>
              {[
                {
                  pin: "251134461",
                  date: "20-Nov-2025",
                  name: "Test Staging Entity Project",
                  sector: "IT & ITES",
                  district: "S.A.S Nagar",
                  applicant: "Mr Rahul Garg",
                  mobile: "9898989899",
                  statusType: "verified" as const
                },
                {
                  pin: "251188816",
                  date: "03-Nov-2025",
                  name: "Test BE Project Name 31125",
                  sector: "Logistics",
                  district: "Faridkot",
                  applicant: "Mr Jaiveer Singh",
                  mobile: "8787878788",
                  statusType: "verified" as const
                },
                {
                  pin: "251088067",
                  date: "31-Oct-2025",
                  name: "Test name",
                  sector: "Aerospace, MRO & Defense",
                  district: "Barnala",
                  applicant: "Mr Rahul Garg",
                  mobile: "1111111111",
                  statusType: "verified" as const
                },
                {
                  pin: "251020376",
                  date: "30-Oct-2025",
                  name: "test",
                  sector: "Agri, Food Processing and Beverages",
                  district: "Barnala",
                  applicant: "Mr arnav kumar",
                  mobile: "7894654564",
                  statusType: "verified" as const
                },
                {
                  pin: "251031695",
                  date: "30-Oct-2025",
                  name: "test",
                  sector: "Aerospace, MRO & Defense",
                  district: "Barnala",
                  applicant: "Mr Test test",
                  mobile: "7894654152",
                  statusType: "verified" as const
                }
              ].map((item, i) => (
                <ProjectCard
                  key={i}
                  pin={item.pin}
                  date={item.date}
                  name={item.name}
                  sector={item.sector}
                  district={item.district}
                  applicant={item.applicant}
                  mobile={item.mobile}
                  statusType={item.statusType}
                  statusLabel={t("myProjects.status.verified")}
                  color={getStatusColor(item.statusType)}
                  isMenuOpen={openMenuId === item.pin}
                  onToggleMenu={() => setOpenMenuId((v) => (v === item.pin ? null : item.pin))}
                  onCloseMenu={() => setOpenMenuId(null)}
                />
              ))}
            </View>
          ) : null}

          {/* ===== CAF ===== */}
          <SectionHeader
            title={t("myProjects.section.caf")}
            expanded={cafExpanded}
            onPress={() => setCafExpanded((v) => !v)}
          />

          {cafExpanded ? (
            <View style={[cardContainer, { marginBottom: 12 }]}>
              {[
                {
                  pin: "251161308",
                  date: "",
                  applicant: "Mr Test Qwerty",
                  mobile: "2222222222",
                  name: "Barnala",
                  sector: "Other Service Projects",
                  district: "Barnala",
                  statusType: "filing" as const
                },
                {
                  pin: "",
                  date: "",
                  applicant: "Mr Ajay Kumar",
                  mobile: "8888888888",
                  name: "ASD Company1",
                  sector: "Other Service Projects",
                  district: "Barnala",
                  statusType: "filing" as const
                },
                {
                  pin: "250726621",
                  date: "26-Jul-2025",
                  applicant: "Mr Vinod Kumar",
                  mobile: "7894561235",
                  name: "BKJ Company/Paper",
                  sector: "Manufacturing",
                  district: "S.A.S Nagar",
                  statusType: "verified" as const
                },
                {
                  pin: "250796279",
                  date: "23-Jul-2025",
                  applicant: "",
                  mobile: "2222222222",
                  name: "dsdsad",
                  sector: "Other Service Projects",
                  district: "S.A.S Nagar",
                  statusType: "verified" as const
                },
                {
                  pin: "250742745",
                  date: "18-Jul-2025",
                  applicant: "Mr Ajay Kumar",
                  mobile: "7894561235",
                  name: "BKM Company",
                  sector: "Manufacturing",
                  district: "S.A.S Nagar",
                  statusType: "verified" as const
                }
              ].map((item, i) => (
                <ProjectCard
                  key={i}
                  pin={item.pin}
                  date={item.date}
                  name={item.name}
                  sector={item.sector}
                  district={item.district}
                  applicant={item.applicant}
                  mobile={item.mobile}
                  statusType={item.statusType}
                  statusLabel={
                    item.statusType === "verified" ? t("myProjects.status.verified") : t("myProjects.status.filingInProcess")
                  }
                  color={getStatusColor(item.statusType)}
                  isMenuOpen={openMenuId === item.pin}
                  onToggleMenu={() => setOpenMenuId((v) => (v === item.pin ? null : item.pin))}
                  onCloseMenu={() => setOpenMenuId(null)}
                />
              ))}
            </View>
          ) : null}

          {/* ===== S-CAF ===== */}
          <SectionHeader
            title={t("myProjects.section.scaf")}
            expanded={scafExpanded}
            onPress={() => setScafExpanded((v) => !v)}
          />

          {scafExpanded ? (
            <View style={[cardContainer, { marginBottom: 12 }]}>
              {[
                {
                  pin: "251153185",
                  date: "17-Nov-2025",
                  applicant: "Mr sahil sharma",
                  mobile: "8278776517",
                  name: "twet",
                  sector: "Other Service Projects",
                  district: "Barnala",
                  statusType: "verified" as const
                },
                {
                  pin: "251143741",
                  date: "03-Nov-2025",
                  applicant: "Mr Rahul Garg",
                  mobile: "9898987879",
                  name: "test test",
                  sector: "Other Service Projects",
                  district: "Amritsar",
                  statusType: "verified" as const
                },
                {
                  pin: "251035380",
                  date: "17-Oct-2025",
                  applicant: "Mr Suuny Kumar",
                  mobile: "9875461325",
                  name: "COmpany name",
                  sector: "Other Service Projects",
                  district: "Amritsar",
                  statusType: "verified" as const
                },
                {
                  pin: "250828148",
                  date: "02-Aug-2025",
                  applicant: "Mr SUNNY KUMAR",
                  mobile: "7894561230",
                  name: "JKB Company",
                  sector: "Other Service Projects",
                  district: "Patiala",
                  statusType: "verified" as const
                },
                {
                  pin: "250720617",
                  date: "18-Jul-2025",
                  applicant: "Mr Ajay Kumar",
                  mobile: "7894561235",
                  name: "BKM Company",
                  sector: "Other Service Projects",
                  district: "S.A.S Nagar",
                  statusType: "verified" as const
                }
              ].map((item, i) => (
                <ProjectCard
                  key={i}
                  pin={item.pin}
                  date={item.date}
                  name={item.name}
                  sector={item.sector}
                  district={item.district}
                  applicant={item.applicant}
                  mobile={item.mobile}
                  statusType={item.statusType}
                  statusLabel={t("myProjects.status.verified")}
                  color={getStatusColor(item.statusType)}
                  isMenuOpen={openMenuId === item.pin}
                  onToggleMenu={() => setOpenMenuId((v) => (v === item.pin ? null : item.pin))}
                  onCloseMenu={() => setOpenMenuId(null)}
                />
              ))}
            </View>
          ) : null}
        </ScrollView>
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
  containerStyle?: StyleProp<ViewStyle>;
};

function SectionHeader({ title, faded, expanded, onPress, containerStyle }: SectionHeaderProps) {
  const iconName = expanded ? "keyboard-arrow-up" : "keyboard-arrow-down";

  return (
    <Pressable
      onPress={onPress}
      style={[
        {
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
        },
        containerStyle
      ]}
    >
      <Text style={{ fontSize: 14, fontWeight: "600" }}>{title}</Text>
      <MaterialIcons name={iconName} size={22} color="#64748b" />
    </Pressable>
  );
}

type ProjectCardProps = {
  pin: string;
  date?: string;
  name: string;
  statusType: StatusType;
  statusLabel: string;
  color: string;
  applicant: string;
  mobile: string;
  sector: string;
  district: string;
  isMenuOpen?: boolean;
  onToggleMenu?: () => void;
  onCloseMenu?: () => void;
};

function ProjectCard({ pin, date, name, statusLabel, color, applicant, mobile, sector, district, isMenuOpen, onToggleMenu, onCloseMenu }: ProjectCardProps) {
  const { t } = useI18n();

  const sectorLabel =
    sector === "Manufacturing"
      ? t("myProjects.sector.manufacturing")
      : sector === "Other Service Projects"
        ? t("myProjects.sector.otherServiceProjects" as any)
        : sector;

  return (
    <View
      style={{
        backgroundColor: "#ffffff",
        margin: 12,
        padding: 14,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#e2e8f0",
        shadowOpacity: 0.08,
        position: "relative",
        overflow: "visible",
        zIndex: isMenuOpen ? 1000 : 1,
        elevation: isMenuOpen ? 1000 : 1
      }}
    >
      {isMenuOpen ? (
        <Pressable
          onPress={onCloseMenu}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 98
          }}
        />
      ) : null}

      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <Text style={{ fontSize: 11, color: "#94a3b8", fontWeight: "700" }}>{t("myProjects.pin")}:</Text>
          <Text style={{ fontSize: 11, color: "#2563eb", fontWeight: "700" }}>{pin}</Text>
          {date ? <Text style={{ fontSize: 11, color: "#94a3b8", fontWeight: "700" }}>|</Text> : null}
          {date ? <Text style={{ fontSize: 11, color: "#0f172a", fontWeight: "700" }}>{date}</Text> : null}
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <View
            style={{
              backgroundColor: color + "1F",
              paddingHorizontal: 10,
              paddingVertical: 6,
              borderRadius: 999
            }}
          >
            <Text style={{ fontSize: 11, fontWeight: "700", color }}>{statusLabel}</Text>
          </View>

          <Pressable
            onPress={(e) => {
              e.stopPropagation();
              onToggleMenu?.();
            }}
            hitSlop={10}
            style={{
              width: 32,
              height: 32,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <MaterialIcons name="more-vert" size={18} color="#64748b" />
          </Pressable>
        </View>
      </View>

      <Text style={{ marginTop: 6, fontSize: 17, fontWeight: "700", color: "#0f172a" }}>{name}</Text>

      <View style={{ marginTop: 10, gap: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <Text style={{ fontSize: 11, color: "#94a3b8", fontWeight: "700" }}>{t("myProjects.field.sector")}</Text>
          <Text style={{ fontSize: 12, color: "#0f172a", fontWeight: "700", flexShrink: 1, textAlign: "right" }}>{sectorLabel}</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <Text style={{ fontSize: 11, color: "#94a3b8", fontWeight: "700" }}>{t("myProjects.field.applicant")}</Text>
          <Text style={{ fontSize: 12, color: "#0f172a", fontWeight: "700", flexShrink: 1, textAlign: "right" }}>{applicant}</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <Text style={{ fontSize: 11, color: "#94a3b8", fontWeight: "700" }}>{t("myProjects.field.mobile")}</Text>
          <Text style={{ fontSize: 12, color: "#0f172a", fontWeight: "700", flexShrink: 1, textAlign: "right" }}>{mobile}</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <Text style={{ fontSize: 11, color: "#94a3b8", fontWeight: "700" }}>{t("myProjects.field.district")}</Text>
          <Text style={{ fontSize: 12, color: "#0f172a", fontWeight: "700", flexShrink: 1, textAlign: "right" }}>{district}</Text>
        </View>
      </View>

      {isMenuOpen ? (
        <View
          style={{
            position: "absolute",
            top: 48,
            right: 14,
            width: 220,
            borderRadius: 12,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: "#e2e8f0",
            backgroundColor: "#ffffff",
            zIndex: 99,
            elevation: 99
          }}
        >
          {[
            { icon: "assignment", label: "Know Your Approvals" },
            { icon: "add-circle-outline", label: "Add Clearence" },
            { icon: "person-outline", label: "Update Applicant" },
            { icon: "receipt-long", label: "Update GST" },
            { icon: "groups", label: "Update Partners" },
            { icon: "badge", label: "Update Company Pan Details" },
            { icon: "edit-note", label: "CAF Amandment" },
            { icon: "history", label: "Application Log" }
          ].map((a, i, arr) => (
            <Pressable
              key={a.label}
              onPress={onCloseMenu}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 12,
                paddingVertical: 10,
                borderBottomWidth: i === arr.length - 1 ? 0 : 1,
                borderColor: "#e2e8f0"
              }}
            >
              <MaterialIcons name={a.icon as any} size={20} color="#1d4ed8" />
              <Text style={{ fontSize: 12, fontWeight: "700", color: "#0f172a" }}>{a.label}</Text>
            </Pressable>
          ))}
        </View>
      ) : null}
    </View>
  );
}

/* ===== Styles ===== */
const cardContainer = {
  backgroundColor: "#ffffff",
  marginHorizontal: 16,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: "#e2e8f0",
  overflow: "visible"
} as const;

const cardHeader = {
  marginHorizontal: 0,
  marginBottom: 0,
  borderRadius: 0,
  borderWidth: 0,
  borderColor: "transparent",
  backgroundColor: "#f1f5f9"
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

