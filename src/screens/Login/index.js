import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { StyleSheet, SafeAreaView, View, Text, ImageBackground, Image, Dimensions, TextInput, Alert } from 'react-native';
import Button from '../../components/button.component';
import api from '../../network/api';

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const handleSignInPress = async () => {
        if(email.length === 0 || password.length === 0) {
            Alert.alert("Atenção", "Preencha e-mail e senha para continuar!")
        } else {
            try {
                setIsLoading(true);
                const response = await api.post('/user/login', {
                    login: email,
                    password,
                });
                dispatch({ 
                    type: 'SET_USER',
                    payload: response.data,
                });
            } catch(err) {
                setIsLoading(false);
                Alert.alert("Atenção", 
                err.response.data.message || "Houve um problema com o login, verifique suas credenciais e sua conexão!")
            }
        }
    }

    return (
        <ImageBackground source={require('../../../assets/images/login/login-background.jpg')} style={styles.imageBackground}>
            <SafeAreaView style={styles.container}>
                <View style={styles.topSpaceView}>
                    <Image source={require('../../../assets/images/logo/offer-logo-purple.png')} style={styles.logo} />
                </View>
                <View style={styles.bottomSpaceView}>
                    <TextInput 
                        style={styles.textInput}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        autoCompleteType={"email"}
                        keyboardType={"email-address"}
                        placeholder={"E-mail"}
                        placeholderTextColor={"white"}
                        onChangeText={text => setEmail(text)}
                        value={email}
                    />
                    <TextInput 
                        style={styles.textInput}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        autoCompleteType={"password"}
                        placeholder={"Senha"}
                        secureTextEntry={true}
                        placeholderTextColor={"white"}
                        onChangeText={text => setPassword(text)}
                        value={password}
                    />
                    <Button 
                        text={"ENTRAR"}
                        isLoading={isLoading}
                        onTap={handleSignInPress}
                    />
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const halfWidthScreen = Dimensions.get('window').width/2
const logoProportion = 616/792 

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        width: '100%',
        height: '100%',
    },
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
    },
    topSpaceView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: halfWidthScreen,
        height: halfWidthScreen*logoProportion,
        resizeMode: 'cover',
        borderRadius: 12,
        overflow: 'hidden',
    },
    bottomSpaceView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    textInput: {
        height: 60,
        backgroundColor: '#2F0781',
        width: '100%',
        paddingHorizontal: 24,
        marginVertical: 8,
        borderRadius: 12,
        color: 'white',
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 15,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2F0781',
        marginVertical: 8,
        borderRadius: 12,
        height: 60,
        width: '100%',
    },
    textButton: {
        color: "white",
        fontFamily: 'OpenSans-Bold',
        fontSize: 15,
    },
});