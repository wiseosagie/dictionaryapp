import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Inputs = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
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
    color: '#fff',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 13,
    flex: 2
  },
  labelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    flex: .6,
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 10,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 50

  },
  containerStyle: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',

  }
};

export { Inputs };
