MHC_INTERNSHIP_RN ==> MHC_INTERNSHIP_REACT-NATIVE

# MHC_INTERNSHIP_REACT-NATIVE

## Overview
This repository contains a basic profile page built using React Native, allowing users to upload a profile picture at the top of the page.

### Before Uploading and Updating the Profile
![Before Upload](https://github.com/user-attachments/assets/bf61a42f-e7f7-4bd0-9c9d-0e0244ecf924)

### After Uploading and Updating the Profile
![After Upload](https://github.com/user-attachments/assets/41bbfe7d-e6cb-4aea-9507-a3707734edf1)

![Updated Profile](https://github.com/user-attachments/assets/92f247f5-3f6a-45a3-9e5d-38d9e6c231a6)

---

## How to Create a React Native App

1. **Install Node.js and npm** (if not installed already):
   ```sh
   node -v
   npm -v
   ```

2. **Install Expo CLI:**
   ```sh
   npm install -g expo-cli
   ```

3. **Create a new React Native project:**
   ```sh
   expo init MyReactNativeApp
   cd MyReactNativeApp
   ```

4. **Start the development server:**
   ```sh
   npm start
   ```

---

## Important Code Snippets

### Date Picker Component
```jsx
import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';

export default function DateOfBirth() {
  const [date, setDate] = useState(new Date());
  const [isPickerOpen, setPickerOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selected Date:</Text>
      <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
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
```

### Input Fields Component
```jsx
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function InputFields() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Qualification" />
      <TextInput style={styles.input} placeholder="Organization Name" />
      <View style={styles.row}>
        <TextInput style={[styles.input, styles.halfInput]} placeholder="Gender" />
        <TextInput style={[styles.input, styles.halfInput]} placeholder="DOB" />
      </View>
      <TextInput style={styles.input} placeholder="Address" />
      <TextInput style={styles.input} placeholder="Enroll Date" />
      <TextInput style={styles.input} placeholder="Pincode" />
      <TextInput style={styles.input} placeholder="Phone Number" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
  },
  input: {
    width: '100%',
    borderColor: '#90caf9',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  halfInput: {
    width: '48%',
  },
});
```

### Main App Component
```jsx
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Profile from './Profile';

export default function App() {
  return (
    <View style={styles.container}>
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

---

## Features
- Basic profile page setup
- Profile picture upload functionality
- Input fields for user details
- Date picker component

---

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/MHC_INTERNSHIP_REACT-NATIVE.git
   ```
2. Navigate to the project directory:
   ```sh
   cd MHC_INTERNSHIP_REACT-NATIVE
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the app:
   ```sh
   npm start
   ```

---

## Conclusion
This project serves as a foundational React Native app for handling user profile functionalities, including photo uploads and form inputs. Contributions and improvements are welcome!

---

### Author
**Your Name** - *Developer*

---

