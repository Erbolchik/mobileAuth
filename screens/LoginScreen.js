import React from 'react'
import {View,Text,StyleScheet} from 'react-native'

export default class LoginScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.greeting}>
                    {
                        'Hello again.\n Welcome back'
                    }
                </Text>
            </View>
        );
    }
}

const styles = StyleScheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    greeting:{
        marginTop:32,
        fontSieze:18,
        fontWieght:"400",
        textAlign : "center"

    }
});
