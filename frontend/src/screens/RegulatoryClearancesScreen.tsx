import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../theme/useTheme";

type TabKey = "applyNew" | "applied" | "pending" | "issued" | "rejected";

type TabItem = {
  key: TabKey;
  label: string;
  icon: string;
  count?: number;
  activeBg?: string;
};

type Props = {
  onBack?: () => void;
  onMenuPress?: () => void;
  onAddPress?: () => void;
};

export function RegulatoryClearancesScreen({ onBack, onMenuPress, onAddPress }: Props) {
  const theme = useTheme();
  const STATUS_BAR_HEIGHT = Constants.statusBarHeight ?? 0;

  const [activeTab, setActiveTab] = useState<TabKey>("applyNew");
  const [rtbaExpanded, setRtbaExpanded] = useState(true);
  const [cafExpanded, setCafExpanded] = useState(false);

  const appliedCount = 15;
  const pendingCount = 7;
  const issuedCount = 3;
  const rejectedCount = 2;

  const tabs: TabItem[] = useMemo(
    () => [
      { key: "applyNew", label: "Apply New", icon: "add-circle", activeBg: "#1d4ed8" },
      { key: "applied", label: "Applied", icon: "description", count: appliedCount },
      { key: "pending", label: "Pending", icon: "pending-actions", count: pendingCount },
      { key: "issued", label: "Issued", icon: "verified-user", count: issuedCount },
      { key: "rejected", label: "Rejected", icon: "cancel", count: rejectedCount }
    ],
    [appliedCount, pendingCount, issuedCount, rejectedCount]
  );

  return (
    <>
      <StatusBar style="dark" />

      <LinearGradient colors={theme.colors.background.gradient} style={{ flex: 1 }}>
        <View
          style={{
            height: 64 + STATUS_BAR_HEIGHT,
            paddingTop: STATUS_BAR_HEIGHT,
            paddingHorizontal: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "rgba(255,255,255,0.86)",
            borderBottomWidth: 1,
            borderColor: "rgba(226,232,240,0.9)",
            zIndex: 50,
            elevation: 50
          }}
        >
          <Pressable
            onPress={onBack}
            hitSlop={10}
            style={{ width: 44, height: 44, borderRadius: 22, alignItems: "center", justifyContent: "center" }}
          >
            <MaterialIcons name="arrow-back-ios" size={20} color="#1d4ed8" />
          </Pressable>

          <Text style={{ fontSize: 18, fontWeight: "700", color: "#1f2937" }}>Investment Project Applications</Text>

          <Pressable
            onPress={() => onMenuPress?.()}
            hitSlop={10}
            style={{ width: 44, height: 44, borderRadius: 22, alignItems: "center", justifyContent: "center" }}
          >
            <MaterialIcons name="menu" size={24} color="#1d4ed8" />
          </Pressable>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 140 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 8, gap: 12 }}
          >
            {tabs.map((t) => {
              const isActive = activeTab === t.key;
              return (
                <Pressable
                  key={t.key}
                  onPress={() => setActiveTab(t.key)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderRadius: 999,
                    backgroundColor: isActive ? t.activeBg ?? "#1d4ed8" : "#ffffff",
                    borderWidth: isActive ? 0 : 1,
                    borderColor: "rgba(226,232,240,0.95)",
                    shadowColor: "#1d4ed8",
                    shadowOpacity: isActive ? 0.18 : 0,
                    shadowRadius: 10,
                    shadowOffset: { width: 0, height: 4 },
                    elevation: isActive ? 3 : 0
                  }}
                >
                  <MaterialIcons name={t.icon as any} size={16} color={isActive ? "#ffffff" : "#64748b"} />
                  <Text style={{ fontSize: 14, fontWeight: isActive ? "700" : "600", color: isActive ? "#ffffff" : "#475569" }}>
                    {t.label}
                  </Text>

                  {typeof t.count === "number" ? (
                    <View
                      style={{
                        paddingHorizontal: 8,
                        paddingVertical: 3,
                        borderRadius: 999,
                        backgroundColor: isActive ? "rgba(255,255,255,0.18)" : "rgba(241,245,249,1)"
                      }}
                    >
                      <Text style={{ fontSize: 12, fontWeight: "700", color: isActive ? "#ffffff" : "#1d4ed8" }}>{t.count}</Text>
                    </View>
                  ) : null}
                </Pressable>
              );
            })}
          </ScrollView>

          <View style={{ paddingHorizontal: 16, paddingTop: 18 }}>
            <Text style={{ fontSize: 22, fontWeight: "700", color: "#0f172a" }}>Regulatory Clearances</Text>
          </View>

          <View style={{ paddingHorizontal: 16, paddingTop: 18, gap: 16 }}>
            <AccordionSection
              title="Right to Business Act (RTBA-CAF)"
              icon="business-center"
              iconBg="#dbeafe"
              iconColor="#1d4ed8"
              expanded={rtbaExpanded}
              onToggle={() => setRtbaExpanded((v) => !v)}
            >
              <ApplicationCard
                pin="250535096"
                date="01-May-2025"
                applicantName="Mr Sunny Kumar"
                mobile="7894561235"
                projectName="K A Demo New Company Pvt. Ltd."
                district="Bathinda, Punjab"
                sector="Agri & Food Processing"
                type="RTBA"
                typeColor="#2563eb"
              />
            </AccordionSection>

            <AccordionSection
              title="Common Application Form (CAF)"
              icon="article"
              iconBg="#f3e8ff"
              iconColor="#7c3aed"
              expanded={cafExpanded}
              onToggle={() => setCafExpanded((v) => !v)}
            >
              <ApplicationCard
                pin="250535122"
                date="12-Apr-2025"
                applicantName="Mr Ankit Kumar"
                mobile="8712773489"
                projectName="Bond & Associates"
                district="Amritsar, Punjab"
                sector="Agri & Beverages"
                type="CAF"
                typeColor="#7c3aed"
              />

              <ApplicationCard
                pin="250535210"
                date="05-May-2025"
                applicantName="Mr Vikas Sharma"
                mobile="7894561235"
                projectName="New Demo Industries Company Pvt. Ltd."
                district="Fatehgarh Sahib, Punjab"
                sector="Agri & Food Processing"
                type="CAF"
                typeColor="#7c3aed"
              />
            </AccordionSection>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
}

function AccordionSection({ title, icon, iconBg, iconColor, expanded, onToggle, children }: any) {
  return (
    <View>
      <Pressable
        onPress={onToggle}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 16,
          borderRadius: 18,
          backgroundColor: "rgba(255,255,255,0.85)",
          borderWidth: 1,
          borderColor: "rgba(226,232,240,0.95)",
          shadowColor: "#000",
          shadowOpacity: 0.04,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 8 },
          elevation: 2
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12, flex: 1, paddingRight: 8 }}>
          <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: iconBg, alignItems: "center", justifyContent: "center" }}>
            <MaterialIcons name={icon} size={22} color={iconColor} />
          </View>
          <Text style={{ fontSize: 16, fontWeight: "700", color: "#0f172a", flexShrink: 1 }}>{title}</Text>
        </View>

        <MaterialIcons
          name={expanded ? "expand-less" : "expand-more"}
          size={22}
          color="#334155"
          style={{ transform: [{ rotate: expanded ? "180deg" : "0deg" }] }}
        />
      </Pressable>

      {expanded ? <View style={{ paddingTop: 12, gap: 12 }}>{children}</View> : null}
    </View>
  );
}

function ApplicationCard({ pin, date, applicantName, mobile, projectName, district, sector, type, typeColor }: any) {
  return (
    <View
      style={{
        marginHorizontal: 4,
        borderRadius: 18,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "rgba(226,232,240,0.9)",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 10 },
        elevation: 2,
        overflow: "hidden"
      }}
    >
      <View style={{ paddingHorizontal: 16, paddingVertical: 14 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10, flexShrink: 1 }}>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderRadius: 999,
                backgroundColor: (typeColor ?? "#2563eb") + "1A",
                borderWidth: 1,
                borderColor: (typeColor ?? "#2563eb") + "33"
              }}
            >
              <Text style={{ fontSize: 11, fontWeight: "700", letterSpacing: 0.6, color: typeColor ?? "#2563eb" }}>{type}</Text>
            </View>

            <Text style={{ fontSize: 12, fontWeight: "600", color: "#64748b" }}>{date}</Text>
          </View>

          <Pressable
            hitSlop={10}
            style={{ width: 40, height: 40, borderRadius: 12, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(241,245,249,1)" }}
          >
            <MaterialIcons name="visibility" size={20} color="#0f766e" />
          </Pressable>
        </View>

        <Text
          style={{
            marginTop: 10,
            fontSize: 16,
            fontWeight: "700",
            color: "#0f172a",
            lineHeight: 22
          }}
          numberOfLines={2}
        >
          {projectName}
        </Text>

        <Text style={{ marginTop: 6, fontSize: 13, fontWeight: "600", color: "#334155", lineHeight: 18 }}>
          {applicantName}
          {mobile ? `, ${mobile}` : ""}
        </Text>

        <View style={{ marginTop: 10, gap: 6 }}>
          <Text style={{ fontSize: 13, fontWeight: "600", color: "#475569", lineHeight: 18 }}>{`District: ${district}`}</Text>
          <Text style={{ fontSize: 13, fontWeight: "600", color: "#475569", lineHeight: 18 }}>{`Sector: ${sector}`}</Text>
        </View>

        <Pressable
          hitSlop={6}
          style={{ marginTop: 12, alignSelf: "flex-start" }}
          onPress={() => {
            // noop
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "700", color: "#2563eb", lineHeight: 20 }}>{`PIN: ${pin}`}</Text>
        </Pressable>
      </View>
    </View>
  );
}

function Row({ label, value, valueStrong, suffix, valueStrongColor, valueColor, valueUnderline, onValuePress }: any) {
  const ValueWrapper = onValuePress ? Pressable : View;

  return (
    <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
      <Text style={{ width: "33%", fontSize: 14, fontWeight: "700", color: "#94a3b8" }}>{label}</Text>
      <ValueWrapper style={{ width: "67%" }} onPress={onValuePress} hitSlop={4}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "700",
            color: valueColor ?? "#334155",
            textDecorationLine: valueUnderline ? "underline" : "none"
          }}
        >
          {valueStrong ? (
            <Text style={{ fontSize: 14, fontWeight: "700", color: valueStrongColor ?? "#1d4ed8" }}>{valueStrong}</Text>
          ) : null}
          {valueStrong ? suffix ?? "" : value}
        </Text>
      </ValueWrapper>
    </View>
  );
}
