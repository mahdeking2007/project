import React,{useState, useEffect} from 'react'
import { View, Text,StatusBar, ImageBackground, StyleSheet, SafeAreaView, TextInput, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import fetch from 'node-fetch';
const whome = () => {
    
    const [city, setcity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [placeholder, setPlaceholder] = useState("");
    const [isLoading , setLoading] = useState(false);
    
    const getWeather = () => {
        setPlaceholder(city);
        setLoading(true);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fdfcb6da9eabb90ba9cbcc8417c26b9b`)
        .then(res => res.json())
        .then(res => {
            setLoading(false);
            setWeatherData(res);
            console.log(res)
        })
    }

    return (
        <ImageBackground
        source={{uri:"https://images.unsplash.com/photo-1542662565-7e4b66bae529?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"}}
        style={styles.image}
        >
        <SafeAreaView
        style={{
            flex:1
        }}
        >
        <View style={{padding:10}}>
            <View
            style={styles.textInput1}>
                <TextInput
                style={styles.textInput2}
                placeholder={"ابحث عن مدينتك"}
                onChangeText={(text) => setcity(text)}
                 />
                 {isLoading ? (
                     <ActivityIndicator size="small" color="primary" />
                 ) : (
                    <Icon onPress={() => getWeather()}
                    name="search" size={22} color="#666" style={{
                        alignSelf: 'center',
                    }} />
                 )}
            </View>    
        </View>  

        {weatherData !== null && (
            <View>
            <Text
            style={{
             alignSelf: 'center',

            }}
            > درجةالحرارة في {placeholder} هي {weatherData.main.temp}</Text>
            </View>
        )}

        </SafeAreaView>
        </ImageBackground>
    )
}
export default whome
const styles = StyleSheet.create
({
    image:{
        flex:1
    }, 
    textInput1: {
        backgroundColor: "rgba(255,255,255,0.7)",
        alignContent:"center", 
        alignSelf:"center",
        marginTop: 10,
        width: '100%',
        flexDirection: "row",
        borderRadius:10,
        paddingHorizontal:10,

    }, 
    textInput2: {
     padding: 10,
     flex: 1,
     fontWeight:'600',
     
    }
})
