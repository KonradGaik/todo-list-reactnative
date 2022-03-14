import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView , TextInput} from 'react-native';
import Todo from './Todo';


const TodoList = () => {

    const [title,setTitle] = useState('TodoList') 
    const [text, setText] = useState()
    const [list,setList] = useState(['Hello world'])

    const addItem = () =>{
        const updatedList = list;
        updatedList.push(text);
        setList(updatedList);
        setText('');
    }

    return(
        <View style={{width: '90%', marginBottom: 60, marginTop:20,padding:25}}>
            <Text style={[styles.align, {margin:8}]}>{title}</Text>
            <ScrollView>
                {list.map((x, index) => <Todo item={x} index={index} key={index} />)}
            </ScrollView>
            <View>
                <TextInput style={styles.input} value={text} onChangeText={(text) => setText(text)}/>
                <Button title='Add item' onPress={addItem}></Button>
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