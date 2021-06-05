import React, {useEffect } from 'react'
import {View ,StyleSheet,Image,SafeAreaView,StatusBar} from 'react-native';


const SplashScreen =({navigation})=>{
    useEffect(()=>{
        const   init = async () => {
          setTimeout(() => {
           navigation.navigate("WelcomeScreen")
          }, 5000);
        
        };init();
      })

    return(
        <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#00B2FF"/>
        <View style={styles.container}>
            <View>
      <Image style={styles.logo} source={require('../assets/1.gif')} />
        </View>
        </View>
</SafeAreaView>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    logo: {
      width: 400,
      height: 800,
      borderRadius: 100,
      alignContent:"center"
  
  
    },
  
  })