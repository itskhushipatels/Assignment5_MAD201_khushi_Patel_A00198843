import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Task } from '../context/TaskContext';

export default function TaskItem({
  task,
  onPress,
}: {
  task: Task;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{task.title}</Text>
        {task.description ? (
          <Text style={styles.desc} numberOfLines={1}>
            {task.description}
          </Text>
        ) : null}
      </View>

      <Text style={task.completed ? styles.completed : styles.pending}>
        {task.completed ? 'Completed' : 'Pending'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 14,
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 13,
    color: '#666',
  },
  completed: {
    fontSize: 12,
    color: 'green',
    fontWeight: 'bold',
  },
  pending: {
    fontSize: 12,
    color: 'orange',
    fontWeight: 'bold',
  },
});
