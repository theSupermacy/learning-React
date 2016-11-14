import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
class AddList extends Component {
  state: {
    albums :[]
  }

  componentWillMount() {
    console.log('is jdas stat');
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        return this.setState({ albums: response.data });
    });
  }

  setList() {
    if (this.state == null)
      return (<Text key={null}>abhi aaya nahi hain</Text>);
    return (this.state.albums.map(album => <AlbumDetail album={album} key={album.title} />));
  }

  render() {
    return (<View>
    {this.setList()}
    </View>);
  }
}

export default AddList;
