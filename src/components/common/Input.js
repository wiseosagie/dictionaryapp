import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle,containerStyle } = styles;
  return (
    <View style={containerStyle}>

      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        multiline= {true}

      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    flex: .5,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: 'aliceblue',
    flexDirection: 'row',
    height: 100



  },
  containerStyle: {
    height: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'azure',

  }
};

export { Input };
