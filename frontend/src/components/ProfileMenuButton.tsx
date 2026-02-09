import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

type Props = {
  initials?: string;
  imageUri?: string;
  onOpenDrawer?: () => void;
};

export function ProfileMenuButton({ initials, imageUri, onOpenDrawer }: Props) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <View style={{ position: "relative" }}>
      <Pressable
        onPress={() => setOpen((v) => !v)}
        hitSlop={10}
        style={{
          width: 44,
          height: 44,
          borderRadius: 22,
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {initials ? (
          <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: "#2563eb", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "white", fontSize: 12, fontWeight: "800" }}>{initials}</Text>
          </View>
        ) : (
          <Image
            source={{
              uri:
                imageUri ??
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDSKmcPIw2kCKjpIeOc4hhRBO_Ci6FAsZhqw6kQYiqjjuoWnlG08drwQItV1pLICZAlA0IqV7kPPfpeRAAF5Ws7_i0EwUD7rEGHWEUZEmkLvp8ApQDM4l-Qied6mXW7ZyFtq1rzJj3-WxqdeegxOTL0Xm9dMDYbAubCHVC9PrTkaW7RsA2aPcog_m2RLqqFzsCYk9jWIJm0mogUcs1_0x56k2DmTUeCFKRIlNZCOuy5v7lURYFzzs9AVtJWK5CX8HTejkoPHoGQESjt"
            }}
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </Pressable>

      {open ? (
        <>
          <Pressable
            onPress={close}
            style={{
              position: "absolute",
              top: 0,
              left: -9999,
              right: -9999,
              bottom: -9999,
              backgroundColor: "transparent",
              zIndex: 998
            }}
          />

          <View
            style={{
              position: "absolute",
              top: 48,
              right: 0,
              width: 220,
              borderRadius: 16,
              overflow: "hidden",
              backgroundColor: "rgba(255,255,255,0.96)",
              borderWidth: 1,
              borderColor: "rgba(203,213,225,0.9)",
              zIndex: 9999,
              elevation: 9999
            }}
          >
            <Pressable
              onPress={() => {
                close();
                onOpenDrawer?.();
              }}
              style={{ paddingHorizontal: 14, paddingVertical: 12, flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <MaterialIcons name="menu" size={18} color="#0f172a" />
              <Text style={{ fontSize: 14, fontWeight: "700", color: "#0f172a" }}>Menu</Text>
            </Pressable>
          </View>
        </>
      ) : null}
    </View>
  );
}
