import type { TextProps } from "react-native";
import { StyleSheet, Text } from "react-native";
import { useTheme } from "../theme/useTheme";
import { useI18n } from "../i18n/I18nProvider";

type Variant = "primary" | "secondary" | "muted" | "inverse" | "link";

type Props = TextProps & {
  variant?: Variant;
};

export function ThemedText({ variant = "primary", style, ...rest }: Props) {
  const theme = useTheme();
  const { language } = useI18n();

  const flattenedStyle = StyleSheet.flatten(style);
  const weight = flattenedStyle?.fontWeight;
  const defaultFontFamily =
    language === "hi"
      ? weight === "900"
        ? "NotoSansDevanagari_900Black"
        : weight === "800"
          ? "NotoSansDevanagari_800ExtraBold"
          : weight === "700" || weight === "bold"
            ? "NotoSansDevanagari_700Bold"
            : weight === "600"
              ? "NotoSansDevanagari_600SemiBold"
              : weight === "500"
                ? "NotoSansDevanagari_500Medium"
                : "NotoSansDevanagari_400Regular"
      : language === "pa"
        ? weight === "900"
          ? "NotoSansGurmukhi_900Black"
          : weight === "800"
            ? "NotoSansGurmukhi_800ExtraBold"
            : weight === "700" || weight === "bold"
              ? "NotoSansGurmukhi_700Bold"
              : weight === "600"
                ? "NotoSansGurmukhi_600SemiBold"
                : weight === "500"
                  ? "NotoSansGurmukhi_500Medium"
                  : "NotoSansGurmukhi_400Regular"
        : weight === "900"
          ? "Inter_900Black"
          : weight === "800"
            ? "Inter_800ExtraBold"
            : weight === "700" || weight === "bold"
              ? "Inter_700Bold"
              : weight === "600"
                ? "Inter_600SemiBold"
                : weight === "500"
                  ? "Inter_500Medium"
                  : "Inter_400Regular";

  const fontFamily = flattenedStyle?.fontFamily ?? defaultFontFamily;

  const color =
    variant === "primary"
      ? theme.colors.text.primary
      : variant === "secondary"
        ? theme.colors.text.secondary
        : variant === "muted"
          ? theme.colors.text.muted
          : variant === "inverse"
            ? theme.colors.text.inverse
            : theme.colors.text.link;

  return <Text {...rest} style={[{ color, fontFamily }, style]} />;
}
