import { Link } from "expo-router";
import { View, Text } from "react-native";
import "./global.css";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="  my-10 font-rubik text-3xl">Welcome to the Restat</Text>
      <Link href="/sign-in">Sign in</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/[id]">Propertiers</Link>
    </View>
  );
}
