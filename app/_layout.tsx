import { Stack } from "expo-router";
import { TaskProvider } from "../context/TaskContext";

export default function RootLayout() {
  return (
    <TaskProvider>
      <Stack>
        {/* Tabs Navigator (All Tasks + Completed) */}
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        {/* Add Task Screen */}
        <Stack.Screen
          name="add-task"
          options={{
            title: "Add Task",
          }}
        />

        {/* Task Details Screen */}
        <Stack.Screen
          name="task-details"
          options={{
            title: "Task Details",
          }}
        />
      </Stack>
    </TaskProvider>
  );
}
