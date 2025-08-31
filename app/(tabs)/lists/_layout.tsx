import { Stack } from "expo-router";

export default function MyChallengesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Lists", headerShown: false }}
      />
      <Stack.Screen name="[listId]" />
    </Stack>
  );
}
