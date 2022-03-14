import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView , TextInput} from 'react-native';
import Todo from './Todo';


const TodoList = () => {

    const [title,setTitle] = useState('Zadania do zrobienia!') 
    const [text, setText] = useState()
    const [list,setList] = useState([])

    //ADD ITEM METHOD
    const addItem = () =>{
        const updatedList = list;
        updatedList.push(text);
        setList(updatedList);
        setText('');
    }

    //REMOVE ITEM METHOD
    const deleteItem = (index) => {
        const updatedList = list.filter((todo) => todo !== index)
        setList(updatedList)
    }

    return(
        <View style={{width: '90%', marginBottom: 60, marginTop:20,padding:25}}>
            <Text style={[styles.align, {margin:8}]}>{title}</Text>
            <ScrollView>
                {list.map((x, index) => <Todo item={x} index={index} key={index} delete={deleteItem} />)}
            </ScrollView>
            <View>
                <TextInput style={styles.input} value={text} onChangeText={(text) => setText(text)}/>
                <Button title='Dodaj zadanie' onPress={addItem}></Button>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    align: {
        alignSelf:'center'
    },
    input:{
        borderRadius: 5,
        borderWidth:3,
        marginBottom:8,
        padding:8,
        marginTop:10
    }
})
export default TodoList;