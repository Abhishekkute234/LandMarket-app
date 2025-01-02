import { View, Text } from "react-native";

export default function RootLayout() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to my app</Text>
    </View>
  );
}
