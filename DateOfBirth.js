import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';

export default function DateOfBirth() {
  const [date, setDate] = useState(new Date());
  const [isPickerOpen, setPickerOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selected Date:</Text>
      <Text style={styles.dateText}>
        {date.toLocaleDateString()}
      </Text>
      <Button title="Select Date" onPress={() => setPickerOpen(true)} />
      <DatePicker
        modal
        open={isPickerOpen}
        date={date}
        onConfirm={(selectedDate) => {
          setPickerOpen(false);
          setDate(selectedDate);
        }}
        onCancel={() => setPickerOpen(false)}
        mode="date"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  dateText: {
    fontSize: 16,
    marginBottom: 20,
    color: 'blue',
  },
});
