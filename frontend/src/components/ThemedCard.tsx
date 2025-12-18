import type { PropsWithChildren } from "react";
import type { ViewProps } from "react-native";
import { View } from "react-native";
import { useTheme } from "../theme/useTheme";

type Props = PropsWithChildren<ViewProps> & {
  variant?: "glass";
};

export function ThemedCard({ variant = "glass", style, children, ...rest }: Props) {
  const theme = useTheme();

  const backgroundColor = variant === "glass" ? theme.colors.surface.glass : theme.colors.surface.glass;

  return (
    <View
      {...rest}
      style={[
        {
          backgroundColor,
          borderRadius: theme.radii.card
        },
        style
      ]}
    >
      {children}
    </View>
  );
}
