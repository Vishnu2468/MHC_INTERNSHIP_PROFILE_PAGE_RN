import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function InputFields(){
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Full Neme"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                placeholder="Qualification"
            />
            <TextInput
                style={styles.input}
                placeholder="Organization Name"
            />
            <View style={styles.row}>
            <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="Gender" 
                />
            <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="DOB" 
                />
            </View>
            <TextInput
                style={styles.input}
                placeholder="Address"
            />
            <TextInput
                style={styles.input}
                placeholder="Enroll Date"
            />
            <TextInput
                style={styles.input}
                placeholder="Pincode"
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
            />
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: "100%",
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
    alignItems:"center",
    width: "100%",
  },
  halfInput: {
    width: "100%",
    marginHorizontal: 5,
  },
});