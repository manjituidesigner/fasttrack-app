import { StatusBar } from "expo-status-bar";
import { useEffect, useMemo, useRef, useState } from "react";
import { View, ScrollView, Image, Pressable, FlatList, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../theme/useTheme";
import { ThemedText } from "../components/ThemedText";
import { ThemedCard } from "../components/ThemedCard";
import { ThemedButton } from "../components/ThemedButton";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

type Props = {
  onLoginPress: () => void;
};

export function HomeScreen({ onLoginPress }: Props) {
  const theme = useTheme();

  const features = useMemo(
    () => [
      {
        icon: "rocket-launch",
        iconSet: "mci" as const,
        title: "Instant Filing",
        desc: "Unified application for all clearances.",
        color: theme.colors.brand.primary
      },
      {
        icon: "radar",
        iconSet: "mci" as const,
        title: "Live Tracking",
        desc: "Monitor application status in real-time.",
        color: "#059669"
      },
      {
        icon: "verified-user",
        iconSet: "mi" as const,
        title: "E-Certificates",
        desc: "Download approved certificates instantly.",
        color: "#7c3aed"
      },
      {
        icon: "domain-verification",
        iconSet: "mci" as const,
        title: "Single Window",
        desc: "One portal, multiple departments.",
        color: "#0ea5e9"
      },
      {
        icon: "shield-check",
        iconSet: "mci" as const,
        title: "Secure & Trusted",
        desc: "Govt-grade security for your data.",
        color: "#f59e0b"
      }
    ],
    [theme.colors.brand.primary]
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
        <BlurView intensity={40} style={{ paddingTop: 24 }}>
          <View
            style={{
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
                  FastTrack Punjab
                </ThemedText>
                <ThemedText
                  variant="muted"
                  style={{
                    fontSize: theme.typography.headerSubtitle.size,
                    fontWeight: theme.typography.headerSubtitle.weight,
                    textTransform: "uppercase"
                  }}
                >
                  Govt. of Punjab
                </ThemedText>
              </View>
            </View>

            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: theme.radii.badge,
                backgroundColor: theme.colors.surface.glass
              }}
            >
              <ThemedText style={{ fontSize: 12, fontWeight: "700" }}>EN</ThemedText>
              <MaterialIcons name="expand-more" size={16} color={theme.colors.text.muted} />
            </Pressable>
          </View>
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
                    <ThemedText style={{ fontSize: 18, fontWeight: "800" }}>Punjab Industrial Portal</ThemedText>
                    <ThemedText variant="muted" style={{ fontSize: 12, fontWeight: "600" }}>
                      FastTrack approvals for businesses
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
                fontSize: theme.typography.title.size,
                fontWeight: theme.typography.title.weight,
                textAlign: "center",
                lineHeight: theme.typography.title.lineHeight
              }}
            >
              Invest. Build. <ThemedText variant="link">Grow.</ThemedText>
            </ThemedText>

            <ThemedText
              variant="secondary"
              style={{
                fontSize: theme.typography.body.size,
                marginTop: 12,
                textAlign: "center",
                maxWidth: 320,
                alignSelf: "center"
              }}
            >
              Your single-window gateway for industrial approvals in Punjab.
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
              title="Login to Portal"
              variant="primary"
              onPress={onLoginPress}
              containerStyle={{ marginBottom: 14 }}
              rightIcon={<MaterialIcons name="arrow-forward" size={20} color={theme.colors.button.primaryText} style={{ marginLeft: 6 }} />}
            />

            <ThemedButton title="New Investor Registration" variant="outline" />
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
}
