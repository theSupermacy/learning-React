import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/Components/Header';
import AddList from './src/Components/AddList';

const name = 'Its Albums!';


const app = () => (
  <View>
  <Header headerName={name} />
  <AddList />
</View>);

AppRegistry.registerComponent('virginReact', () => app);
