import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

export default function GoalItem({item, onDeleteItem}) {
  return (
    <View key={item} style={styles.goalItem}>
      <Pressable
        style={({pressed}) => pressed && styles.pressedItem}
        android_ripple={{color: '#5e0acc'}}
        onPress={() => onDeleteItem(item.id)}>
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 10,
    borderWidth: 0.4,

    fontSize: 16,
    borderRadius: 8,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: '#fff',
    padding: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
