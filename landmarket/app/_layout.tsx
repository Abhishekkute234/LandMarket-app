import { Stack } from "expo-router";

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
