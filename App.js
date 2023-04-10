import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import {useState} from 'react'
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodos from './components/AddTodos';
import Sandbox from './components/Sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    {text:'buy cofee', key:'1'},
    {text:'create an app', key:'2'},
    {text:'play on the switch', key:'3'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text, setText) =>{
    if(text.length > 3){
       setTodos((prevTodos) => {
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ]
    })
    setText('')
    } else {
      Alert.alert('OOPS!','Todos must dbe over 3 chars long', [
        {text: 'Understood', onPress: ()=> console.log('alert closed')}
      ])
    }
   
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dissmissed')
    }} >
    <View style={styles.container}>
      {/* header */}
      <Header/>
      
      <View style={styles.content}>
        <AddTodos submitHandler={submitHandler}/>
        {/* to form */}
        <View style={styles.list}>
          <FlatList
          data={todos}
          renderItem={({item})=>(
              <TodoItem item={item} pressHandler={pressHandler} />
          )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list:{
    marginTop:20,
    flex: 1,
  }
});
