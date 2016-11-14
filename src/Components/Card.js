import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (<View style={styles.cardStyles}>
  {props.children}
    </View>);
};

const styles = {
  cardStyles: {
    borderColor: '#000',
    marginTop: 5,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#ffc',
    elevation: 1
  }
};
export default Card ;
