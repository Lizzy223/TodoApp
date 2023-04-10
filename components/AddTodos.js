import React, {useState} from 'react'
import { FlatList, StyleSheet, Text, View , TextInput, Button} from 'react-native';

const AddTodos = ({submitHandler}) => {
  
  const [text, setText] = useState('');
  
  const changeHandler = (val) =>{
    setText(val)
  }

    return (
    <View>
        <TextInput 
        style={styles.input}
            placeholder='new todo...'
            onChangeText={changeHandler}
        />
        <Button onPress={()=>submitHandler(text, setText)} title='Add todo' color='coral' />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        marginBottom:10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

export default AddTodos