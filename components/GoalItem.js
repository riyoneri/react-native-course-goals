import { StyleSheet, View, Text, Pressable } from "react-native"

const GoalItem = props => {

    return <Pressable onPress={props.onDeleteGoal.bind(this, props.goalData._id)}>
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.goalData.text}</Text>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
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

export default GoalItem