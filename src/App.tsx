import React from "react";
import { TamaguiProvider } from "tamagui";

import { SafeAreaView } from "react-native";
import { Home } from "./screens/Home";
import { config } from "./theme/config";

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <SafeAreaView style={{ backgroundColor: "#F1FFF3", flex: 1 }}>
        <Home />
      </SafeAreaView>
    </TamaguiProvider>
  );
}
