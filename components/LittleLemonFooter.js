import { View ,Text, StyleSheet } from "react-native";



export default function LittleLemonFooter(){

    return <View  style={styles.container}>
            <Text style={styles.title}>All rights reserved by Little Lemon, 2022{' '}

            </Text>
         </View>
}

const styles = StyleSheet.create( {
    container : {
        paddingBottom : 10
    },
    title : {
        color : "red",
        fontSize : 18,
        backgroundColor :"yellow",
    }
})