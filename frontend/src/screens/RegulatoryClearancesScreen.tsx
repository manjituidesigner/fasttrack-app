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

          <Text style={{ fontSize: 18, fontWeight: "800", color: "#1f2937" }}>Investment Project Applications</Text>

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
                  <Text style={{ fontSize: 14, fontWeight: isActive ? "800" : "600", color: isActive ? "#ffffff" : "#475569" }}>
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
                      <Text style={{ fontSize: 12, fontWeight: "800", color: isActive ? "#ffffff" : "#1d4ed8" }}>{t.count}</Text>
                    </View>
                  ) : null}
                </Pressable>
              );
            })}
          </ScrollView>

          <View style={{ paddingHorizontal: 16, paddingTop: 18 }}>
            <Text style={{ fontSize: 22, fontWeight: "900", color: "#0f172a" }}>Regulatory Clearances</Text>
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

        <Pressable
          onPress={() => {
            setActiveTab("applyNew");
            onAddPress?.();
          }}
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
          hitSlop={10}
        >
          <MaterialIcons name="add" size={28} color="white" />
        </Pressable>
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
          backgroundColor: "rgba(255,255,255,0.60)",
          borderWidth: 1,
          borderColor: "rgba(226,232,240,0.95)"
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12, flex: 1, paddingRight: 8 }}>
          <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: iconBg, alignItems: "center", justifyContent: "center" }}>
            <MaterialIcons name={icon} size={22} color={iconColor} />
          </View>
          <Text style={{ fontSize: 16, fontWeight: "800", color: "#0f172a", flexShrink: 1 }}>{title}</Text>
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
        borderColor: "rgba(241,245,249,1)",
        overflow: "hidden"
      }}
    >
      <View style={{ padding: 20, gap: 12 }}>
        <Row
          label="PIN:"
          value={pin}
          valueColor="#1d4ed8"
          valueUnderline
          onValuePress={() => {
            // TODO: Navigate / open details by PIN
          }}
        />
        <Row label="Date:" value={date} />
        <Row label="Applicant Name:" value={applicantName} />
        <Row label="Mobile:" value={mobile} />
        <Row label="Project Name:" value={projectName} />
        <Row label="District:" value={district} />
        <Row label="Project Sector:" value={sector} />
        <Row label="Type:" value={type} valueColor={typeColor} />

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ width: "33%", fontSize: 14, fontWeight: "700", color: "#94a3b8" }}>Action:</Text>
          <Pressable style={{ width: "67%", flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="visibility" size={20} color="#1d4ed8" />
          </Pressable>
        </View>
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
            fontWeight: "800",
            color: valueColor ?? "#334155",
            textDecorationLine: valueUnderline ? "underline" : "none"
          }}
        >
          {valueStrong ? (
            <Text style={{ fontSize: 14, fontWeight: "900", color: valueStrongColor ?? "#1d4ed8" }}>{valueStrong}</Text>
          ) : null}
          {valueStrong ? suffix ?? "" : value}
        </Text>
      </ValueWrapper>
    </View>
  );
}
