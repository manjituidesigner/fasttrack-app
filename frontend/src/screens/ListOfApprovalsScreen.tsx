import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemedText } from "../components/ThemedText";
import { useTheme } from "../theme/useTheme";

type CategoryKey = "regulatory" | "service" | "incentive" | "startup";

type Props = {
  onBack?: () => void;
  onMenuPress?: () => void;
};

export function ListOfApprovalsScreen({ onBack, onMenuPress }: Props) {
  const theme = useTheme();
  const STATUS_BAR_HEIGHT = Constants.statusBarHeight ?? 0;

  const [activeCategory, setActiveCategory] = useState<CategoryKey>("regulatory");
  const [query, setQuery] = useState("");

  const approvalsByCategory = useMemo(() => {
    return {
      regulatory: {
        sections: [
          {
            title: "Pre-Requisite",
            accentColor: "#2563eb",
            items: [
              {
                title: "CRO Report Online Application Form",
                rating: 5,
                department: "Department of Revenue",
                type: "Fresh",
                actionIcon: "file-download"
              },
              {
                title: "Application For Land Use Classification",
                rating: 4.5,
                department: "Housing & Urban Development",
                type: "Fresh",
                actionIcon: "attachment"
              },
              {
                title: "Consent to Establish (Air & Water)",
                rating: 4,
                department: "Punjab Pollution Control Board",
                type: "Fresh",
                actionIcon: "file-download"
              },
              {
                title: "Factory Plan Approval",
                rating: 4.5,
                department: "Chief Inspector of Factories",
                type: "Fresh",
                actionIcon: "attachment"
              }
            ]
          },
          {
            title: "Pre-Construction",
            accentColor: "#7c3aed",
            items: [
              {
                title: "Registration for Boiler Manufacturer",
                rating: 5,
                department: "Director Boilers",
                type: "Manufacturing",
                actionIcon: "file-download"
              },
              {
                title: "Fire NOC (Provisional)",
                rating: 4.5,
                department: "Fire & Emergency Services",
                type: "Fresh",
                actionIcon: "file-download"
              },
              {
                title: "Electrical Safety Approval",
                rating: 4,
                department: "Chief Electrical Inspector",
                type: "Fresh",
                actionIcon: "attachment"
              },
              {
                title: "Building Plan Sanction",
                rating: 4.5,
                department: "Local Government Department",
                type: "Fresh",
                actionIcon: "attachment"
              },
              {
                title: "Water Connection (Industrial)",
                rating: 4,
                department: "Water Supply & Sanitation",
                type: "Fresh",
                actionIcon: "file-download"
              }
            ]
          }
        ]
      },
      service: {
        sections: [
          {
            title: "Common Services",
            accentColor: "#0ea5e9",
            items: [
              {
                title: "New Electricity Connection",
                rating: 4.5,
                department: "PSPCL",
                type: "Fresh",
                actionIcon: "file-download"
              },
              {
                title: "Trade License (Municipal)",
                rating: 4,
                department: "Municipal Corporation",
                type: "Fresh",
                actionIcon: "attachment"
              },
              {
                title: "Water & Sewer Connection",
                rating: 4,
                department: "Local Body",
                type: "Fresh",
                actionIcon: "file-download"
              },
              {
                title: "Business Registration Verification",
                rating: 4.5,
                department: "Industries & Commerce",
                type: "Fresh",
                actionIcon: "attachment"
              }
            ]
          },
          {
            title: "Operational",
            accentColor: "#16a34a",
            items: [
              {
                title: "Renewal of Trade License",
                rating: 4,
                department: "Municipal Corporation",
                type: "Renewal",
                actionIcon: "file-download"
              },
              {
                title: "Amendment in Registration",
                rating: 4.5,
                department: "Industries & Commerce",
                type: "Amendment",
                actionIcon: "attachment"
              },
              {
                title: "Change of Address (Service)",
                rating: 3.5,
                department: "Department Services",
                type: "Amendment",
                actionIcon: "attachment"
              }
            ]
          }
        ]
      },
      incentive: {
        sections: [
          {
            title: "Incentive Schemes",
            accentColor: "#f59e0b",
            items: [
              {
                title: "Capital Subsidy Claim",
                rating: 4.5,
                department: "Industries & Commerce",
                type: "Claim",
                actionIcon: "file-download"
              },
              {
                title: "Interest Subsidy Application",
                rating: 4,
                department: "Industries & Commerce",
                type: "Fresh",
                actionIcon: "attachment"
              },
              {
                title: "Stamp Duty Exemption",
                rating: 4,
                department: "Department of Revenue",
                type: "Fresh",
                actionIcon: "file-download"
              },
              {
                title: "Electricity Duty Reimbursement",
                rating: 4.5,
                department: "PSPCL",
                type: "Reimbursement",
                actionIcon: "attachment"
              },
              {
                title: "Employment Generation Incentive",
                rating: 4,
                department: "Labour Department",
                type: "Claim",
                actionIcon: "file-download"
              }
            ]
          }
        ]
      },
      startup: {
        sections: [
          {
            title: "Startup Programs",
            accentColor: "#ef4444",
            items: [
              {
                title: "Startup Punjab Registration",
                rating: 4.5,
                department: "Startup Cell",
                type: "Fresh",
                actionIcon: "file-download"
              },
              {
                title: "Mentorship Program Enrollment",
                rating: 4,
                department: "Startup Cell",
                type: "Fresh",
                actionIcon: "attachment"
              },
              {
                title: "Seed Funding Application",
                rating: 4.5,
                department: "Startup Cell",
                type: "Fresh",
                actionIcon: "file-download"
              },
              {
                title: "Incubation Support Request",
                rating: 4,
                department: "Incubation Center",
                type: "Request",
                actionIcon: "attachment"
              }
            ]
          }
        ]
      }
    } as const;
  }, []);

  const filteredSections = useMemo(() => {
    const allSections = approvalsByCategory[activeCategory].sections;
    const q = query.trim().toLowerCase();

    if (!q) return allSections;

    return allSections
      .map((s) => ({
        ...s,
        items: s.items.filter((it: any) => String(it.title).toLowerCase().includes(q))
      }))
      .filter((s) => s.items.length > 0);
  }, [activeCategory, approvalsByCategory, query]);

  const categories = useMemo(
    () =>
      [
        { key: "regulatory" as const, label: "Regulatory", icon: "gavel", activeColor: "#2563eb" },
        { key: "service" as const, label: "Service", icon: "settings", activeColor: "#2563eb" },
        { key: "incentive" as const, label: "Incentive", icon: "trending-up", activeColor: "#2563eb" },
        { key: "startup" as const, label: "Startup", icon: "rocket-launch", activeColor: "#2563eb" }
      ] as const,
    []
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
            backgroundColor: "rgba(255,255,255,0.60)",
            borderBottomWidth: 1,
            borderColor: "rgba(226,232,240,0.7)",
            zIndex: 50,
            elevation: 50
          }}
        >
          <Pressable
            onPress={onBack}
            hitSlop={10}
            style={{ width: 44, height: 44, borderRadius: 22, alignItems: "center", justifyContent: "center" }}
          >
            <MaterialIcons name="arrow-back-ios" size={20} color="#0f172a" />
          </Pressable>

          <ThemedText style={{ fontSize: 18, fontWeight: "700", color: "#0f172a" }}>List of Approvals</ThemedText>

          <Pressable
            onPress={() => onMenuPress?.()}
            hitSlop={10}
            style={{ width: 44, height: 44, borderRadius: 22, alignItems: "center", justifyContent: "center" }}
          >
            <MaterialIcons name="menu" size={24} color="#0f172a" />
          </Pressable>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 160 }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
            {categories.map((c) => {
              const active = activeCategory === c.key;
              return (
                <Pressable
                  key={c.key}
                  onPress={() => setActiveCategory(c.key)}
                  style={{
                    width: "48%",
                    paddingVertical: 16,
                    paddingHorizontal: 10,
                    borderRadius: 18,
                    backgroundColor: active ? "#2563eb" : "rgba(255,255,255,0.80)",
                    borderWidth: 1,
                    borderColor: active ? "rgba(37,99,235,0.35)" : "rgba(255,255,255,0.4)",
                    shadowColor: "#000",
                    shadowOpacity: active ? 0.16 : 0.06,
                    shadowRadius: 12,
                    shadowOffset: { width: 0, height: 8 },
                    elevation: active ? 3 : 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10
                  }}
                >
                  <MaterialIcons name={c.icon as any} size={20} color={active ? "white" : "#334155"} />
                  <ThemedText style={{ fontSize: 14, fontWeight: "700", color: active ? "white" : "#334155" }}>{c.label}</ThemedText>
                </Pressable>
              );
            })}
          </View>

          <View style={{ marginTop: 18, position: "relative" }}>
            <View style={{ position: "absolute", left: 14, top: 14, zIndex: 2 }}>
              <MaterialIcons name="search" size={20} color="#94a3b8" />
            </View>
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Search by Approval Name..."
              placeholderTextColor="#94a3b8"
              style={{
                fontFamily: "Roboto",
                width: "100%",
                paddingLeft: 46,
                paddingRight: 14,
                paddingVertical: 14,
                borderRadius: 18,
                backgroundColor: "rgba(255,255,255,0.80)",
                fontSize: 15,
                fontWeight: "600",
                color: "#0f172a"
              }}
            />
          </View>

          {filteredSections.map((s: any) => (
            <Section
              key={s.title}
              accentColor={s.accentColor}
              title={s.title}
              countLabel={`${s.items.length} Items`}
              items={s.items}
            />
          ))}
        </ScrollView>
      </LinearGradient>
    </>
  );
}

function Section({ title, countLabel, accentColor, items }: any) {
  return (
    <View style={{ marginTop: 22 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 4, marginBottom: 12 }}>
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1, paddingRight: 10 }}>
          <View style={{ width: 8, height: 26, borderRadius: 99, backgroundColor: accentColor, marginRight: 10 }} />
          <ThemedText style={{ fontSize: 20, fontWeight: "700", color: "#0f172a" }}>{title}</ThemedText>
        </View>
        <View style={{ paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999, backgroundColor: "rgba(255,255,255,0.45)", borderWidth: 1, borderColor: "rgba(226,232,240,0.7)" }}>
          <ThemedText style={{ fontSize: 12, fontWeight: "700", color: "#334155" }}>{countLabel}</ThemedText>
        </View>
      </View>

      <View style={{ gap: 14 }}>
        {items.map((item: any, idx: number) => (
          <ApprovalCard key={idx} {...item} />
        ))}
      </View>
    </View>
  );
}

function ApprovalCard({ title, rating, department, type, actionIcon }: any) {
  return (
    <View
      style={{
        backgroundColor: "#ffffff",
        padding: 16,
        borderRadius: 24,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 8 },
        elevation: 2,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.4)"
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
        <ThemedText style={{ flex: 1, fontSize: 17, fontWeight: "700", color: "#0f172a" }}>{title}</ThemedText>
        <RatingStars value={rating} />
      </View>

      <View style={{ gap: 12 }}>
        <View>
          <ThemedText style={{ fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", fontWeight: "700", color: "#94a3b8" }}>
            Department Name
          </ThemedText>
          <ThemedText style={{ fontSize: 14, fontWeight: "700", color: "#334155", marginTop: 4 }}>{department}</ThemedText>
        </View>

        <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between" }}>
          <View>
            <ThemedText style={{ fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", fontWeight: "700", color: "#94a3b8" }}>
              Application Type
            </ThemedText>
            <ThemedText style={{ fontSize: 14, fontWeight: "700", color: "#334155", marginTop: 4 }}>{type}</ThemedText>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Pressable
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                backgroundColor: "rgba(241,245,249,1)",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <MaterialIcons name={actionIcon} size={20} color="#475569" />
            </Pressable>

            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 14,
                paddingVertical: 10,
                borderRadius: 12,
                backgroundColor: "rgba(37,99,235,0.10)"
              }}
            >
              <ThemedText style={{ fontSize: 12, fontWeight: "600", color: "#2563eb" }}>VIEW DETAILS</ThemedText>
              <MaterialIcons name="chevron-right" size={18} color="#2563eb" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

function RatingStars({ value }: { value: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => {
        const index = i + 1;
        const icon = index <= full ? "star" : half && index === full + 1 ? "star-half" : "star-border";
        return <MaterialIcons key={i} name={icon as any} size={18} color="#f59e0b" />;
      })}
    </View>
  );
}
