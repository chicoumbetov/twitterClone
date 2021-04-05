import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import Feed from '../components/Feed/Feed';

import NewTweetButton from '../components/NewTweetButton/NewTweetButton';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Feed/>
      <NewTweetButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
});
