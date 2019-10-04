import React from 'react'
import {View,Text,StyleScheet} from 'react-native'

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style = {style.container}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

const styles = StyleScheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});
