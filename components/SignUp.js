import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
const Test = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputBox} placeholder="아이디:"></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: 250,
    height: 40,
    alignSelf: 'center',
    marginBottom: 30,
  },
});
export default Test;
