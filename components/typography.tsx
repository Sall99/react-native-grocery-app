import { Colors } from "@/constants";
import React from "react";
import { Text, TextStyle, StyleSheet } from "react-native";

type TypographyVariant =
  | "displayLarge"
  | "displayMedium"
  | "displaySmall"
  | "titleLarge"
  | "titleMedium"
  | "titleSmall"
  | "bodyLarge"
  | "bodyMedium"
  | "bodySmall"
  | "labelLarge"
  | "labelMedium"
  | "labelSmall";

type TypographyProps = {
  variant?: TypographyVariant;
  color?: string;
  align?: "auto" | "left" | "right" | "center" | "justify";
  style?: TextStyle;
  children: React.ReactNode;
  numberOfLines?: number;
};

export const Typography: React.FC<TypographyProps> = ({
  variant = "bodyMedium",
  color = "#000000",
  align = "left",
  style = {},
  children,
  numberOfLines,
  ...props
}) => {
  return (
    <Text
      style={[styles[variant], { color, textAlign: align }, style]}
      numberOfLines={numberOfLines}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  displayLarge: {
    fontSize: 57,
    fontWeight: "400",
    lineHeight: 64,
    letterSpacing: -0.25,
    fontFamily: "PoppinsRegular",
  },
  displayMedium: {
    fontSize: 45,
    fontWeight: "400",
    lineHeight: 52,
    letterSpacing: 0,
    fontFamily: "PoppinsRegular",
  },
  displaySmall: {
    fontSize: 36,
    fontWeight: "400",
    lineHeight: 44,
    letterSpacing: 0,
    fontFamily: "PoppinsRegular",
  },
  titleLarge: {
    fontSize: 25,
    lineHeight: 28,
    letterSpacing: 0,
    fontFamily: "PoppinsSemiBold",
    color: "red",
  },
  titleMedium: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.15,
    fontFamily: "PoppinsMedium",
  },
  titleSmall: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.1,
    fontFamily: "PoppinsMedium",
  },
  bodyLarge: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: 0.5,
    color: "#EBFFD7",
    fontFamily: "PoppinsRegular",
  },
  bodyMedium: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0.25,
    color: Colors.light.textSecondary,
    fontFamily: "PoppinsRegular",
  },
  bodySmall: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
    letterSpacing: 0.4,
    color: "#EBFFD7",
    fontFamily: "PoppinsRegular",
  },
  labelLarge: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.1,
    fontFamily: "PoppinsRegular",
  },
  labelMedium: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0.5,
    fontFamily: "PoppinsMedium",
  },
  labelSmall: {
    fontSize: 11,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0.5,
    fontFamily: "PoppinsRegular",
  },
});
