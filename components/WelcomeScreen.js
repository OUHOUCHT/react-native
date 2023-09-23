import { StyleSheet, Text, View} from "react-native"





export default  WelcomeScreen = () => {

    return <View style={styles.container}>
             <Text style={styles.title}  >Welcome to Little Lemon</Text>
             <Text style={styles.description}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>

         </View>
}


const styles = StyleSheet.create({

    container : {
        flex : 1,
    },
    title : {
        fontSize:30,
        fontWeight :'bold',
        textAlign :'center',
        color :"white",
        padding : 30
    } ,

    description : {
        textAlign :'center',
        fontSize : 20,
        padding : 30,
        color : "white"

    }
})