import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { useTheme } from "../theme/useTheme";

type Props = {
  onBack?: () => void;
  onMenuPress?: () => void;
};

type CategoryId = "all" | "approvals" | "utilities" | "emergency";

type Department = {
  id: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  iconBg: string;
  iconFg: string;
  title: string;
  subtitle: string;
  officer: string;
  location: string;
};

function Pill({ label, active, onPress }: { label: string; active?: boolean; onPress?: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        paddingHorizontal: 16,
        paddingVertical: 7,
        borderRadius: 999,
        backgroundColor: active ? "#1152d4" : "#ffffff",
        borderWidth: active ? 0 : 1,
        borderColor: active ? "transparent" : "#e5e7eb"
      }}
    >
      <Text style={{ fontSize: 12, fontWeight: "700", color: active ? "#ffffff" : "#64748b" }}>{label}</Text>
    </Pressable>
  );
}

function DepartmentCard({ item }: { item: Department }) {
  return (
    <View
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "rgba(226, 232, 240, 0.9)",
        padding: 16,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
        elevation: 2,
        overflow: "hidden"
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12, flex: 1 }}>
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              backgroundColor: item.iconBg,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <MaterialIcons name={item.icon as any} size={22} color={item.iconFg} />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: "800", color: "#0f172a" }} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={{ marginTop: 2, fontSize: 12, fontWeight: "600", color: "#64748b" }}>{item.subtitle}</Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 14, gap: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <MaterialIcons name="badge" size={18} color="#1152d4" />
          <Text style={{ fontSize: 12, fontWeight: "700", color: "#64748b" }}>Nodal Officer:</Text>
          <Text style={{ fontSize: 12, fontWeight: "700", color: "#0f172a", flexShrink: 1 }}>{item.officer}</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <MaterialIcons name="location-on" size={18} color="#1152d4" />
          <Text style={{ fontSize: 12, fontWeight: "700", color: "#64748b", flexShrink: 1 }}>{item.location}</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 12, marginTop: 16 }}>
        <Pressable
          style={{
            flex: 1,
            height: 44,
            borderRadius: 12,
            backgroundColor: "rgba(17,82,212,0.10)",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 8
          }}
        >
          <MaterialIcons name="call" size={20} color="#1152d4" />
          <Text style={{ fontSize: 14, fontWeight: "800", color: "#1152d4" }}>Call</Text>
        </Pressable>

        <Pressable
          style={{
            flex: 1,
            height: 44,
            borderRadius: 12,
            backgroundColor: "#1152d4",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 8,
            shadowColor: "#1152d4",
            shadowOpacity: 0.18,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 6 },
            elevation: 2
          }}
        >
          <MaterialIcons name="email" size={20} color="#ffffff" />
          <Text style={{ fontSize: 14, fontWeight: "800", color: "#ffffff" }}>Email</Text>
        </Pressable>
      </View>
    </View>
  );
}

export function ContactsScreen({ onBack, onMenuPress }: Props) {
  const theme = useTheme();
  const STATUS_BAR_HEIGHT = Constants.statusBarHeight ?? 0;
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CategoryId>("all");

  const departments = useMemo<Department[]>(
    () => [
      {
        id: "ppcb",
        icon: "eco",
        iconBg: "rgba(22,163,74,0.14)",
        iconFg: "#16a34a",
        title: "Punjab Pollution Control Board",
        subtitle: "Environment & Safety",
        officer: "Mr. Rajiv Kumar",
        location: "Vatavaran Bhawan, Patiala"
      },
      {
        id: "housing",
        icon: "apartment",
        iconBg: "rgba(249,115,22,0.16)",
        iconFg: "#f97316",
        title: "Housing & Urban Dev.",
        subtitle: "Infrastructure",
        officer: "Ms. Anita Singh",
        location: "PUDA Bhawan, Mohali"
      },
      {
        id: "fire",
        icon: "local-fire-department",
        iconBg: "rgba(239,68,68,0.14)",
        iconFg: "#ef4444",
        title: "Fire & Safety Department",
        subtitle: "Emergency Services",
        officer: "Col. Brar (Retd.)",
        location: "Sector 17, Chandigarh"
      },
      {
        id: "power",
        icon: "bolt",
        iconBg: "rgba(234,179,8,0.14)",
        iconFg: "#eab308",
        title: "PSPCL (Power Corp)",
        subtitle: "Electricity & Utilities",
        officer: "Er. Manpreet Singh",
        location: "The Mall, Patiala"
      }
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return departments.filter((d) => {
      const matchSearch =
        q.length === 0 ||
        d.title.toLowerCase().includes(q) ||
        d.subtitle.toLowerCase().includes(q) ||
        d.officer.toLowerCase().includes(q) ||
        d.location.toLowerCase().includes(q);

      const matchCategory =
        category === "all" ||
        (category === "approvals" && d.subtitle.toLowerCase().includes("appro")) ||
        (category === "utilities" && d.subtitle.toLowerCase().includes("util")) ||
        (category === "emergency" && d.subtitle.toLowerCase().includes("emergency"));

      return matchSearch && matchCategory;
    });
  }, [category, departments, search]);

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

          <Text style={{ fontSize: 18, fontWeight: "700", color: "#1d4ed8" }}>Contacts</Text>

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

        <ScrollView
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
          contentContainerStyle={{ paddingBottom: 140 }}
        >
          <View
            style={{
              paddingHorizontal: 20,
              paddingTop: 16,
              paddingBottom: 14,
              backgroundColor: "rgba(255,255,255,0.85)",
              borderBottomWidth: 1,
              borderBottomColor: "rgba(226,232,240,0.7)"
            }}
          >
            <View
              style={{
                marginTop: 0,
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 14,
                backgroundColor: "rgba(226,232,240,0.55)",
                paddingHorizontal: 12,
                height: 48
              }}
            >
              <MaterialIcons name="search" size={20} color="#94a3b8" />
              <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder="Search department, officer..."
                placeholderTextColor="#94a3b8"
                style={{
                  flex: 1,
                  marginLeft: 10,
                  fontSize: 14,
                  fontWeight: "600",
                  color: "#0f172a"
                }}
              />
            </View>
          </View>

          <View style={{ paddingHorizontal: 20, paddingTop: 14, gap: 14 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10, paddingBottom: 2 }}>
              <Pill label="All" active={category === "all"} onPress={() => setCategory("all")} />
              <Pill label="Approvals" active={category === "approvals"} onPress={() => setCategory("approvals")} />
              <Pill label="Utilities" active={category === "utilities"} onPress={() => setCategory("utilities")} />
              <Pill label="Emergency" active={category === "emergency"} onPress={() => setCategory("emergency")} />
            </ScrollView>

            {filtered.map((d) => (
              <DepartmentCard key={d.id} item={d} />
            ))}

            <View style={{ paddingVertical: 8, alignItems: "center" }}>
              <Text style={{ fontSize: 10, fontWeight: "800", color: "#94a3b8", letterSpacing: 2, textTransform: "uppercase" }}>
                End of Directory
              </Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
}
