import { StatusBar } from "expo-status-bar";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ComponentType } from "react";
import { View, Image, Pressable, FlatList, Dimensions, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import GovtLogo from "../assets/images/govt logo.svg";
import GetGuidance from "../assets/images/get_guidance.svg";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

type Props = {
  onLoginPress: () => void;
};

export function HomeScreen({ onLoginPress }: Props) {
  type SlideItem =
    | { id: string; titleTop: string; titleBottom: string; image: any }
    | { id: string; titleTop: string; titleBottom: string; Svg: ComponentType<any> };

  const STATUS_BAR_HEIGHT = Constants.statusBarHeight ?? 0;

  const slides = useMemo(
    (): SlideItem[] => [
      {
        id: "s1",
        titleTop: "SINGLE WINDOW",
        titleBottom: "FASTER APPROVALS.",
        image: require("../assets/images/slide-1.png")
      },
      {
        id: "s2",
        titleTop: "TRACK STATUS",
        titleBottom: "IN REAL TIME.",
        image: require("../assets/images/track-status.png")
      },
      {
        id: "s3",
        titleTop: "APPLY ONLINE",
        titleBottom: "ANYTIME.",
        image: require("../assets/images/online-apply.png")
      },
      {
        id: "s4",
        titleTop: "GET GUIDANCE",
        titleBottom: "EASILY.",
        Svg: GetGuidance
      }
    ],
    []
  );

  const CARD_GAP = 14;
  const [cardWidth, setCardWidth] = useState(() => Math.min(260, Math.max(240, SCREEN_WIDTH * 0.76)));
  const snapInterval = cardWidth + CARD_GAP;

  const listRef = useRef<FlatList<SlideItem>>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselWrapWidth, setCarouselWrapWidth] = useState(0);
  const currentIndexRef = useRef(0);

  const viewabilityConfigRef = useRef({ itemVisiblePercentThreshold: 70 });
  const onViewableItemsChangedRef = useRef(
    ({ viewableItems }: { viewableItems: Array<{ index: number | null }> }) => {
      const next = viewableItems?.[0]?.index;
      if (typeof next === "number") {
        currentIndexRef.current = next;
        setActiveIndex(next);
      }
    }
  );

  useEffect(() => {
    if (slides.length <= 1) return;

    const id = setInterval(() => {
      const next = (currentIndexRef.current + 1) % slides.length;
      try {
        listRef.current?.scrollToIndex({ index: next, animated: true, viewPosition: 0.5 });
      } catch {
        setTimeout(() => {
          try {
            listRef.current?.scrollToIndex({ index: next, animated: true, viewPosition: 0.5 });
          } catch {
            // ignore
          }
        }, 50);
      }
      currentIndexRef.current = next;
      setActiveIndex(next);
    }, 3200);

    return () => clearInterval(id);
  }, [slides.length, snapInterval]);

  useEffect(() => {
    if (!carouselWrapWidth) return;

    // Make sure the focused card fits inside the splash card and doesn't overflow the screen.
    // Leave space so adjacent cards are partially visible.
    const nextWidth = Math.round(Math.min(280, Math.max(220, carouselWrapWidth * 0.72)));
    if (nextWidth !== cardWidth) setCardWidth(nextWidth);
  }, [carouselWrapWidth, cardWidth]);

  return (
    <>
      <StatusBar style="dark" />

      <LinearGradient
        colors={["#8CD2F2", "#A8D5E5", "#C8D4F3", "#CDEED1"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: 28 + STATUS_BAR_HEIGHT,
          paddingBottom: 28,
          justifyContent: "center"
        }}
      >
        <View
          style={{
            width: "100%",
            maxWidth: 320,
            alignSelf: "center",
            borderRadius: 34,
            backgroundColor: "rgba(255,255,255,0.62)",
            minHeight: 600,
            height: Math.max(600, Math.round(SCREEN_HEIGHT * 0.82)),
            paddingHorizontal: 18,
            paddingTop: 26,
            paddingBottom: 22
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <Image
              source={require("../assets/images/fasttrack_dark_logo.png")}
              style={{ width: 118, height: 40, resizeMode: "contain" }}
            />
            <GovtLogo width={40} height={40} />
            <Image source={require("../assets/images/ip-logo.png")} style={{ width: 110, height: 40, resizeMode: "contain" }} />
          </View>

          <Text style={{ textAlign: "center", fontSize: 26, fontWeight: "900", marginTop: 6 }}>
            <Text style={{ color: "#1565D8" }}>Invest.</Text> <Text style={{ color: "#F59E0B" }}>Build.</Text>{" "}
            <Text style={{ color: "#22C55E" }}>Grow.</Text>
          </Text>

          <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "500", color: "#64748b", marginTop: 8 }}>
            Your single-window gateway for industrial{"\n"}approvals in Punjab.
          </Text>

          <View
            style={{
              marginTop: 20,
              alignItems: "center"
            }}
            onLayout={(e) => setCarouselWrapWidth(e.nativeEvent.layout.width)}
          >
            <View style={{ width: "100%", borderRadius: 24, overflow: "hidden" }}>
            {(() => {
              const START_SHIFT = 18;
              const basePadding = Math.max(0, (carouselWrapWidth - cardWidth) / 2);
              const sidePadding = Math.max(0, basePadding - START_SHIFT);

              return (
            <FlatList
              ref={listRef}
              data={slides}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: sidePadding }}
              snapToInterval={snapInterval}
              decelerationRate="fast"
              snapToAlignment="center"
              disableIntervalMomentum
              getItemLayout={(_data, index) => ({ length: snapInterval, offset: snapInterval * index, index })}
              onScrollToIndexFailed={() => {
                setTimeout(() => {
                  listRef.current?.scrollToIndex({ index: activeIndex, animated: true, viewPosition: 0.5 });
                }, 50);
              }}
              viewabilityConfig={viewabilityConfigRef.current}
              onViewableItemsChanged={onViewableItemsChangedRef.current}
              renderItem={({ item }) => (
                <View
                  style={{
                    width: cardWidth,
                    marginRight: CARD_GAP,
                    borderRadius: 22,
                    backgroundColor: "white",
                    paddingVertical: 18,
                    paddingHorizontal: 14,
                    borderWidth: 1,
                    borderColor: "rgba(226,232,240,1)",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOpacity: 0.08,
                    shadowRadius: 10,
                    shadowOffset: { width: 0, height: 6 },
                    elevation: 3
                  }}
                >
                  <View
                    style={{
                      width: 140,
                      height: 140,
                      borderRadius: 70,
                      backgroundColor: "rgba(37,99,235,0.10)",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 14
                    }}
                  >
                    {"image" in item ? (
                      <Image source={item.image} style={{ width: 130, height: 130, resizeMode: "contain" }} />
                    ) : (
                      <item.Svg width={130} height={130} />
                    )}
                  </View>

                  <Text style={{ fontSize: 12, fontWeight: "900", letterSpacing: 0.3, color: "#0f172a" }}>{item.titleTop}</Text>
                  <Text style={{ fontSize: 12, fontWeight: "900", letterSpacing: 0.3, color: "#0f172a" }}>{item.titleBottom}</Text>
                </View>
              )}
            />
              );
            })()}
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center", gap: 8, marginTop: 10 }}>
              {slides.map((_, i) => (
                <View
                  key={i}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 99,
                    backgroundColor: i === activeIndex ? "#1565D8" : "#cbd5e1",
                    opacity: i === activeIndex ? 1 : 0.9
                  }}
                />
              ))}
            </View>
          </View>

          <Pressable
            onPress={onLoginPress}
            style={{
              marginTop: 22,
              height: 52,
              borderRadius: 26,
              backgroundColor: "#1565D8",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ color: "white", fontSize: 15, fontWeight: "800" }}>Login to Portal</Text>
          </Pressable>

          <Pressable
            onPress={() => {}}
            style={{ marginTop: 14, height: 44, borderRadius: 22, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ color: "#0f172a", fontSize: 13.5, fontWeight: "700" }}>New Investor Registration</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </>
  );
}
