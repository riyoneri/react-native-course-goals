import { useState } from "react"

import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'

const GoalInput = props => {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    const goalInputHandler = enteredText => {
        setEnteredGoalText(enteredText)
    }

    const addGoalHandler = () => {
        if (enteredGoalText !== '') {
            props.onAddGoal(enteredGoalText)
            setEnteredGoalText("")
        }
    }

    return <Modal visible={props.visible} animationType="slide" >
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/goal.png')} />
            <TextInput
                onChangeText={goalInputHandler}
                value={enteredGoalText}
                style={styles.textInput}
                placeholder='Your course goal!'
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button onPress={props.onCancelAddGoal} title="Cancel" color="#f31282" />
                </View>
                <View style={styles.button}>
                    <Button title='Add Goal' onPress={addGoalHandler} color="#b180f0" />
                </View>
            </View>
        </View>
    </Modal>
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#311b6b"
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        width: "80%",
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderRadius: 6,
        borderWidth: 2,
        marginRight: 6,
        padding: 16
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
    button: {
        marginHorizontal: 16,
        width: 100
    }
})