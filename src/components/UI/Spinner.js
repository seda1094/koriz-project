import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { THEME } from "../../theme";

export function Spinner(props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={props.size} color={THEME.DARK_GREY} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    margin: 10
  },

});