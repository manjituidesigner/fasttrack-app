import { StatusBar } from "expo-status-bar";
import { View, ScrollView, TextInput, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../theme/useTheme";
import { ThemedText } from "../components/ThemedText";
import { useI18n } from "../i18n/I18nProvider";
import { AppHeader } from "../components/AppHeader";

type Props = {
  onBack: () => void;
  onOpenDrawer?: () => void;
};

export function ChangePasswordScreen({ onBack, onOpenDrawer }: Props) {
  const theme = useTheme();
  const { t } = useI18n();

  return (
    <>
      <StatusBar style="dark" />

      <LinearGradient colors={theme.colors.background.gradient} style={{ flex: 1 }}>
        <BlurView intensity={40}>
          <AppHeader
            containerStyle={{ borderBottomWidth: 1, borderColor: theme.colors.border.hairline }}
            contentStyle={{ paddingHorizontal: 20 }}
            left={
              <Pressable
                onPress={onBack}
                hitSlop={10}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  backgroundColor: "rgba(255,255,255,0.6)",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <MaterialIcons name="arrow-back" size={22} color="#1f2937" />
              </Pressable>
            }
            center={<ThemedText style={{ fontSize: 18, fontWeight: "700", color: theme.colors.text.primary }}>{t("changePassword.title")}</ThemedText>}
            right={
              <Pressable
                onPress={onOpenDrawer}
                hitSlop={10}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  backgroundColor: "rgba(255,255,255,0.6)",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <MaterialIcons name="menu" size={22} color="#1f2937" />
              </Pressable>
            }
          />
        </BlurView>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
          <View style={{ maxWidth: 420, width: "100%", alignSelf: "center", paddingHorizontal: 24, paddingTop: 18 }}>
            {[
              { key: "current", label: t("changePassword.current") },
              { key: "new", label: t("changePassword.new") },
              { key: "confirm", label: t("changePassword.confirm") }
            ].map((f) => (
              <View key={f.key} style={{ marginTop: 12 }}>
                <ThemedText style={{ fontSize: 12, fontWeight: "700", color: theme.colors.text.muted, marginBottom: 8, textTransform: "uppercase" }}>
                  {f.label}
                </ThemedText>
                <TextInput
                  secureTextEntry
                  placeholder={f.label}
                  placeholderTextColor="#94a3b8"
                  style={{
                    fontWeight: "500",
                    paddingHorizontal: 16,
                    paddingVertical: 16,
                    borderRadius: 18,
                    backgroundColor: "#ffffff",
                    fontSize: 16
                  }}
                />
              </View>
            ))}

            <Pressable
              style={{
                marginTop: 22,
                paddingVertical: 16,
                borderRadius: 18,
                alignItems: "center",
                backgroundColor: "#4f46e5"
              }}
            >
              <ThemedText style={{ color: "white", fontSize: 16, fontWeight: "700" }}>{t("changePassword.save")}</ThemedText>
            </Pressable>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
}
