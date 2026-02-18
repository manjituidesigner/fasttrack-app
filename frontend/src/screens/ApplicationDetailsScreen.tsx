import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../theme/useTheme";

type TabKey = "overview" | "workflow" | "documents" | "logs" | "payments";

export type ApplicationDetails = {
  pin: string;
  date: string;
  statusLabel?: string;
  businessEntity?: string;
  projectName?: string;
  applicantName?: string;
  siteDetails?: string;
  projectSector?: string;
  totalProjectCost?: string;
  projectPurpose?: string;
  typeOfIndustry?: string;
};

type ResolvedApplicationDetails = {
  pin: string;
  date: string;
  statusLabel: string;
  businessEntity: string;
  projectName: string;
  applicantName: string;
  siteDetails: string;
  projectSector: string;
  totalProjectCost: string;
  projectPurpose: string;
  typeOfIndustry: string;
};

type Props = {
  onBack?: () => void;
  application?: ApplicationDetails;
};

export function ApplicationDetailsScreen({ onBack, application }: Props) {
  const theme = useTheme();
  const STATUS_BAR_HEIGHT = Constants.statusBarHeight ?? 0;

  const app = useMemo<ResolvedApplicationDetails>(() => {
    return {
      pin: application?.pin ?? "251134461",
      date: application?.date ?? "20-Nov-2025",
      statusLabel: application?.statusLabel ?? "Under Review",
      businessEntity: application?.businessEntity ?? application?.projectName ?? "HERO CYCLES LIMITED",
      projectName: application?.projectName ?? "Test Staging Entity Project",
      applicantName: application?.applicantName ?? "Rahul Garg",
      siteDetails: application?.siteDetails ?? "Test Staging Entity Project Addr, S.A.S Nagar, Punjab",
      projectSector: application?.projectSector ?? "IT & ITES",
      totalProjectCost: application?.totalProjectCost ?? "41.00 Lakhs",
      projectPurpose: application?.projectPurpose ?? "Test Staging",
      typeOfIndustry: application?.typeOfIndustry ?? "—"
    };
  }, [application]);

  const [tab, setTab] = useState<TabKey>("overview");

  return (
    <>
      <StatusBar style="dark" />

      <LinearGradient colors={theme.colors.background.gradient} style={{ flex: 1 }}>
        <View
          style={{
            paddingTop: STATUS_BAR_HEIGHT,
            backgroundColor: "rgba(255,255,255,0.80)",
            borderBottomWidth: 1,
            borderBottomColor: "rgba(229,231,235,1)",
            zIndex: 50
          }}
        >
          <View
            style={{
              height: 64,
              paddingHorizontal: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Pressable
              onPress={onBack}
              hitSlop={10}
              style={{ width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center" }}
            >
              <MaterialIcons name="arrow-back" size={22} color="#111827" />
            </Pressable>

            <Text style={{ fontSize: 16, fontWeight: "700", color: "#111827" }}>Application Details</Text>

            <Pressable
              hitSlop={10}
              style={{ width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center" }}
            >
              <MaterialIcons name="more-vert" size={22} color="#111827" />
            </Pressable>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 16,
            borderBottomWidth: 1,
            borderBottomColor: "rgba(229,231,235,1)"
          }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
            <TabPill label="Overview" active={tab === "overview"} onPress={() => setTab("overview")} />
            <TabPill label="Workflow" active={tab === "workflow"} onPress={() => setTab("workflow")} />
            <TabPill label="Documents" active={tab === "documents"} onPress={() => setTab("documents")} />
            <TabPill label="Logs" active={tab === "logs"} onPress={() => setTab("logs")} />
            <TabPill label="Payments" active={tab === "payments"} onPress={() => setTab("payments")} />
          </ScrollView>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 140 }}>
          {tab === "overview" ? (
            <>
              <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                <View
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 16,
                    padding: 20,
                    borderWidth: 1,
                    borderColor: "rgba(243,244,246,1)",
                    shadowColor: "#000",
                    shadowOpacity: 0.04,
                    shadowRadius: 12,
                    shadowOffset: { width: 0, height: 8 },
                    elevation: 2
                  }}
                >
                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <View>
                      <Text style={{ fontSize: 10, fontWeight: "700", color: "#9ca3af", letterSpacing: 1, textTransform: "uppercase" }}>{`PIN: ${app.pin}`}</Text>
                      <Text style={{ marginTop: 4, fontSize: 10, fontWeight: "700", color: "#9ca3af", letterSpacing: 1, textTransform: "uppercase" }}>{`Date: ${app.date}`}</Text>
                    </View>

                    <View
                      style={{
                        paddingHorizontal: 12,
                        paddingVertical: 6,
                        borderRadius: 999,
                        backgroundColor: "rgba(124,58,237,0.10)",
                        borderWidth: 1,
                        borderColor: "rgba(124,58,237,0.20)"
                      }}
                    >
                      <Text style={{ fontSize: 12, fontWeight: "700", color: "#7C3AED" }}>{app.statusLabel}</Text>
                    </View>
                  </View>

                  <View style={{ marginTop: 16, gap: 12 }}>
                    <View>
                      <Text style={{ fontSize: 10, fontWeight: "700", color: "#135bec", letterSpacing: 2, textTransform: "uppercase" }}>Business Entity</Text>
                      <Text style={{ marginTop: 4, fontSize: 18, fontWeight: "700", color: "#111827" }}>{app.businessEntity}</Text>
                    </View>

                    <View style={{ flexDirection: "row", flexWrap: "wrap", rowGap: 12, columnGap: 16 }}>
                      <InfoPair label="Project Name" value={app.projectName} widthPercent={50} />
                      <InfoPair label="Applicant Name" value={app.applicantName} widthPercent={50} />

                      <View style={{ width: "100%" }}>
                        <Text style={{ fontSize: 10, fontWeight: "700", color: "#9ca3af", textTransform: "uppercase" }}>Site Details</Text>
                        <View style={{ marginTop: 6, flexDirection: "row", alignItems: "flex-start", gap: 6 }}>
                          <MaterialIcons name="location-on" size={16} color="#6b7280" style={{ marginTop: 1 }} />
                          <Text style={{ fontSize: 12, fontWeight: "600", color: "#6b7280", flex: 1, lineHeight: 18 }}>{app.siteDetails}</Text>
                        </View>
                      </View>

                      <InfoPair label="Project Sector" value={app.projectSector} widthPercent={50} />
                      <InfoPair label="Total Project Cost" value={app.totalProjectCost} widthPercent={50} />
                      <InfoPair label="Project Purpose" value={app.projectPurpose} widthPercent={50} />
                      <InfoPair label="Type of Industry" value={app.typeOfIndustry} widthPercent={50} mutedValue={app.typeOfIndustry === "—"} />
                    </View>
                  </View>
                </View>
              </View>

              <View style={{ paddingHorizontal: 20, paddingVertical: 20, gap: 14 }}>
                <ClearanceCard
                  variant="required"
                  preReqLabel="Pre-Requisite"
                  title="Green Stamp Paper along with RTBA"
                  deptLabel="Housing & Urban Development"
                  primaryCta="Upload Clearance"
                  secondaryCta="Click to Apply"
                />

                <ClearanceCard
                  variant="saved"
                  appIdLabel="App ID: 2510440150"
                  title="Land Use Classification (Green Stamp Paper)"
                  statusLabel="Form Saved"
                  submittedLabel="Submitted: N/A"
                  feesLabel="Fees: ₹ 0.00"
                  primaryCta="Edit Application"
                  primaryIcon="edit"
                />
              </View>
            </>
          ) : (
            <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
              <View
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: 16,
                  padding: 16,
                  borderWidth: 1,
                  borderColor: "rgba(229,231,235,1)"
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: "700", color: "#111827" }}>{
                  tab === "workflow"
                    ? "Workflow"
                    : tab === "documents"
                      ? "Documents"
                      : tab === "logs"
                        ? "Logs"
                        : "Payments"
                }</Text>
                <Text style={{ marginTop: 8, fontSize: 13, fontWeight: "600", color: "#6b7280", lineHeight: 18 }}>
                  Coming soon.
                </Text>
              </View>
            </View>
          )}
        </ScrollView>
      </LinearGradient>
    </>
  );
}

function TabPill({ label, active, onPress }: { label: string; active?: boolean; onPress?: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: active ? "#ffffff" : "rgba(229,231,235,1)",
        borderWidth: active ? 0 : 0,
        shadowColor: "#000",
        shadowOpacity: active ? 0.06 : 0,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
        elevation: active ? 1 : 0
      }}
    >
      <Text style={{ fontSize: 13, fontWeight: active ? "700" : "600", color: active ? "#135bec" : "#6b7280" }}>{label}</Text>
    </Pressable>
  );
}

function InfoPair({ label, value, widthPercent, mutedValue }: { label: string; value: string; widthPercent: 50 | 100; mutedValue?: boolean }) {
  return (
    <View style={{ width: widthPercent === 50 ? "48%" : "100%" }}>
      <Text style={{ fontSize: 10, fontWeight: "700", color: "#9ca3af", textTransform: "uppercase" }}>{label}</Text>
      <Text style={{ marginTop: 4, fontSize: 12, fontWeight: "600", color: mutedValue ? "#d1d5db" : "#1f2937" }} numberOfLines={2}>
        {value}
      </Text>
    </View>
  );
}

type ClearanceCardProps =
  | {
      variant: "required";
      preReqLabel: string;
      title: string;
      deptLabel: string;
      primaryCta: string;
      secondaryCta: string;
    }
  | {
      variant: "saved";
      appIdLabel: string;
      title: string;
      statusLabel: string;
      submittedLabel: string;
      feesLabel: string;
      primaryCta: string;
      primaryIcon?: string;
    };

function ClearanceCard(props: ClearanceCardProps) {
  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(229,231,235,1)",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 1,
    overflow: "hidden" as const
  };

  if (props.variant === "required") {
    return (
      <View style={cardStyle}>
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
            <View style={{ flex: 1, paddingRight: 12 }}>
              <Text style={{ fontSize: 10, fontWeight: "700", color: "#9ca3af", letterSpacing: 2, textTransform: "uppercase" }}>{props.preReqLabel}</Text>
              <Text style={{ marginTop: 6, fontSize: 14, fontWeight: "700", color: "#111827", lineHeight: 20 }}>
                {props.title}
              </Text>
            </View>

            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 999,
                backgroundColor: "rgba(59,130,246,0.12)",
                borderWidth: 1,
                borderColor: "rgba(59,130,246,0.20)"
              }}
            >
              <Text style={{ fontSize: 10, fontWeight: "700", color: "#1d4ed8", textTransform: "uppercase" }}>Required</Text>
            </View>
          </View>

          <View style={{ gap: 10, marginBottom: 18 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
              <MaterialIcons name="corporate-fare" size={16} color="#6b7280" />
              <Text style={{ fontSize: 12, fontWeight: "600", color: "#6b7280" }}>{props.deptLabel}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", gap: 10, paddingTop: 16, borderTopWidth: 1, borderTopColor: "rgba(243,244,246,1)" }}>
            <PrimaryButton label={props.primaryCta} />
            <PrimaryButton label={props.secondaryCta} />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={cardStyle}>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
          <View style={{ flex: 1, paddingRight: 12 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
              <Text style={{ fontSize: 10, fontWeight: "700", color: "#9ca3af", letterSpacing: 2, textTransform: "uppercase" }}>{props.appIdLabel}</Text>
              <View style={{ paddingHorizontal: 6, paddingVertical: 3, borderRadius: 6, backgroundColor: "rgba(243,244,246,1)" }}>
                <Text style={{ fontSize: 9, fontWeight: "700", color: "#6b7280" }}>SAVED</Text>
              </View>
            </View>
            <Text style={{ marginTop: 8, fontSize: 14, fontWeight: "700", color: "#111827", lineHeight: 20 }}>
              {props.title}
            </Text>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderRadius: 999,
              backgroundColor: "rgba(245,158,11,0.12)",
              borderWidth: 1,
              borderColor: "rgba(245,158,11,0.20)"
            }}
          >
            <Text style={{ fontSize: 10, fontWeight: "700", color: "#b45309", textTransform: "uppercase" }}>{props.statusLabel}</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12, marginBottom: 18 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <MaterialIcons name="calendar-today" size={16} color="#9ca3af" />
            <Text style={{ fontSize: 12, fontWeight: "600", color: "#6b7280" }}>{props.submittedLabel}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <MaterialIcons name="payments" size={16} color="#9ca3af" />
            <Text style={{ fontSize: 12, fontWeight: "600", color: "#6b7280" }}>{props.feesLabel}</Text>
          </View>
        </View>

        <View style={{ paddingTop: 16, borderTopWidth: 1, borderTopColor: "rgba(243,244,246,1)" }}>
          <PrimaryButton label={props.primaryCta} icon={props.primaryIcon ?? "edit"} full />
        </View>
      </View>
    </View>
  );
}

function PrimaryButton({ label, icon, full }: { label: string; icon?: string; full?: boolean }) {
  return (
    <Pressable
      style={{
        flex: full ? 0 : 1,
        width: full ? "100%" : undefined,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        backgroundColor: "#135bec",
        borderRadius: 999,
        paddingVertical: 10,
        paddingHorizontal: 16,
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
        elevation: 2
      }}
    >
      {icon ? <MaterialIcons name={icon as any} size={16} color="#fff" /> : null}
      <Text style={{ fontSize: 12, fontWeight: "700", color: "#fff" }}>{label}</Text>
    </Pressable>
  );
}
