import React from 'react';
import { View } from 'react-native';

const CardItem = (props) => {
  return (<View style={styles.cardStyles}>
  {props.children}
    </View>);
};

const styles = {
  cardStyles: {
    borderColor: '#000',
    padding: 5,
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
    borderRadius: 2,
    flexDirection: 'row',
    position: 'relative'
  }
};
export default CardItem ;
