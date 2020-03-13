import React from "react";
import { StyleSheet, View } from "react-native";

export const AppCard = props => (
  <View style={{ ...styles.default, ...props.style }}>{props.children}</View> //state для изменения стилей карточки
);

const styles = StyleSheet.create({
  default: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000", //на ios
    shadowRadius: 2, //на ios
    shadowOpacity: 0.3, //на ios
    shadowOffset: { width: 2, height: 2 }, //на ios
    elevation: 8,
    backgroundColor: "#fff",
    borderRadius: 10
  }
});
