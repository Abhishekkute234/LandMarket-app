import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          color: "#4b5563",
          fontSize: 18,
          marginVertical: 20,
        }}
      >
        Welcome to the Restat
      </Text>
      <Link href="/sign-in">Sign in</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/[id]">Propertiers</Link>
    </View>
  );
}
