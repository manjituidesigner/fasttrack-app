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
        <BlurView intensity={40} style={{ paddingTop: 50 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
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

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
          <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiBR3nLAKrWJdaTWIYeX-TFVFiYOGAmoJl4CEyLbljVoDTmPChShC74rr1zfMV_zW0e3CzSKYUk96FfQ1DLg1xzjkaVens5nnNBB9roBKWFkkD1tDEVsW5-GwbuG6vnDESCQfDnODgkjSD7OZs-7qxMDD-U42z1OVe6cJTgadSbAl9MRXZJD25-xKMpLA7-8_zsB6p7aS4pRDyJbyHenNM71UhYCrEUVRnZm1nhUToHpYo8NIHnrPoRaY_Zgv0WegvZcTPwmb_1t7b"
              }}
              style={{
                width: "100%",
                aspectRatio: 4 / 3,
                borderRadius: theme.radii.card
              }}
            />
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
