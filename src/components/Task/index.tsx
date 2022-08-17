import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Trash from '../../assets/Trash/Trash.png';
import { styles } from './styles';

type Props = {
  uuid: string | number[];
  taskCompleted: boolean;
  title: string;
  getData: () => void;
}

async function handleCheckBox(uuid: string | number[], getData: () => void) {
  try {
    const data = await AsyncStorage.getItem('@todo_ignite');

    if (data) {
      const parsedData: Props[] = JSON.parse(data);

      const index = parsedData.findIndex((task) => task.uuid === uuid);
      parsedData[index].taskCompleted = !parsedData[index].taskCompleted;

      const newTasksJson = JSON.stringify(parsedData);
      await AsyncStorage.setItem('@todo_ignite', newTasksJson);

      getData();
    }
  } catch (e) {
    Alert.alert(`${e}`);
  }
}

async function handleDeleteTask(uuid: string | number[], getData: () => void) {
  Alert.alert(
    'Excluir Tarefa',
    'Tem certeza que deseja excluir a tarefa?',
    [
      {
        text: 'Sim',
        onPress: async () => {
          try {
            const data = await AsyncStorage.getItem('@todo_ignite');

            if (data) {
              const parsedData: Props[] = JSON.parse(data);

              const newTodo = parsedData.filter((task) => task.uuid !== uuid);

              const newTasksJson = JSON.stringify(newTodo);
              await AsyncStorage.setItem('@todo_ignite', newTasksJson);

              getData();
            }
          } catch (e) {
            Alert.alert(`${e}`);
          }
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ],
  );
}

export function Task({
  uuid, taskCompleted, title, getData,
}: Props) {
  return (
    <View style={[styles.container, taskCompleted ? styles.checkedContainer : null]}>
      <TouchableOpacity
        onPress={() => handleCheckBox(uuid, getData)}
        hitSlop={{
          top: 20, bottom: 20, left: 20, right: 20,
        }}
        style={taskCompleted ? styles.checkedBox : styles.uncheckedBox}
      >
        {taskCompleted ? <Feather name="check" size={12} color="#F2F2F2" /> : null}
      </TouchableOpacity>

      <Text style={taskCompleted ? styles.completedTaskTitle : styles.uncompletedTaskTitle}>
        {title}
      </Text>

      <TouchableOpacity
        onPress={() => handleDeleteTask(uuid, getData)}
        hitSlop={{
          top: 20, bottom: 20, left: 20, right: 20,
        }}
      >
        <Image style={styles.trash} source={Trash} />
      </TouchableOpacity>
    </View>
  );
}
