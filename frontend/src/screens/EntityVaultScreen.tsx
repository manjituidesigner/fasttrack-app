import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { useI18n } from "../i18n/I18nProvider";

type Props = {
  onBack?: () => void;
};

type VaultDoc = {
  name: string;
  sizeLabel: string;
};

type VaultItem = {
  ipin: string;
  applicationId?: string;
  formName?: string;
  clearanceIssued?: string;
  senderName?: string;
  documents?: VaultDoc[];
  empty?: boolean;
};

function VaultRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "rgba(248,250,252,1)" }}>
      <Text style={{ fontSize: 11, fontWeight: "700", color: "#64748b", textTransform: "uppercase", letterSpacing: 1 }}>{label}</Text>
      <Text style={{ fontSize: 12, fontWeight: "600", color: "#0f172a" }}>{value}</Text>
    </View>
  );
}

export function EntityVaultScreen({ onBack }: Props) {
  const STATUS_BAR_HEIGHT = Constants.statusBarHeight ?? 0;
  const { t } = useI18n();
  const [query, setQuery] = useState("");
  const [openIpin, setOpenIpin] = useState<string>("250535096");

  const items = useMemo<VaultItem[]>(
    () => [
      {
        ipin: "250535096",
        applicationId: "2507319386",
        formName: "Water Connection-HUD",
        clearanceIssued: "Jul 15, 2025",
        senderName: "SDO GAMADA",
        documents: [{ name: "Clearance_Certificate.pdf", sizeLabel: "1.2 MB" }]
      },
      {
        ipin: "250535102",
        empty: true
      },
      {
        ipin: "250535115",
        empty: true
      }
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((x) => x.ipin.toLowerCase().includes(q) || (x.applicationId ?? "").toLowerCase().includes(q));
  }, [items, query]);

  return (
    <>
      <StatusBar style="dark" />

      <View style={{ flex: 1, backgroundColor: "#f3f4f6" }}>
        <View
          style={{
            paddingTop: STATUS_BAR_HEIGHT,
            backgroundColor: "#ffffff",
            borderBottomWidth: 1,
            borderBottomColor: "#e2e8f0",
            zIndex: 50,
            elevation: 50
          }}
        >
          <View style={{ height: 56, paddingHorizontal: 16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Pressable
                onPress={onBack}
                hitSlop={10}
                style={{ width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center" }}
              >
                <MaterialIcons name="arrow-back" size={24} color="#0f172a" />
              </Pressable>
              <Text style={{ fontSize: 18, fontWeight: "700", color: "#0f172a" }}>{t("entityVault.title")}</Text>
            </View>

            <Pressable hitSlop={10} style={{ width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center" }}>
              <MaterialIcons name="search" size={24} color="#0f172a" />
            </Pressable>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 18, paddingBottom: 24 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 12,
              backgroundColor: "#ffffff",
              borderWidth: 1,
              borderColor: "#e2e8f0",
              paddingHorizontal: 14,
              height: 50,
              shadowColor: "#000",
              shadowOpacity: 0.04,
              shadowRadius: 10,
              shadowOffset: { width: 0, height: 6 },
              elevation: 1
            }}
          >
            <MaterialIcons name="search" size={20} color="#94a3b8" />
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder={t("entityVault.searchPlaceholder")}
              placeholderTextColor="#94a3b8"
              style={{ flex: 1, marginLeft: 10, fontSize: 14, fontWeight: "600", color: "#0f172a" }}
            />
          </View>

          <View style={{ marginTop: 16, gap: 14 }}>
            {filtered.map((x) => {
              const open = openIpin === x.ipin;
              return (
                <View
                  key={x.ipin}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: "rgba(241,245,249,1)",
                    shadowColor: "#000",
                    shadowOpacity: 0.04,
                    shadowRadius: 10,
                    shadowOffset: { width: 0, height: 6 },
                    elevation: 1,
                    overflow: "hidden"
                  }}
                >
                  <Pressable
                    onPress={() => setOpenIpin((v) => (v === x.ipin ? "" : x.ipin))}
                    style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 18 }}
                  >
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                      <MaterialIcons name="fingerprint" size={22} color={open ? "#1152d4" : "#94a3b8"} />
                      <Text style={{ fontSize: 16, fontWeight: "700", color: "#0f172a" }}>{`${t("entityVault.label.ipin")}: ${x.ipin}`}</Text>
                    </View>
                    <MaterialIcons name={open ? "expand-less" : "expand-more"} size={24} color="#94a3b8" />
                  </Pressable>

                  {open ? (
                    <View style={{ paddingHorizontal: 18, paddingBottom: 18, borderTopWidth: 1, borderTopColor: "rgba(248,250,252,1)" }}>
                      {x.empty ? (
                        <Text style={{ paddingTop: 16, fontSize: 12, fontWeight: "600", color: "#64748b", fontStyle: "italic" }}>
                          {t("entityVault.empty")}
                        </Text>
                      ) : (
                        <View style={{ paddingTop: 12 }}>
                          <VaultRow label={t("entityVault.row.applicationId")} value={x.applicationId ?? ""} />
                          <VaultRow label={t("entityVault.row.formName")} value={x.formName ?? ""} />
                          <VaultRow label={t("entityVault.row.clearanceIssued")} value={x.clearanceIssued ?? ""} />
                          <VaultRow label={t("entityVault.row.senderName")} value={x.senderName ?? ""} />

                          <View style={{ marginTop: 14 }}>
                            <Text style={{ fontSize: 11, fontWeight: "700", color: "#64748b", textTransform: "uppercase", letterSpacing: 1 }}>
                              {t("entityVault.section.clearanceDocuments")}
                            </Text>

                            {(x.documents ?? []).map((d) => (
                              <View
                                key={d.name}
                                style={{
                                  marginTop: 10,
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  backgroundColor: "rgba(248,250,252,1)",
                                  padding: 12,
                                  borderRadius: 12,
                                  borderWidth: 1,
                                  borderColor: "rgba(241,245,249,1)"
                                }}
                              >
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 12, flex: 1, paddingRight: 12 }}>
                                  <View style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: "rgba(254,226,226,1)", alignItems: "center", justifyContent: "center" }}>
                                    <MaterialIcons name="picture-as-pdf" size={20} color="#ef4444" />
                                  </View>
                                  <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 12, fontWeight: "600", color: "#0f172a" }} numberOfLines={1}>
                                      {d.name}
                                    </Text>
                                    <Text style={{ marginTop: 2, fontSize: 11, fontWeight: "600", color: "#94a3b8" }}>{d.sizeLabel}</Text>
                                  </View>
                                </View>

                                <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 6, paddingVertical: 6, paddingHorizontal: 8 }}>
                                  <MaterialIcons name="download" size={18} color="#1152d4" />
                                  <Text style={{ fontSize: 12, fontWeight: "700", color: "#1152d4" }}>{t("entityVault.action.download")}</Text>
                                </Pressable>
                              </View>
                            ))}
                          </View>
                        </View>
                      )}
                    </View>
                  ) : null}
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </>
  );
}
