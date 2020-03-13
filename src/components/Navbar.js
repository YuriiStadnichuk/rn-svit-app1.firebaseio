import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../theme";

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <Ionicons style={ styles.ico} name="ios-menu" />
      <Text style={styles.text}>{title}</Text>
      <Ionicons style={styles.ico} name="ios-search" />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 80,
    alignItems: "flex-end",
    justifyContent: "space-around",
    backgroundColor: THEME.MAIN_COLOR,
    paddingBottom: 10,
    flexDirection: "row"
  },
  text: {
    color: "#191825",
    fontSize: 20,
    fontFamily: "poppins-regular"
  },
  ico: {
    alignItems: "flex-start",
    fontSize: 24,
    fontFamily: "poppins-bold",
    paddingBottom: 6,
  }
});
