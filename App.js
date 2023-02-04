import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCoursGoals] = useState([])

  const goalInputHandler = enteredText => {
    setEnteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    if (enteredGoalText !== '') {
      setCoursGoals(previousCourseGoals => [
        enteredGoalText,
        ...previousCourseGoals
      ])
      setEnteredGoalText("")
    }
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={goalInputHandler} value={enteredGoalText} style={styles.textInput} placeholder='Your course goal!' />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {courseGoals.map(goal =>
            <View style={styles.goalItem} key={Math.random()}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 26
  },
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
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc"
  },
  goalText: {
    color: "white"
  }
})