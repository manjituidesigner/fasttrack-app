import type { PropsWithChildren, ReactNode } from "react";
import type { PressableProps, ViewStyle, TextStyle } from "react-native";
import { Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import { useTheme } from "../theme/useTheme";

type Variant = "primary" | "outline";

type Props = PropsWithChildren<PressableProps> & {
  title: string;
  variant?: Variant;
  rightIcon?: ReactNode;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export function ThemedButton({
  title,
  variant = "primary",
  rightIcon,
  containerStyle,
  textStyle,
  ...rest
}: Props) {
  const theme = useTheme();

  const baseStyle: ViewStyle = {
    height: 56,
    borderRadius: theme.radii.button,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  };

  const variantStyle: ViewStyle =
    variant === "primary"
      ? {
          backgroundColor: theme.colors.button.primaryBg
        }
      : {
          borderWidth: 1,
          borderColor: theme.colors.button.outlineBorder,
          backgroundColor: "transparent"
        };

  const textColor = variant === "primary" ? theme.colors.button.primaryText : theme.colors.button.outlineText;

  return (
    <Pressable {...rest} style={[baseStyle, variantStyle, containerStyle]}>
      <ThemedText
        style={[
          {
            color: textColor,
            fontSize: theme.typography.button.size,
            fontWeight: theme.typography.button.weight
          },
          textStyle
        ]}
      >
        {title}
      </ThemedText>
      {rightIcon}
    </Pressable>
  );
}
