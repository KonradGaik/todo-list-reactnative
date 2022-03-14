import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Todo = (props) => {
    return(
        <View>
            <Text style={[styles.item]}>
                {props.item}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        padding:10,
        margin:5,
        backgroundColor: 'whitesmoke'
    }
})

export default Todo;