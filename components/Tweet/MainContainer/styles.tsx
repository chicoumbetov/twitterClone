import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    tweetHeaderContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    tweetHeaderNames: {
        flexDirection: 'row',
        
    },
    name: {
        marginRight: 5,
        fontWeight: 'bold'
    },
    username: {
        marginRight: 5,
        color: 'grey'
    },
    createdAt: {
        marginRight: 5,
        color: 'grey'
    },
    image: {
        marginVertical: 10,
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 15,
        overflow: 'hidden',
    },
    content: {
        width: '100%',
        lineHeight: 18,
        marginTop: 5,
    }
})

export default styles;