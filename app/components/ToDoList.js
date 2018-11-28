import React from 'react';
import { StyleSheet,
         Text,
         View,
         TextInput,
         ScrollView,
         TouchableOpacity
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import List from './List';

export default class ToDoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskText: '',
    }
  }

  render() {

    let tasks = this.state.tasks.map((task, key) => {
      return <List 
                key={key} 
                keyval={key} 
                task={task}
                deleteTask = {()=>this.deleteTask(key)}
                checkTask = {()=>this.checkTask(key)}
              />
    })

    return (
      <View style={styles.container}>
        <View style={styles.header}>
         <Text style={styles.headerTitle}>ToDoList</Text>
        </View>
        <ScrollView style={styles.scroll}>
          {tasks}
        </ScrollView>

        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            placeholder='Введіть задачу'
            onChangeText={(text) => this.setState({taskText: text})}
            value={this.state.taskText}
          >
          </TextInput>
        </View>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={this.addTask}
        >
          <AntDesign 
            name='plus'
            size={40}
            color='white'
          />
        </TouchableOpacity>
      </View>
    );
  }

  addTask = () => {
    if (this.state.taskText) {
      const date = new Date();
      const newTask = { 'date': `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`,
                        'text': this.state.taskText,
                        'done': false};
      this.setState({tasks: [...this.state.tasks, newTask]});
      this.setState({taskText: ''});
    }
  }

  deleteTask = key => {
    this.state.tasks.splice(key, 1);
    this.setState({tasks: this.state.tasks});
  }

  checkTask = key => {
    const newTasks = this.state.tasks
      .map((task, i) => i !== key? task : {date: task.date, text: task.text, done: !task.done});
    this.setState({tasks: newTasks});
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'rgb(112, 196, 235)',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 43,
    borderTopColor: 'rgb(137, 207, 240)',
  },
  headerTitle: {
    fontSize: 22,
  },
  scroll: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    backgroundColor: 'rgb(129, 201, 235)',
    padding: 25,
    color: 'white'
  },
  addButton: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    zIndex: 11, 
    width: 70,
    height: 70,
    backgroundColor: 'rgb(112, 196, 235)',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  }
});
