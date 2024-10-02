import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles/home.style";

export default function Home() {
  return (
    <SafeAreaView>
      <Text style={styles.textStyle}>Home</Text>
    </SafeAreaView>
  );
}
