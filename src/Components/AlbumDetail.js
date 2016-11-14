import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

const AlbumDetail = ({ album }) => {
  const { thumbnail_image, title, artist } = album;
  const { textStyles, imageStyles } = styles;
  return (
    <Card>
      <CardItem>
        <View>
          <Image style={imageStyles} source={{ uri: thumbnail_image }} />
        </View>
        <View style={textStyles}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>

    </CardItem>
  </Card>
);
};

const styles = {
  textStyles: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  imageStyles: {
    height: 50,
    width: 50
  }
};

export default AlbumDetail ;
