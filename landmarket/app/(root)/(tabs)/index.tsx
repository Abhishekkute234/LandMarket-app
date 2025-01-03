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
      <Text className="font-bold text-slate-400 text-lg my-20">
        Welcome to the Restat
      </Text>
      <Link href="/sign-in">Sign in</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/[id]">Propertiers</Link>
    </View>
  );
}
