import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';

export default function Update() {
  const handlePress = () => {
    alert("Updated", "You have successfully updated your profile.");
  };

  return (
    <View style={styles.container}>
      <Button title="Update" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
