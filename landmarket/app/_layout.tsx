import { Stack } from "expo-router";
import "./global.css";
export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f8f8f8" },
        headerTintColor: "#333",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    />
  );
}
