import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  const addGoalHandler = enteredGoalText => {
    setCourseGoals(previousCourseGoals => [
      { text: enteredGoalText, _id: Math.random() },
      ...previousCourseGoals
    ])
    setIsModalVisible(false)
  }

  const startAddGoalHandler = () => {
    setIsModalVisible(true)
  }

  const endAddGoalHandler = () => {
    setIsModalVisible(false)
  }

  const deleteGoalHandler = goalId => {
    setCourseGoals(previousCourseGoals => {
      return previousCourseGoals.filter(goal => goal._id !== goalId)
    })
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title='Add Goal'
          onPress={startAddGoalHandler}
          color='#a065ec'
        />
        <GoalInput visible={isModalVisible} onAddGoal={addGoalHandler} onCancelAddGoal={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            refreshing={true}
            data={courseGoals}
            renderItem={itemData => {
              return <GoalItem goalData={itemData.item} onDeleteGoal={deleteGoalHandler} />
            }}
            keyExtractor={(item, index) => {
              return item._id
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 26,
  },
  goalsContainer: {
    flex: 5
  },
})