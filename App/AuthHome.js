import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, TouchableOpacity} from 'react-native';

export default function AuthHome({navigation}) {
    
    const [userState, setUserState] = useState(null);

    useEffect(async () => {

        let idToken = await AsyncStorage.getItem('userToken');
 
        if (idToken !== "null" && idToken !== null) {
            setUserState(true)
        }

    }, []);

    return (
        <View>
            {
                userState == null ? 
                (
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('login')}>
                            <Text>Login</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View>
                        <Text>Welcome Back</Text>
                        <TouchableOpacity onPress={async () => {
                            await AsyncStorage.setItem("userToken", "null");
                            navigation.navigate('login')
                        }}>
                            <Text style={{
                            alignSelf: 'center'
                            }}>Log out</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
    )
}
