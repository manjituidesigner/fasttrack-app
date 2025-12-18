import type { TextProps } from "react-native";
import { Text } from "react-native";
import { useTheme } from "../theme/useTheme";

type Variant = "primary" | "secondary" | "muted" | "inverse" | "link";

type Props = TextProps & {
  variant?: Variant;
};

export function ThemedText({ variant = "primary", style, ...rest }: Props) {
  const theme = useTheme();

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

  return <Text {...rest} style={[{ color }, style]} />;
}
