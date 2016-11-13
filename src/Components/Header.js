import React from 'react';
import { Text, View } from 'react-native';

const app = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
    <Text style={textStyle} >{props.headerName}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#FFFF88',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 11,
      height: 11
    },
    shadowOpacity: 1
  },
  textStyle: {
    fontSize: 20
  }
};

export default app;
