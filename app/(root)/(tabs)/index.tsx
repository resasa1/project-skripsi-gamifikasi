import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  //css here, Fuck tailwind css doesnt work 
  const styles = StyleSheet.create({
    welcome: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    
    })
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.welcome}>Welcome to Gamification</Text>
      <Link href="/sign-in">Sign Im</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Property</Link>
    </View>

    
  );
  
}
