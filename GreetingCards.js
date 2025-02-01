import { View } from "react-native-web"
import { StyleSheet,Text } from "react-native"

export default function GreetingCards({message,emoj}){
    return(
        <View style={styles.card}>
            <Text style={styles.text}>{emoj} {message}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    card:{
        padding:20,
        backgroundColor:"#ffccbc",
        borderRadius:10,
        margin:10,
    },
    text:{
        fontSize:22,
        color:"#d84315",
    }
})