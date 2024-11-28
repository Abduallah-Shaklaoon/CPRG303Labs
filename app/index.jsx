/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';


export default function App() {
  const [taskList, setTaskList] = useState([
    "Do laundry",
    "Go to the gym",
    "Walk the dog"
  ]);
  const addTask = (task) => {   
    setTaskList([...taskList, task]);
    }
  return (
      <SafeAreaView>
        <ToDoList taskList={taskList}/>
        <ToDoForm addTask ={addTask}/>
      </SafeAreaView>
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
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});