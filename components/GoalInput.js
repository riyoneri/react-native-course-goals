import { useState } from "react"

import { View, TextInput, Button, StyleSheet } from 'react-native'

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

    return <View style={styles.inputContainer}>
        <TextInput onChangeText={goalInputHandler} value={enteredGoalText} style={styles.textInput} placeholder='Your course goal!' />
        <Button title='Add Goal' onPress={addGoalHandler} />
    </View>
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 24,
        borderBottomColor: "#cccccc",
        borderBottomWidth: 1
    },
    textInput: {
        width: "80%",
        borderColor: "#cccccc",
        borderWidth: 2,
        marginRight: 6,
        padding: 6
    },
})