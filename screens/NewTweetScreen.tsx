import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import ProfilePicture from '../components/ProfilePicture/ProfilePicture';

import Colors from '../constants/Colors';

export default function NewTweetScreen() {

  const [tweet, setTweet] = useState("");
  const [imageUrl, setImageUrl] = useState("")

  const onPostTweet = () => {
    console.log(`Posting the tweet: " ${tweet}
    Image: ${imageUrl}`)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign name="close" size={30} color={Colors.light.tint} />
        <TouchableOpacity style={styles.button} onPress={onPostTweet}>
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
        <ProfilePicture image={'https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg'}/>
        <View style={styles.inputsContainer}>
          <TextInput
            value={tweet}
            onChangeText={(value) => setTweet(value)}
            multiline={true}
            numberOfLines={3}
            placeholder={"What's happening?"}
            style={styles.tweetInput}
          />
          <TextInput
            value={imageUrl}
            onChangeText={(value) => setImageUrl(value)}
            placeholder={"Image url (optional)"}
            style={styles.imageInput}
          />
        </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: 25,

  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  newTweetContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  inputsContainer: {
    marginLeft: 10,
  },
  tweetInput: {
    height: 100,
    maxHeight: 300,
    fontSize: 20,
  },
  imageInput: {

  },
});
