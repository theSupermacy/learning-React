import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({onPress,children}) => {
  const { textStyle, buttonStyle } = styles;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
    <Text style={textStyle} >
    {children}
    </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#00ff00',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5
    }
}
export default Button;
