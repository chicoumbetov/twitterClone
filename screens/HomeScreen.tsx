import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Feed from '../components/Feed/Feed';

import tweets from '../data/tweets';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Feed/>
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
