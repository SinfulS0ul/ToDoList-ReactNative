import React from 'react';
import { StyleSheet,
         Text,
         View,
         TouchableOpacity
} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

export default class List extends React.Component {
  render() {
    let checked = this.props.task.done;
    return (
      <View key={this.props.keyval}>
        <TouchableOpacity 
          onPress={this.props.checkTask} 
          style={styles.list}
        >
          <View style={styles.task}>
            <Feather
              name={checked? 'check-circle' : 'circle'}
              size={30}
              color='rgb(137, 207, 240)'
            />
              <View>
                <Text style={checked? styles.taskChecked : styles.taskText}>{this.props.task.text}</Text>
                <Text style={styles.taskText}>{this.props.task.date}</Text>
              </View>
          </View>
          <TouchableOpacity 
            onPress={this.props.deleteTask}
            style={styles.deleteBtn}
          >
            <AntDesign
              name='delete'
              size={30}
              color='rgb(137, 207, 240)'
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(137, 207, 240)',
    justifyContent: 'space-between'
  },
  task:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskText: {
    fontSize: 16,
    paddingLeft: 5,
    borderLeftWidth: 10,
    borderLeftColor: '#111111',
  },
  taskChecked: {
    fontSize: 16,
    paddingLeft: 5,
    borderLeftWidth: 10,
    borderLeftColor: '#111111',
    textDecorationLine: 'line-through',
  },
  deleteTask: {
    top: 10,
    bottom: 10,
    backgroundColor: 'rgb(112, 196, 235)',
    alignItems: 'center',
    justifyContent: 'center',
  }
})