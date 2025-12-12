import { View, Text, FlatList } from 'react-native';
import TaskItem from '../../components/TaskItem';
import { useRouter } from 'expo-router';
import { useTasks } from '../../context/TaskContext';

export default function Completed() {
  const router = useRouter();
  const { tasks } = useTasks();

  const completed = tasks.filter(t => t.completed);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={completed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onPress={() => router.push({
              pathname: "/task-details",
              params: { id: item.id }
            })}
          />
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 40 }}>
            No completed tasks.
          </Text>
        }
      />
    </View>
  );
}
