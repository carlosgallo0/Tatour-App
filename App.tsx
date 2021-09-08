import React from "react";
import { StatusBar, SafeAreaView } from "react-native";

import { MapPage } from "./src/screens/MapPage";
export default function App() {
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <MapPage />
    </SafeAreaView>
  );
}
