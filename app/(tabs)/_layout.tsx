import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="all-tasks"
        options={{ title: "All Tasks" }}
      />
      <Tabs.Screen
        name="completed"
        options={{ title: "Completed" }}
      />
    </Tabs>
  );
}
