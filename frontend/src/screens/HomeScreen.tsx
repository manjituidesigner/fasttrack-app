import { StatusBar } from "expo-status-bar";
import { useEffect, useMemo, useRef, useState } from "react";
import { View, ScrollView, Image, Pressable, FlatList, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../theme/useTheme";
import { useI18n } from "../i18n/I18nProvider";
import { ThemedText } from "../components/ThemedText";
import { ThemedCard } from "../components/ThemedCard";
import { ThemedButton } from "../components/ThemedButton";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

type Props = {
  onLoginPress: () => void;
};

export function HomeScreen({ onLoginPress }: Props) {
  const theme = useTheme();
  const { language, setLanguage, t } = useI18n();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const features = useMemo(
    () => [
      {
        icon: "rocket-launch",
        iconSet: "mci" as const,
        title: t("home.feature.instantFiling.title"),
        desc: t("home.feature.instantFiling.desc"),
        color: theme.colors.brand.primary
      },
      {
        icon: "radar",
        iconSet: "mci" as const,
        title: t("home.feature.liveTracking.title"),
        desc: t("home.feature.liveTracking.desc"),
        color: "#059669"
      },
      {
        icon: "verified-user",
        iconSet: "mi" as const,
        title: t("home.feature.eCertificates.title"),
        desc: t("home.feature.eCertificates.desc"),
        color: "#7c3aed"
      },
      {
        icon: "domain-verification",
        iconSet: "mci" as const,
        title: t("home.feature.singleWindow.title"),
        desc: t("home.feature.singleWindow.desc"),
        color: "#0ea5e9"
      },
      {
        icon: "shield-check",
        iconSet: "mci" as const,
        title: t("home.feature.secureTrusted.title"),
        desc: t("home.feature.secureTrusted.desc"),
        color: "#f59e0b"
      }
    ],
    [theme.colors.brand.primary, t]
  );

  const CARD_WIDTH = Math.min(260, Math.max(220, SCREEN_WIDTH * 0.72));
  const CARD_GAP = 16;
  const SNAP_INTERVAL = CARD_WIDTH + CARD_GAP;

  const listRef = useRef<FlatList<(typeof features)[number]>>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (features.length <= 1) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % features.length;
        listRef.current?.scrollToOffset({ offset: next * SNAP_INTERVAL, animated: true });
        return next;
      });
    }, 3500);

    return () => clearInterval(id);
  }, [features.length, SNAP_INTERVAL]);

  return (
    <>
      <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />

      <LinearGradient colors={theme.colors.background.gradient} style={{ flex: 1 }}>
        <BlurView intensity={40} style={{ zIndex: 20, elevation: 20 }}>
          <View
            style={{
              position: "relative",
              zIndex: 20,
              elevation: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              paddingTop: 8,
              paddingBottom: 12,
              borderBottomWidth: 1,
              borderColor: theme.colors.border.hairline
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 16,
                  backgroundColor: theme.colors.icon.headerBadgeBg,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <MaterialIcons name="account-balance" size={22} color="white" />
              </View>

              <View>
                <ThemedText
                  style={{
                    fontSize: theme.typography.headerTitle.size,
                    fontWeight: theme.typography.headerTitle.weight
                  }}
                >
                  {t("home.appTitle")}
                </ThemedText>
                <ThemedText
                  variant="muted"
                  style={{
                    fontSize: theme.typography.headerSubtitle.size,
                    fontWeight: theme.typography.headerSubtitle.weight,
                    textTransform: "uppercase"
                  }}
                >
                  {t("home.govt")}
                </ThemedText>
              </View>
            </View>

            <Pressable
              onPress={() => setShowLangMenu((v) => !v)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: theme.radii.badge,
                backgroundColor: theme.colors.surface.glass
              }}
            >
              <ThemedText style={{ fontSize: 12, fontWeight: "700" }}>
                {language === "en" ? "EN" : language === "hi" ? "HI" : "PA"}
              </ThemedText>
              <MaterialIcons name="expand-more" size={16} color={theme.colors.text.muted} />
            </Pressable>
          </View>

          {showLangMenu ? (
            <View
              style={{
                position: "absolute",
                right: 20,
                top: 66,
                width: 170,
                borderRadius: 14,
                overflow: "hidden",
                backgroundColor: "rgba(255,255,255,0.92)",
                borderWidth: 1,
                borderColor: theme.colors.border.hairline,
                zIndex: 999,
                elevation: 999
              }}
            >
              {["en", "pa", "hi"].map((code) => (
                <Pressable
                  key={code}
                  onPress={() => {
                    setLanguage(code as any);
                    setShowLangMenu(false);
                  }}
                  style={{
                    paddingHorizontal: 14,
                    paddingVertical: 12,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: language === code ? "rgba(55, 155, 47, 0.12)" : "transparent"
                  }}
                >
                  <ThemedText style={{ fontSize: 14, fontWeight: "600", color: "#0f172a" }}>
                    {code === "en" ? t("language.english") : code === "pa" ? t("language.punjabi") : t("language.hindi")}
                  </ThemedText>
                  {language === code ? <MaterialIcons name="check" size={18} color="rgb(55, 155, 47)" /> : null}
                </Pressable>
              ))}
            </View>
          ) : null}
        </BlurView>

        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
          <View style={{ marginTop: 12, paddingHorizontal: 20 }}>
            <View
              style={{
                width: "100%",
                height: 190,
                borderRadius: theme.radii.card,
                overflow: "hidden",
                backgroundColor: theme.colors.surface.glass,
                borderWidth: 1,
                borderColor: theme.colors.border.hairline
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(37,99,235,0.18)",
                  "rgba(255,255,255,0.35)",
                  "rgba(236,72,153,0.14)"
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ flex: 1, padding: 18 }}
              >
                <View
                  style={{
                    position: "absolute",
                    width: 220,
                    height: 220,
                    borderRadius: 110,
                    backgroundColor: "rgba(37,99,235,0.10)",
                    top: -110,
                    right: -90
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    width: 180,
                    height: 180,
                    borderRadius: 90,
                    backgroundColor: "rgba(236,72,153,0.10)",
                    bottom: -90,
                    left: -70
                  }}
                />

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                  <View style={{ gap: 6 }}>
                    <ThemedText style={{ fontSize: 18, fontWeight: "800" }}>{t("home.bannerTitle")}</ThemedText>
                    <ThemedText variant="muted" style={{ fontSize: 12, fontWeight: "600" }}>
                      {t("home.bannerSubtitle")}
                    </ThemedText>
                  </View>

                  <View
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 16,
                      backgroundColor: "rgba(255,255,255,0.8)",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <MaterialCommunityIcons name="factory" size={22} color={theme.colors.brand.primary} />
                  </View>
                </View>

                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <View
                      style={{
                        width: 76,
                        height: 76,
                        borderRadius: 26,
                        backgroundColor: "rgba(255,255,255,0.75)",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <MaterialCommunityIcons name="crane" size={34} color="#0ea5e9" />
                    </View>

                    <View
                      style={{
                        width: 76,
                        height: 76,
                        borderRadius: 26,
                        backgroundColor: "rgba(255,255,255,0.75)",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <MaterialCommunityIcons name="truck-fast" size={34} color="#7c3aed" />
                    </View>

                    <View
                      style={{
                        width: 76,
                        height: 76,
                        borderRadius: 26,
                        backgroundColor: "rgba(255,255,255,0.75)",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <MaterialCommunityIcons name="file-document-outline" size={34} color="#059669" />
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </View>

          <View style={{ paddingHorizontal: theme.spacing.screenX, marginTop: 28 }}>
            <ThemedText
              style={{
                fontSize: 36,
                fontWeight: theme.typography.title.weight,
                textAlign: "center",
                lineHeight: 46
              }}
            >
              {t("home.heroTitle")} <ThemedText variant="link">{t("home.heroTitleLink")}</ThemedText>
            </ThemedText>

            <ThemedText
              variant="secondary"
              style={{
                fontSize: 15,
                marginTop: 12,
                textAlign: "center",
                maxWidth: 320,
                alignSelf: "center"
              }}
            >
              {t("home.heroSubtitle")}
            </ThemedText>
          </View>

          <View style={{ marginTop: 28 }}>
            <FlatList
              ref={listRef}
              data={features}
              horizontal
              keyExtractor={(_item, idx) => String(idx)}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}
              snapToInterval={SNAP_INTERVAL}
              decelerationRate="fast"
              onMomentumScrollEnd={(e) => {
                const x = e.nativeEvent.contentOffset.x;
                const idx = Math.round(x / SNAP_INTERVAL);
                setActiveIndex(Math.max(0, Math.min(idx, features.length - 1)));
              }}
              renderItem={({ item }) => (
                <ThemedCard style={{ width: CARD_WIDTH, marginRight: CARD_GAP, padding: 20 }}>
                  <View
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: theme.radii.icon,
                      backgroundColor: item.color,
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16
                    }}
                  >
                    {item.iconSet === "mi" ? (
                      <MaterialIcons name={item.icon as any} size={26} color="white" />
                    ) : (
                      <MaterialCommunityIcons name={item.icon as any} size={26} color="white" />
                    )}
                  </View>

                  <ThemedText style={{ fontSize: 18, fontWeight: "700", marginBottom: 6 }}>{item.title}</ThemedText>

                  <ThemedText variant="muted" style={{ fontSize: 14, fontWeight: "500" }}>
                    {item.desc}
                  </ThemedText>
                </ThemedCard>
              )}
            />

            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 12, gap: 8 }}>
              {features.map((_, i) => (
                <View
                  key={i}
                  style={{
                    width: i === activeIndex ? 18 : 8,
                    height: 8,
                    borderRadius: 99,
                    backgroundColor: i === activeIndex ? theme.colors.brand.primary : theme.colors.border.outline,
                    opacity: i === activeIndex ? 1 : 0.6
                  }}
                />
              ))}
            </View>
          </View>

          <View style={{ paddingHorizontal: theme.spacing.screenX, marginTop: 28, paddingBottom: 30 }}>
            <ThemedButton
              title={t("home.loginToPortal")}
              variant="primary"
              onPress={onLoginPress}
              containerStyle={{ marginBottom: 14 }}
              rightIcon={<MaterialIcons name="arrow-forward" size={20} color={theme.colors.button.primaryText} style={{ marginLeft: 6 }} />}
            />

            <ThemedButton title={t("home.newInvestorRegistration")} variant="outline" />
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
}
