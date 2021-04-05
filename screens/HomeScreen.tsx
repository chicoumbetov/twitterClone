import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Tweet from '../components/Tweet/Tweet';

import tweets from '../data/tweets';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Tweet tweet={tweets[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    borderWidth: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
});
