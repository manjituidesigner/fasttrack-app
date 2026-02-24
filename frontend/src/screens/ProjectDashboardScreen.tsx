import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from "react-native-svg";
import { useI18n } from "../i18n/I18nProvider";

type Props = {
  onBack?: () => void;
};

function SummaryChip({ label, value, variant, footerLeft, footerColor, icon }: any) {
  const isPrimary = variant === "primary";

  return (
    <View
      style={{
        minWidth: 130,
        borderRadius: 14,
        paddingVertical: 12,
        paddingHorizontal: 14,
        backgroundColor: isPrimary ? "#1152d4" : "#ffffff",
        borderWidth: isPrimary ? 0 : 1,
        borderColor: "rgba(15,23,42,0.06)",
        shadowColor: "#000",
        shadowOpacity: isPrimary ? 0.12 : 0.06,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: isPrimary ? 3 : 2
      }}
    >
      <Text style={{ fontSize: 12, color: isPrimary ? "rgba(219,234,254,0.9)" : "#64748b", fontWeight: "600" }}>
        {label}
      </Text>
      <Text style={{ fontSize: 18, color: isPrimary ? "#ffffff" : "#0f172a", fontWeight: "800", marginTop: 6 }}>
        {value}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 6 }}>
        {icon ? <MaterialIcons name={icon} size={14} color={footerColor} style={{ marginRight: 4 }} /> : null}
        <Text style={{ fontSize: 12, color: footerColor, fontWeight: "700" }}>{footerLeft}</Text>
      </View>
    </View>
  );
}

function CardShell({ title, subtitle, right }: any) {
  return (
    <View
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 18,
        padding: 16,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 2
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <View style={{ flex: 1, paddingRight: 12 }}>
          <Text style={{ fontSize: 18, color: "#0f172a", fontWeight: "800" }}>{title}</Text>
          <Text style={{ fontSize: 12, color: "#64748b", fontWeight: "600", marginTop: 4 }}>{subtitle}</Text>
        </View>
        {right}
      </View>
    </View>
  );
}

function DonutChart() {
  const size = 128;
  const stroke = 18;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  const segments = useMemo(
    () => [
      { pct: 0.45, color: "#1152d4" },
      { pct: 0.3, color: "#10B981" },
      { pct: 0.25, color: "#EF4444" }
    ],
    []
  );

  let offsetAcc = 0;

  return (
    <View style={{ width: size, height: size, alignItems: "center", justifyContent: "center" }}>
      <Svg width={size} height={size}>
        <Circle cx={size / 2} cy={size / 2} r={radius} stroke="#e2e8f0" strokeWidth={stroke} fill="none" />
        {segments.map((s, idx) => {
          const dash = circumference * s.pct;
          const gap = circumference - dash;
          const offset = circumference * offsetAcc;
          offsetAcc += s.pct;
          return (
            <Circle
              key={idx}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={s.color}
              strokeWidth={stroke}
              fill="none"
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={-offset}
              strokeLinecap="round"
              rotation={-90}
              origin={`${size / 2}, ${size / 2}`}
            />
          );
        })}
      </Svg>
      <View
        style={{
          position: "absolute",
          width: 80,
          height: 80,
          borderRadius: 40,
          backgroundColor: "#ffffff",
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 4 },
          elevation: 1
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "900", color: "#0f172a" }}>142</Text>
        <Text style={{ fontSize: 10, fontWeight: "800", color: "#64748b", marginTop: 2, letterSpacing: 0.6 }}>
          TOTAL
        </Text>
      </View>
    </View>
  );
}

function LegendRow({ label, color, value }: any) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: color }} />
        <Text style={{ fontSize: 14, color: "#475569", fontWeight: "700" }}>{label}</Text>
      </View>
      <Text style={{ fontSize: 14, color: "#0f172a", fontWeight: "900" }}>{value}</Text>
    </View>
  );
}

function SegmentedControl({ value, onChange, t }: any) {
  return (
    <View style={{ flexDirection: "row", backgroundColor: "#f1f5f9", borderRadius: 10, padding: 3 }}>
      <Pressable
        onPress={() => onChange("projects")}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 6,
          borderRadius: 8,
          backgroundColor: value === "projects" ? "#ffffff" : "transparent"
        }}
      >
        <Text style={{ fontSize: 10, fontWeight: "800", color: value === "projects" ? "#0f172a" : "#64748b" }}>
          {t("projectDashboard.segment.projects")}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => onChange("month")}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 6,
          borderRadius: 8,
          backgroundColor: value === "month" ? "#ffffff" : "transparent"
        }}
      >
        <Text style={{ fontSize: 10, fontWeight: "800", color: value === "month" ? "#0f172a" : "#64748b" }}>
          {t("projectDashboard.segment.month")}
        </Text>
      </Pressable>
    </View>
  );
}

function Bar({ label, pct, active }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
      <View
        style={{
          width: 24,
          height: `${Math.round(pct * 100)}%` as any,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          backgroundColor: active ? "#1152d4" : "#e2e8f0"
        }}
      />
      <Text style={{ fontSize: 10, color: "#64748b", fontWeight: "700", marginTop: 10 }} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

function LineChart({ t }: any) {
  return (
    <View style={{ height: 160, width: "100%", marginTop: 6 }}>
      <View style={{ position: "absolute", left: 0, right: 0, top: 12, bottom: 40, justifyContent: "space-between" }}>
        {[0, 1, 2, 3].map((i) => (
          <View key={i} style={{ height: 1, backgroundColor: "rgba(15,23,42,0.05)" }} />
        ))}
      </View>
      <Svg width="100%" height={120} viewBox="0 0 100 50" preserveAspectRatio="none">
        <Defs>
          <LinearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#8B5CF6" stopOpacity={0.2} />
            <Stop offset="1" stopColor="#8B5CF6" stopOpacity={0} />
          </LinearGradient>
        </Defs>
        <Path d="M0,40 Q10,35 20,38 T40,25 T60,28 T80,15 T100,20 V50 H0 Z" fill="url(#purpleGradient)" />
        <Path
          d="M0,40 Q10,35 20,38 T40,25 T60,28 T80,15 T100,20"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Circle cx={20} cy={38} r={1.5} fill="#ffffff" stroke="#8B5CF6" strokeWidth={1} />
        <Circle cx={40} cy={25} r={1.5} fill="#ffffff" stroke="#8B5CF6" strokeWidth={1} />
        <Circle cx={60} cy={28} r={1.5} fill="#ffffff" stroke="#8B5CF6" strokeWidth={1} />
        <Circle cx={80} cy={15} r={2.5} fill="#8B5CF6" stroke="#ffffff" strokeWidth={1} />
      </Svg>
      <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 6, marginTop: 6 }}>
        {(
          [
            t("projectDashboard.month.jan"),
            t("projectDashboard.month.feb"),
            t("projectDashboard.month.mar"),
            t("projectDashboard.month.apr"),
            t("projectDashboard.month.may"),
            t("projectDashboard.month.jun")
          ] as string[]
        ).map((m) => (
          <Text key={m} style={{ fontSize: 10, color: "#94a3b8", fontWeight: "700" }}>
            {m}
          </Text>
        ))}
      </View>
    </View>
  );
}

export function ProjectDashboardScreen({ onBack }: Props) {
  const { t } = useI18n();
  const [investmentMode, setInvestmentMode] = useState<"projects" | "month">("projects");

  return (
    <View style={{ flex: 1, backgroundColor: "#f6f6f8" }}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 18,
          paddingBottom: 14,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "rgba(246,246,248,0.95)"
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Pressable
            onPress={onBack}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <MaterialIcons name="arrow-back-ios-new" size={20} color="#0f172a" />
          </Pressable>
          <Text style={{ fontSize: 22, fontWeight: "900", color: "#0f172a" }}>{t("projectDashboard.title")}</Text>
        </View>

        <View style={{ width: 42, height: 42 }}>
          <View
            style={{
              width: 42,
              height: 42,
              borderRadius: 21,
              backgroundColor: "#ffffff",
              borderWidth: 1,
              borderColor: "rgba(15,23,42,0.08)",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <MaterialIcons name="notifications" size={22} color="#1152d4" />
          </View>
          <View
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: "#ef4444",
              borderWidth: 2,
              borderColor: "#ffffff"
            }}
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 10, paddingBottom: 34, gap: 18 as any }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, paddingHorizontal: 2 }}>
          <SummaryChip
            label={t("projectDashboard.summary.totalInv")}
            value="₹50 Cr"
            variant="card"
            footerLeft={"+12%"}
            footerColor="#16a34a"
            icon="trending-up"
          />
          <SummaryChip
            label={t("projectDashboard.summary.applications")}
            value="124"
            variant="primary"
            footerLeft={t("projectDashboard.summary.activeNow")}
            footerColor="rgba(219,234,254,0.9)"
          />
          <SummaryChip
            label={t("projectDashboard.summary.pending")}
            value="18"
            variant="card"
            footerLeft={t("projectDashboard.summary.inReview")}
            footerColor="#f59e0b"
            icon="schedule"
          />
        </ScrollView>

        <View
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 18,
            padding: 16,
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 6 },
            elevation: 2
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <View style={{ flex: 1, paddingRight: 12 }}>
              <Text style={{ fontSize: 18, color: "#0f172a", fontWeight: "800" }}>{t("projectDashboard.card.applicationStatus.title")}</Text>
              <Text style={{ fontSize: 12, color: "#64748b", fontWeight: "600", marginTop: 4 }}>
                {t("projectDashboard.card.applicationStatus.sub")}
              </Text>
            </View>
            <Pressable
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <MaterialIcons name="more-horiz" size={22} color="#94a3b8" />
            </Pressable>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <DonutChart />
            <View style={{ flex: 1, marginLeft: 18, gap: 12 as any }}>
              <LegendRow label={t("projectDashboard.legend.pending")} color="#1152d4" value="45%" />
              <LegendRow label={t("projectDashboard.legend.approved")} color="#10B981" value="30%" />
              <LegendRow label={t("projectDashboard.legend.rejected")} color="#EF4444" value="25%" />
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 18,
            padding: 16,
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 6 },
            elevation: 2
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
            <View style={{ flex: 1, paddingRight: 12 }}>
              <Text style={{ fontSize: 18, color: "#0f172a", fontWeight: "800" }}>{t("projectDashboard.card.totalInvestment.title")}</Text>
              <Text style={{ fontSize: 12, color: "#64748b", fontWeight: "600", marginTop: 4 }}>
                {t("projectDashboard.card.totalInvestment.sub")}
              </Text>
            </View>
            <SegmentedControl value={investmentMode} onChange={setInvestmentMode} t={t} />
          </View>

          <View style={{ height: 190, borderBottomWidth: 1, borderColor: "rgba(15,23,42,0.10)", paddingBottom: 6 }}>
            <View style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 26, justifyContent: "space-between" }}>
              {([
                t("projectDashboard.axis.100cr"),
                t("projectDashboard.axis.50cr"),
                t("projectDashboard.axis.0")
              ] as string[]).map((axisLabel) => (
                <View key={axisLabel} style={{ borderTopWidth: 1, borderColor: "rgba(15,23,42,0.06)", paddingTop: 6 }}>
                  <Text style={{ fontSize: 10, color: "#94a3b8", fontWeight: "700" }}>{axisLabel}</Text>
                </View>
              ))}
            </View>

            <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", gap: 10, paddingTop: 18 }}>
              <Bar label={t("projectDashboard.bar.textile")} pct={0.65} active />
              <Bar label={t("projectDashboard.bar.solar")} pct={0.4} />
              <Bar label={t("projectDashboard.bar.agro")} pct={0.85} />
              <Bar label={t("projectDashboard.bar.it")} pct={0.3} />
              <Bar label={t("projectDashboard.bar.auto")} pct={0.55} />
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 18,
            padding: 16,
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 6 },
            elevation: 2
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ flex: 1, paddingRight: 12 }}>
              <Text style={{ fontSize: 18, color: "#0f172a", fontWeight: "800" }}>{t("projectDashboard.card.avgApprovalTime.title")}</Text>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 10 }}>
                <Text style={{ fontSize: 26, color: "#0f172a", fontWeight: "900" }}>14d</Text>
                <View style={{ backgroundColor: "#dcfce7", borderRadius: 8, paddingHorizontal: 8, paddingVertical: 4 }}>
                  <Text style={{ fontSize: 10, fontWeight: "900", color: "#15803d" }}>{t("projectDashboard.card.avgApprovalTime.delta")}</Text>
                </View>
              </View>
            </View>
            <Pressable
              style={{
                width: 38,
                height: 38,
                borderRadius: 12,
                backgroundColor: "rgba(15,23,42,0.04)",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <MaterialIcons name="filter-list" size={22} color="#94a3b8" />
            </Pressable>
          </View>

          <LineChart t={t} />
        </View>

        <View style={{ height: 10 }} />
      </ScrollView>
    </View>
  );
}
