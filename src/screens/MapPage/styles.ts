import { StyleSheet,Dimensions } from "react-native";
import {theme} from "../../global/styles/theme"



export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: theme.colors.light100,
        alignItems: "center",
        justifyContent: "center",
    },
    map:{
        width: Dimensions.get('window').width,
        //height: Dimensions.get('window').height*.85,
        flex:3,
        //backgroundColor: theme.colors.primary150,
        alignSelf: 'flex-end',

    },
    textContainer:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.light100,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*.15,
        borderColor:theme.colors.primary100,
        borderWidth: 3,
    },
    title:{
        color: theme.colors.dark100,
        fontSize:24
    },
    text:{
        color: theme.colors.dark50,
        fontSize:18,
        textAlign: 'center',
    }
})