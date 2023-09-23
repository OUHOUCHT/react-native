import { StatusBar } from "expo-status-bar";
import { StyleSheet, View ,Text } from "react-native";


export default function  LittleLemonHeader() {
    return <View style={styles.container}>
      <Text  numberOfLines={3}
        style={styles.text}>
        Little Lemon
      </Text>

    </View>
}


const styles = StyleSheet.create({

    container : {
        flex : 0.2,
        backgroundColor: '#F4CE14' ,
    },
     text : { padding: 20, fontSize: 30, color: 'black' ,textAlign:'center' }
})