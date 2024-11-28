
import React from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView
} from 'react-native';
export default function ToDoList({ taskList }) {
    return (
        <ScrollView>
            {taskList.map((taskList) => (
                <Pressable key={taskList}>
                    <View style={[styles.task]}>
                        <Text style={styles.taskText}>{taskList}</Text>
                    </View>
                </Pressable>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    }
  });