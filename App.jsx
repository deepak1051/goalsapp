import {Button, FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import GoalItem from './src/components/GoalItem';
import GoalInput from './src/components/GoalInput';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const handleSubmit = goal => {
    setGoals(prev => [...prev, {text: goal, id: Math.random().toString()}]);
    setIsModalVisible(false);
  };

  const deleteGoal = goalId => {
    setGoals(prev => prev.filter(goal => goal.id !== goalId));
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="purple"
        onPress={() => setIsModalVisible(true)}
      />
      {isModalVisible && (
        <GoalInput
          onSubmit={handleSubmit}
          isModalVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={data => {
            return data.id;
          }}
          renderItem={({item}) => (
            <GoalItem item={item} onDeleteItem={deleteGoal} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1e085a',
  },

  goalsContainer: {
    marginTop: 10,
    flex: 5,
  },
});
