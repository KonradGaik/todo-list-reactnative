import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView,TextInput} from 'react-native';
import Todo from './Todo';


const TodoList = () => {

    const [title,setTitle] = useState('TodoList') 

    return(
        <View style={{width: '90%', marginBottom: 60, marginTop:20,padding:25}}>
            <Text style={[styles.align, {margin:8}]}>{title}</Text>
            <ScrollView>
            <Todo name={'Umyć naczynia'} />
            <Todo name={'jebać putina'} />
            <Todo name={'wyrzucić śmieci'} />
            </ScrollView>
            <View>
                <TextInput style={styles.input}/>
                <Button title='Add item' onPress={() => setTitle('My list')}></Button>
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