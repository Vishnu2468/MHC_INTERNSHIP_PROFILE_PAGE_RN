import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';

export default function Cancel() {
  const handlePress = () => {
    alert("Cancelled", "You have successfully cancelled your profile.");
  };

  return (
    <View style={styles.container}>
      <Button title="Cancel" onPress={handlePress} />
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
