import {
    View, Text, StyleSheet,
    StatusBar,
    TouchableOpacity
} from "react-native";
import React from 'react'




const StarSelectionScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#00B2FF" />
            <Text style={styles.text}>Star pattern algorithms</Text>
            <View>
                <TouchableOpacity
                     onPress={() => navigation.navigate("StarOne")}
                    style={styles.button1}
                >
                    <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}> Star Pattern I </Text>
                </TouchableOpacity >
             

            </View>

        </View>

    )

}

export default StarSelectionScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },

    text: {
        fontSize: 22,
        color: "#007acc",
        fontWeight: "bold",
        alignContent: "center",
        position: "absolute",
        marginLeft: 48,
        marginTop: 20

    },

    button1: {
        borderRadius: 25,
        padding: 10,
        position: "absolute",
        top: 70,
        left: 40,
        backgroundColor: "#71D3E7",
        height: 40,
        width: 250,

    },
    button2: {
        borderRadius: 25,
        padding: 20,
        position: "absolute",
        top: 150,
        left: 40,
        backgroundColor: "#71D3E7",
        height: 40,
        width: 250,
    }
})