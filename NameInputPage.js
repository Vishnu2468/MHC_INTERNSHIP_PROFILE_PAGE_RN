import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function NameInputPage() {
  const [name, setName] = useState('');

  const handlePress = () => {
    alert(`Hello, ${name}! 👋`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>What's your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your name"
        onChangeText={(text) => setName(text)}
      />
      <Button title="Say Hello" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    padding: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: 200,
    borderColor: '#90caf9',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
});