import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCoursGoals] = useState([])

  const addGoalHandler = enteredGoalText => {
    setCoursGoals(previousCourseGoals => [
      { text: enteredGoalText, _id: Math.random() },
      ...previousCourseGoals
    ])
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          refreshing={true}
          data={courseGoals}
          renderItem={itemData => {
            return <GoalItem text={itemData.item.text} />
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
  goalsContainer: {
    flex: 5
  },
})