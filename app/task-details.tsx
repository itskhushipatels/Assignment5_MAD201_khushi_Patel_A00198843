import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTasks } from '../context/TaskContext';

export default function TaskDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();  // 👈 typed id as string
  const { tasks, toggleComplete, removeTask } = useTasks();

  if (!id) {
    return <Text>Invalid task id.</Text>;
  }

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return <Text>Task not found.</Text>;
  }

  function handleDelete() {
    Alert.alert("Delete Task", "Are you sure?", [
      { text: "Cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          removeTask(id);        // 👈 we can safely use id here
          router.back();
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.status}>
        Status: {task.completed ? "Completed" : "Pending"}
      </Text>

      {task.description ? (
        <Text style={styles.desc}>{task.description}</Text>
      ) : null}

      <TouchableOpacity
        style={styles.button}
        onPress={() => toggleComplete(id)}   // 👈 same here
      >
        <Text style={styles.btnText}>
          {task.completed ? "Mark as Pending" : "Mark as Completed"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.delete} onPress={handleDelete}>
        <Text style={styles.deleteText}>Delete Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold" },
  status: { fontSize: 16, marginVertical: 10 },
  desc: { fontSize: 14, color: "#444", marginBottom: 20 },
  button: {
    backgroundColor: "#2196F3",
    padding: 14,
    borderRadius: 8,
    marginBottom: 15,
  },
  btnText: { color: "white", fontWeight: "bold", textAlign: "center" },
  delete: { backgroundColor: "red", padding: 14, borderRadius: 8 },
  deleteText: { color: "white", fontWeight: "bold", textAlign: "center" },
});
