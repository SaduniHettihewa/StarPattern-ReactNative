import { View ,Text,StyleSheet,ImageBackground , TouchableOpacity,
    Image,SafeAreaView,StatusBar} from "react-native";
import React from 'react'



const StarOne = ({navigation})=>{
  
return(
    <SafeAreaView style={{ flex: 1 }}>
    <StatusBar backgroundColor="#00B2FF"/>
  <View style={styles.container}>
  
       <View>
    
       <Text style={styles.text}> Pattern I </Text>
       <Image source={require("../assets/star1.png")}  style={{marginLeft:130,marginTop:30}}/>
     
      </View>
    
  </View>
</SafeAreaView>
)

}

export default StarOne;
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
        color: "black",
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