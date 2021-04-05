import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: Colors.light.tint,
        position: "absolute",
        bottom: 15,
        right: 15,
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles;