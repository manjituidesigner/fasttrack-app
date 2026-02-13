import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, Pressable, ScrollView, Switch, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../theme/useTheme";
import { useI18n } from "../i18n/I18nProvider";

type Props = {
  onBack?: () => void;
  onLogout?: () => void;
};

export function MyProfileScreen({ onBack, onLogout }: Props) {
  const theme = useTheme();
  const { t, language } = useI18n();
  const STATUS_BAR_HEIGHT = Constants.statusBarHeight ?? 0;
  const [biometricLogin, setBiometricLogin] = useState(true);

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

          <Text style={{ fontSize: 18, fontWeight: "900", color: "#0f172a" }}>{t("profile.title")}</Text>

          <View style={{ width: 44, height: 44 }} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 140 }}>
          <View style={{ paddingHorizontal: 20, paddingTop: 18, paddingBottom: 10, alignItems: "center" }}>
            <View style={{ position: "relative", marginBottom: 10 }}>
              <View
                style={{
                  width: 96,
                  height: 96,
                  borderRadius: 48,
                  borderWidth: 4,
                  borderColor: "#ffffff",
                  overflow: "hidden",
                  shadowColor: "#000",
                  shadowOpacity: 0.12,
                  shadowRadius: 12,
                  shadowOffset: { width: 0, height: 8 },
                  elevation: 4
                }}
              >
                <Image
                  source={{
                    uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKTndYCFl5ZhiZSc3PJx2ofNA-mB51LXL0FhOw_nJgYMUpJF8R9mebUoh71Bx97M1YDMg1EQ5lwJbyKyNwgmtXeEk8Uo81qIxTbs2zaHpqM4RcXPbCzzlV1WLOwnRYZR3RKRB2X1bSTzPIKBV9gws-_uzaRKHdq3kDiln5oK6fDN1KHTJO86Kgy0ca_oq3qaTaa-Moj9HukwovzpOdCsnllMzwXgNGRFXfhaUpwp6pe1T8Lp_577nWaN4yt0ExfBvLmjh7fY3QVVE"
                  }}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>

              <View
                style={{
                  position: "absolute",
                  right: -6,
                  bottom: -6,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 999,
                  backgroundColor: "#22c55e",
                  borderWidth: 2,
                  borderColor: "#ffffff",
                  shadowColor: "#000",
                  shadowOpacity: 0.12,
                  shadowRadius: 10,
                  shadowOffset: { width: 0, height: 6 },
                  elevation: 3
                }}
              >
                <MaterialIcons name="verified" size={14} color="#ffffff" />
                <Text style={{ fontSize: 10, fontWeight: "900", color: "#ffffff" }}>{t("profile.verified")}</Text>
              </View>
            </View>

            <Text style={{ fontSize: 24, fontWeight: "900", color: "#0f172a", textAlign: "center" }}>{t("profile.name")}</Text>
            <Text style={{ marginTop: 2, fontSize: 13, fontWeight: "800", color: "#64748b", textAlign: "center" }}>
              {t("profile.company")}
            </Text>
          </View>

          <View style={{ paddingHorizontal: 16, gap: 16 }}>
            <Card>
              <CardHeader icon="person" title={t("profile.section.personalDetails")} />
              <View style={{ gap: 14 }}>
                <InfoRow label={t("profile.field.fullName")} value={t("profile.name")} />
                <InfoRow label={t("profile.field.email")} value={t("profile.emailValue")} />
                <InfoRow label={t("profile.field.mobile")} value={t("profile.mobileValue")} noDivider />
              </View>
            </Card>

            <Card>
              <CardHeader icon="domain" title={t("profile.section.companyDetails")} />
              <View style={{ gap: 14 }}>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 14,
                    paddingBottom: 12,
                    borderBottomWidth: 1,
                    borderColor: "rgba(226,232,240,0.9)"
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <SmallLabel>{t("profile.field.pan")}</SmallLabel>
                    <Text style={{ fontSize: 15, fontWeight: "800", color: "#0f172a" }}>{t("profile.panValue")}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <SmallLabel>{t("profile.field.gstin")}</SmallLabel>
                    <Text style={{ fontSize: 15, fontWeight: "800", color: "#0f172a" }}>{t("profile.gstinValue")}</Text>
                  </View>
                </View>

                <View>
                  <SmallLabel>{t("profile.field.registeredAddress")}</SmallLabel>
                  <Text style={{ fontSize: 15, fontWeight: "800", color: "#0f172a", lineHeight: 20 }}>{t("profile.addressValue")}</Text>
                </View>
              </View>
            </Card>

            <Card style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
              <View style={{ paddingHorizontal: 10, paddingTop: 6, paddingBottom: 10, borderBottomWidth: 1, borderColor: "rgba(226,232,240,0.9)" }}>
                <CardHeader icon="settings" title={t("profile.section.preferences")} noMargin />
              </View>

              <Pressable
                onPress={() => {}}
                style={({ pressed }) => ({
                  paddingHorizontal: 12,
                  paddingVertical: 12,
                  borderBottomWidth: 1,
                  borderColor: "rgba(226,232,240,0.9)",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: 10,
                  backgroundColor: pressed ? "rgba(241,245,249,0.9)" : "transparent"
                })}
              >
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                  <MaterialIcons name="language" size={20} color="#94a3b8" />
                  <Text style={{ fontSize: 15, fontWeight: "800", color: "#0f172a" }}>{t("profile.preference.language")}</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                  <Text style={{ fontSize: 13, fontWeight: "700", color: "#64748b" }}>
                    {language === "en" ? "English" : language === "hi" ? "Hindi" : "Punjabi"}
                  </Text>
                  <MaterialIcons name="arrow-forward-ios" size={14} color="#94a3b8" />
                </View>
              </Pressable>

              <Pressable
                onPress={() => {}}
                style={({ pressed }) => ({
                  paddingHorizontal: 12,
                  paddingVertical: 12,
                  borderBottomWidth: 1,
                  borderColor: "rgba(226,232,240,0.9)",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: 10,
                  backgroundColor: pressed ? "rgba(241,245,249,0.9)" : "transparent"
                })}
              >
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                  <MaterialIcons name="notifications" size={20} color="#94a3b8" />
                  <Text style={{ fontSize: 15, fontWeight: "800", color: "#0f172a" }}>{t("profile.preference.notifications")}</Text>
                </View>
                <MaterialIcons name="arrow-forward-ios" size={14} color="#94a3b8" />
              </Pressable>

              <View style={{ paddingHorizontal: 12, paddingVertical: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                  <MaterialIcons name="fingerprint" size={20} color="#94a3b8" />
                  <Text style={{ fontSize: 15, fontWeight: "800", color: "#0f172a" }}>{t("profile.preference.biometric")}</Text>
                </View>
                <Switch value={biometricLogin} onValueChange={setBiometricLogin} />
              </View>
            </Card>

            <Pressable
              onPress={onLogout}
              style={({ pressed }) => ({
                height: 56,
                borderRadius: 18,
                backgroundColor: pressed ? "#b91c1c" : "#dc2626",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: 10,
                shadowColor: "#000",
                shadowOpacity: 0.14,
                shadowRadius: 16,
                shadowOffset: { width: 0, height: 10 },
                elevation: 4
              })}
            >
              <MaterialIcons name="logout" size={20} color="#ffffff" />
              <Text style={{ color: "#ffffff", fontSize: 16, fontWeight: "900" }}>{t("profile.logout")}</Text>
            </Pressable>

            <View style={{ height: 10 }} />
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
}

function Card({ children, style }: { children: any; style?: any }) {
  return (
    <View
      style={{
        backgroundColor: "rgba(255,255,255,0.95)",
        borderRadius: 24,
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderWidth: 1,
        borderColor: "rgba(226,232,240,0.95)",
        ...style
      }}
    >
      {children}
    </View>
  );
}

function CardHeader({ icon, title, noMargin }: { icon: any; title: string; noMargin?: boolean }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: noMargin ? 0 : 14 }}>
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: 18,
          backgroundColor: "rgba(37,99,235,0.10)",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <MaterialIcons name={icon} size={18} color="#1152d4" />
      </View>
      <Text style={{ fontSize: 16, fontWeight: "900", color: "#0f172a" }}>{title}</Text>
    </View>
  );
}

function SmallLabel({ children }: { children: any }) {
  return <Text style={{ fontSize: 11, fontWeight: "900", color: "#94a3b8", textTransform: "uppercase", marginBottom: 6 }}>{children}</Text>;
}

function InfoRow({ label, value, noDivider }: { label: string; value: string; noDivider?: boolean }) {
  return (
    <View style={{ paddingBottom: noDivider ? 0 : 12, borderBottomWidth: noDivider ? 0 : 1, borderColor: "rgba(226,232,240,0.9)" }}>
      <SmallLabel>{label}</SmallLabel>
      <Text style={{ fontSize: 15, fontWeight: "800", color: "#0f172a" }}>{value}</Text>
    </View>
  );
}
