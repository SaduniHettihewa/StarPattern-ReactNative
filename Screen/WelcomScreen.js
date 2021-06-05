import { View ,Text,StyleSheet,ImageBackground , TouchableOpacity,
    Image,SafeAreaView,StatusBar} from "react-native";
import React from 'react'



const WelcomeScreen = ({navigation})=>{
    const img = require("../assets/background.jpg");
return(
    <SafeAreaView style={{ flex: 1 }}>
    <StatusBar backgroundColor="#00B2FF"/>
  <View style={styles.container}>
   <ImageBackground source={img} style={styles.imge}>
       <View>
    
       <Text style={styles.text}> Welcome all</Text>
       <Text style={styles.subtitle}>Let's see star patterns</Text>
       <TouchableOpacity onPress={()=>navigation.navigate("StarSelectionScreen")}>
       <Image source={require("../assets/button.png")} style={styles.button}/>
       </TouchableOpacity>
      </View>
      </ImageBackground>
  </View>
</SafeAreaView>
)

}

export default WelcomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
      },
      imge: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      text: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",  
        fontStyle:"italic" ,
         
      },
   subtitle:{
    color: "white",
    fontSize: 15,
    fontStyle:"italic",
    textAlign: "center",
    marginTop:20

   },
   button:{
     width:60,
     height:60,
     marginLeft:250,
     marginTop:20,
     
   }
  })