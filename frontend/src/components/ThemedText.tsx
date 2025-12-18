import type { TextProps } from "react-native";
import { StyleSheet, Text } from "react-native";
import { useTheme } from "../theme/useTheme";

type Variant = "primary" | "secondary" | "muted" | "inverse" | "link";

type Props = TextProps & {
  variant?: Variant;
};

export function ThemedText({ variant = "primary", style, ...rest }: Props) {
  const theme = useTheme();

  const flattenedStyle = StyleSheet.flatten(style);
  const weight = flattenedStyle?.fontWeight;
  const fontFamily =
    flattenedStyle?.fontFamily ??
    (weight === "900"
      ? "Inter_900Black"
      : weight === "800"
        ? "Inter_800ExtraBold"
        : weight === "700" || weight === "bold"
          ? "Inter_700Bold"
          : weight === "600"
            ? "Inter_600SemiBold"
            : weight === "500"
              ? "Inter_500Medium"
            : "Inter_400Regular");

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
