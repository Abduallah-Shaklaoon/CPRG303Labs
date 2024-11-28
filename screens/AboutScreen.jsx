

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import { Button } from 'react-native-web';
import MainLayout from '../layouts/MainLayout';


export default function AboutScreen() {
    const currDate = new Date().toLocaleDateString();
    return (
      
    <MainLayout>
    <SafeAreaView>
        <Text>About: This app is a to do list app! I am Abduallah Shaklaoon, and it is {currDate}</Text>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
    </MainLayout>

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