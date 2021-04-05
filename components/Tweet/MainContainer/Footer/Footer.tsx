import { AntDesign, Entypo, EvilIcons, Feather } from '@expo/vector-icons';
import React from 'react'
import { Text, View } from 'react-native'

import tweet from '../../../../data/tweets';
import { TweetType } from '../../../../types';

import styles from './styles';

export type FooterContainerProps = {
    tweet: TweetType,
}

const Footer = ({tweet}: FooterContainerProps) => {
    return (
        <View style={styles.container}>
            {/* Comments */}
            <View style={styles.iconContainer}>
                <Feather name={"message-circle"} size={20} color={'grey'} />
                <Text style={styles.number}>{tweet.numberOfComments}</Text>
            </View>

            <View style={styles.iconContainer}>
                <EvilIcons name={"retweet"} size={28} color={'grey'} />
                <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
            </View>

            <View style={styles.iconContainer}>
                <AntDesign name={"hearto"} size={20} color={'grey'} />
                <Text style={styles.number}>{tweet.numberOfLikes}</Text>
            </View>

            <View style={styles.iconContainer}>
                <EvilIcons name={"share-google"} size={28} color={'grey'} />
                <Text style={styles.number}>{tweet.numberOfShares}</Text>
            </View>
            
            
        </View>
    )
}

export default Footer
