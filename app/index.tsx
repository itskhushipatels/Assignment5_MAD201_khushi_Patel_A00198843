import { Redirect } from "expo-router";

export default function Index() {
  // When the app opens at "/", immediately go to the All Tasks tab
  return <Redirect href="/(tabs)/all-tasks" />;
}
