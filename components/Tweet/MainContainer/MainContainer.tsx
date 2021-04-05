import { Ionicons } from '@expo/vector-icons'
import moment from 'moment';

import React from 'react'
import { Image, Text, View } from 'react-native'
import { TweetType } from '../../../types'
import Footer from './Footer/Footer'
import styles from './styles'

export type MainContainerProps = {
    tweet: TweetType,
}

const MainContainer = ({tweet}: MainContainerProps) => {
    return (
        <View style={styles.container}>
            {/* user info */}
            <View style={styles.tweetHeaderContainer}>
                <View style={styles.tweetHeaderNames}>
                    <Text style={styles.name}>{tweet.user.name}</Text>
                    <Text style={styles.username}>@{tweet.user.username}</Text>
                    {/*<Text style={styles.createdAt}>{tweet.createdAt}</Text>*/}
                    <Text style={styles.createdAt}>{moment(tweet.createdAt).fromNow()}</Text>
                </View>
                
                <Ionicons name="chevron-down" size={16} color="grey"/>
            </View>
            
            {/* content */}
            <View style={styles.content}>
                <Text>{tweet.content}</Text>
                {!!tweet.image && <Image style={styles.image} source={{ uri: tweet.image }} />}
                
            </View>
            {/* tweet footer */}
            <View>
                <Footer tweet={tweet} />
            </View>
            
        </View>
    )
}

export default MainContainer
