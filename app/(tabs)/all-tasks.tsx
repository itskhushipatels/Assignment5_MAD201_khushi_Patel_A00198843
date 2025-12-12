import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useTasks } from '../../context/TaskContext';
import TaskItem from '../../components/TaskItem';

export default function AllTasks() {
  const router = useRouter();
  const { tasks } = useTasks();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 10 }}
        ListEmptyComponent={
          <Text style={styles.empty}>No tasks yet. Tap + to add.</Text>
        }
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onPress={() => router.push({
              pathname: "/task-details",
              params: { id: item.id }
            })}
          />
        )}
      />

      <TouchableOpacity
        style={styles.add}
        onPress={() => router.push("/add-task")}
      >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  empty: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#666',
  },
  add: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: '#2196F3',
    width: 55,
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    color: "white",
    fontSize: 32,
    marginTop: -3,
  },
});
