import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../theme/useTheme";

type Props = {
  onBack?: () => void;
};

type NotificationTone = "orange" | "green" | "red" | "blue" | "gray";

type NotificationItem = {
  id: string;
  tone: NotificationTone;
  unread?: boolean;
  timeLabel: string;
  icon: string;
  title: string;
  message: string;
  ctaLabel?: string;
};

function toneStyles(tone: NotificationTone) {
  switch (tone) {
    case "orange":
      return { border: "#F97316", bg: "#FFEDD5", fg: "#F97316" };
    case "green":
      return { border: "#10B981", bg: "#D1FAE5", fg: "#10B981" };
    case "red":
      return { border: "#EF4444", bg: "#FEE2E2", fg: "#EF4444" };
    case "blue":
      return { border: "#1152d4", bg: "rgba(17,82,212,0.10)", fg: "#1152d4" };
    case "gray":
    default:
      return { border: "#94a3b8", bg: "#f1f5f9", fg: "#64748b" };
  }
}

export function NotificationsScreen({ onBack }: Props) {
  const theme = useTheme();
  const STATUS_BAR_HEIGHT = Constants.statusBarHeight ?? 0;

  const seed = useMemo<NotificationItem[]>(
    () => [
      {
        id: "n1",
        tone: "orange",
        unread: true,
        timeLabel: "2 mins ago",
        icon: "priority-high",
        title: "Observation Raised",
        message: "Missing Fire Safety NOC document in Application #402. Please upload by EOD.",
        ctaLabel: "Upload Document"
      },
      {
        id: "n2",
        tone: "green",
        unread: true,
        timeLabel: "1 hr ago",
        icon: "check-circle",
        title: "Application Approved",
        message: "Your Site Plan Approval for Plot A-21 has been successfully granted."
      },
      {
        id: "n3",
        tone: "red",
        unread: false,
        timeLabel: "4 hrs ago",
        icon: "account-balance-wallet",
        title: "Payment Pending",
        message: "Processing fee of ₹5,000 is pending for Environmental Clearance.",
        ctaLabel: "Pay Now"
      },
      {
        id: "n4",
        tone: "blue",
        unread: false,
        timeLabel: "Yesterday",
        icon: "forward",
        title: "Application Forwarded",
        message: "Application forwarded to Chief Architect for final technical review."
      },
      {
        id: "n5",
        tone: "gray",
        unread: false,
        timeLabel: "2 days ago",
        icon: "dns",
        title: "System Maintenance",
        message: "Portal will be down for scheduled maintenance on Sunday from 2 AM to 4 AM."
      }
    ],
    []
  );

  const [items, setItems] = useState<NotificationItem[]>(seed);

  return (
    <>
      <StatusBar style="dark" />

      <LinearGradient colors={theme.colors.background.gradient} style={{ flex: 1 }}>
        <View
          style={{
            paddingTop: STATUS_BAR_HEIGHT + 16,
            paddingBottom: 12,
            paddingHorizontal: 18
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Pressable
              onPress={onBack}
              hitSlop={10}
              style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: "rgba(255,255,255,0.9)", alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "rgba(226,232,240,0.9)" }}
            >
              <MaterialIcons name="arrow-back" size={22} color="#0f172a" />
            </Pressable>

            <Pressable
              onPress={() => setItems((s) => s.map((x) => ({ ...x, unread: false })))}
              hitSlop={10}
              style={{ paddingHorizontal: 10, paddingVertical: 8, borderRadius: 999, backgroundColor: "rgba(17,82,212,0.08)", borderWidth: 1, borderColor: "rgba(17,82,212,0.14)" }}
            >
              <Text style={{ fontSize: 12, fontWeight: "700", color: "#1152d4" }}>Mark all as read</Text>
            </Pressable>
          </View>

          <Text style={{ marginTop: 14, fontSize: 28, fontWeight: "700", color: "#0f172a", lineHeight: 34 }}>
            Notifications
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 140, gap: 14 }}>
          {items.map((n) => (
            <NotificationCard
              key={n.id}
              item={n}
              onPress={() => setItems((s) => s.map((x) => (x.id === n.id ? { ...x, unread: false } : x)))}
            />
          ))}

          <View style={{ paddingVertical: 16, alignItems: "center" }}>
            <Text style={{ fontSize: 11, fontWeight: "700", color: "#94a3b8", letterSpacing: 2, textTransform: "uppercase" }}>End of Notifications</Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
}

function NotificationCard({ item, onPress }: { item: NotificationItem; onPress?: () => void }) {
  const tone = toneStyles(item.tone);
  const containerOpacity = item.tone === "gray" ? 0.85 : 1;

  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 24,
        padding: 16,
        borderLeftWidth: 6,
        borderLeftColor: tone.border,
        borderWidth: 1,
        borderColor: "rgba(226,232,240,0.9)",
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 12 },
        elevation: 2,
        opacity: containerOpacity
      }}
    >
      <View style={{ position: "absolute", top: 14, right: 14, flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text style={{ fontSize: 11, fontWeight: "700", color: "#94a3b8" }}>{item.timeLabel}</Text>
        {item.unread ? (
          <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#1152d4" }} />
        ) : null}
      </View>

      <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 12, paddingRight: 70 }}>
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: tone.bg,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <MaterialIcons name={item.icon as any} size={24} color={tone.fg} />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "700", color: "#0f172a", lineHeight: 22 }}>{item.title}</Text>
          <Text style={{ marginTop: 6, fontSize: 13, fontWeight: "600", color: "#475569", lineHeight: 19 }}>{item.message}</Text>
        </View>
      </View>

      {item.ctaLabel ? (
        <View style={{ marginTop: 14, paddingLeft: 60 }}>
          <Pressable
            style={{
              alignSelf: "flex-start",
              paddingHorizontal: 14,
              paddingVertical: 10,
              borderRadius: 999,
              backgroundColor: tone.bg,
              borderWidth: 1,
              borderColor: tone.border + "33"
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "700", color: tone.fg }}>{item.ctaLabel}</Text>
          </Pressable>
        </View>
      ) : null}
    </Pressable>
  );
}
