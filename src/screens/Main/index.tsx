import { useEffect, useState } from 'react';

import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import uuid from 'react-native-uuid';

import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Clipboard from '../../assets/Clipboard/Clipboard.png';
import Logo from '../../assets/Logo/Logo.png';
import { Task } from '../../components/Task';
import { styles } from './styles';

type TaskProps = {
  uuid: string | number[];
  taskCompleted: boolean;
  title: string;
}

export function Main() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [completeTaskCounter, setCompleteTaskCounter] = useState(0);
  const [newTaskName, setNewTaskName] = useState('');

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('@todo_ignite');

      if (data) {
        setTasks(JSON.parse(data));
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const count = tasks.filter((task) => task.taskCompleted === true);
    setCompleteTaskCounter(count.length);
  }, [tasks]);

  async function handleTaskAdd() {
    const newTasks = [...tasks, {
      uuid: uuid.v4(),
      taskCompleted: false,
      title: newTaskName,
    }];

    try {
      const newTasksJson = JSON.stringify(newTasks);
      await AsyncStorage.setItem('@todo_ignite', newTasksJson);

      getData();
    } catch (e) {
      Alert.alert('Erro ao registrar nova tarefa, tente novamente mais tarde.');
    }

    setNewTaskName('');
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={Logo}
        />
        <View style={styles.newTask}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            onChangeText={setNewTaskName}
            value={newTaskName}
            onSubmitEditing={() => handleTaskAdd()}
            placeholderTextColor="#808080"
          />
          <TouchableOpacity style={styles.button} onPress={() => handleTaskAdd()}>
            <Feather name="plus-circle" size={16} color="#F2F2F2" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tasksContainer}>
        <View style={styles.tasksStatus}>
          <View style={styles.statusBox}>
            <Text style={[styles.statusTitle, { color: '#4EA8DE' }]}>Criadas</Text>
            <View style={styles.countBox}>
              <Text style={styles.count}>{tasks.length}</Text>
            </View>
          </View>

          <View style={styles.statusBox}>
            <Text style={[styles.statusTitle, { color: '#8284FA' }]}>Concluídas</Text>
            <View style={styles.countBox}>
              <Text style={styles.count}>
                {completeTaskCounter}
              </Text>
            </View>
          </View>
        </View>

        {tasks.length > 0
          ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={tasks}
              keyExtractor={(item) => String(item.uuid)}
              renderItem={({ item }) => (
                <Task
                  uuid={item.uuid}
                  taskCompleted={item.taskCompleted}
                  title={item.title}
                  getData={getData}
                />
              )}
            />
          )
          : (
            <View style={styles.noTasksContainer}>
              <View style={styles.separatorLine} />

              <Image style={styles.clipboardImage} source={Clipboard} />
              <Text style={[styles.clipboardText, { fontWeight: '700' }]}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.clipboardText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
      </View>
    </View>
  );
}
