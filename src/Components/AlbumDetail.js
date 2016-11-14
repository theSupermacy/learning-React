import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { thumbnail_image, title, artist, image, url } = album;
  const {
    viewtextStyles,
    imageStyles,
    textStyle,
    viewImageStyle,
    bigImageStyle } = styles;
  return (
    <Card>
      <CardItem>
        <View style={viewImageStyle}>
          <Image style={imageStyles} source={{ uri: thumbnail_image }} />
        </View>
        <View style={viewtextStyles}>
          <Text style={textStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
    </CardItem>

    <CardItem>
      <Image style={bigImageStyle} source={{ uri: image }} />
    </CardItem>

    <CardItem>
      <Button onPress={() => Linking.openURL(url)} >BUY</Button>
    </CardItem>

  </Card>
);
};

const styles = {
  viewtextStyles: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  imageStyles: {
    height: 50,
    width: 50
  },
  textStyle: {
    fontSize: 20
  },
  viewImageStyle: {
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bigImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail ;
