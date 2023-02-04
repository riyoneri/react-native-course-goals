import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCoursGoals] = useState([])

  const goalInputHandler = enteredText => {
    setEnteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    if (enteredGoalText !== '') {
      setCoursGoals(previousCourseGoals => [
        { text: enteredGoalText, _id: Math.random() },
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
        <FlatList
          refreshing={true}
          data={courseGoals}
          renderItem={itemData => {
            return <View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          }}
          keyExtractor={(item, index) => {
            return item._id
          }}
        />
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