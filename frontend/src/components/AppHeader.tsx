import Constants from "expo-constants";
import type { ReactNode } from "react";
import { Platform, StyleProp, View, ViewStyle } from "react-native";

type Props = {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  contentHeight?: number;
};

export function AppHeader({
  left,
  center,
  right,
  containerStyle,
  contentStyle,
  contentHeight = 56
}: Props) {
  const topInset = Platform.OS === "android" ? (Constants.statusBarHeight ?? 0) : (Constants.statusBarHeight ?? 0);

  return (
    <View style={[{ paddingTop: topInset }, containerStyle]}>
      <View
        style={[
          {
            height: contentHeight,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          },
          contentStyle
        ]}
      >
        <View style={{ minWidth: 44, minHeight: 44, justifyContent: "center" }}>{left}</View>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} pointerEvents="none">
          {center}
        </View>
        <View style={{ minWidth: 44, minHeight: 44, justifyContent: "center", alignItems: "flex-end" }}>{right}</View>
      </View>
    </View>
  );
}
