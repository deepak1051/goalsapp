import {Button, StyleSheet, TextInput, View, Modal, Image} from 'react-native';
import React, {useState} from 'react';

export default function GoalInput({onSubmit, isModalVisible, onClose}) {
  const [goalText, setGoalText] = useState('');

  const handleChange = text => {
    setGoalText(text);
  };

  const handleSubmit = () => {
    onSubmit(goalText);
    setGoalText('');
  };

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1682309772037-8da49abb2b84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hbHxlbnwwfHwwfHx8MA%3D%3D',
          }}
          style={styles.goalImage}
        />

        <TextInput
          onChangeText={handleChange}
          style={styles.input}
          placeholder="Your course goal!"
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onClose} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button onPress={handleSubmit} title="Add Goal" color="#5e0acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 20,
    backgroundColor: '#311b6b',
  },

  goalImage: {
    height: 100,
    width: 100,
    objectFit: 'cover',
    borderRadius: 10,
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    width: '40%',
  },
});
