import { StatusBar } from "expo-status-bar";
import { View, ScrollView, TextInput, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../theme/useTheme";
import { ThemedText } from "../components/ThemedText";
import { useI18n } from "../i18n/I18nProvider";

type Props = {
  onBack: () => void;
};

export function ChangePasswordScreen({ onBack }: Props) {
  const theme = useTheme();
  const { t } = useI18n();

  return (
    <>
      <StatusBar style="dark" />

      <LinearGradient colors={theme.colors.background.gradient} style={{ flex: 1 }}>
        <BlurView intensity={40}>
          <View
            style={{
              height: 56,
              paddingHorizontal: 20,
              flexDirection: "row",
              alignItems: "center",
              borderBottomWidth: 1,
              borderColor: theme.colors.border.hairline
            }}
          >
            <Pressable
              onPress={onBack}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "rgba(255,255,255,0.6)",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <MaterialIcons name="arrow-back" size={22} color="#1f2937" />
            </Pressable>

            <ThemedText
              style={{
                position: "absolute",
                left: "50%",
                transform: [{ translateX: -50 }],
                fontSize: 18,
                fontWeight: "800",
                color: theme.colors.text.primary
              }}
            >
              {t("changePassword.title")}
            </ThemedText>
          </View>
        </BlurView>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
          <View style={{ maxWidth: 420, width: "100%", alignSelf: "center", paddingHorizontal: 24, paddingTop: 18 }}>
            {[
              { key: "current", label: t("changePassword.current") },
              { key: "new", label: t("changePassword.new") },
              { key: "confirm", label: t("changePassword.confirm") }
            ].map((f) => (
              <View key={f.key} style={{ marginTop: 12 }}>
                <ThemedText style={{ fontSize: 12, fontWeight: "800", color: theme.colors.text.muted, marginBottom: 8, textTransform: "uppercase" }}>
                  {f.label}
                </ThemedText>
                <TextInput
                  secureTextEntry
                  placeholder={f.label}
                  placeholderTextColor="#94a3b8"
                  style={{
                    fontFamily: "Inter_500Medium",
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
              <ThemedText style={{ color: "white", fontSize: 16, fontWeight: "800" }}>{t("changePassword.save")}</ThemedText>
            </Pressable>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
}
