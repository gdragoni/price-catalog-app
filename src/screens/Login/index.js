import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import styles from './styles';
import { SafeAreaView, View, Text, ImageBackground, Image, TextInput, Alert } from 'react-native';
import Button from '../../components/button.component';
import api from '../../network/api';

export default function LoginScreen({ navigation }) {
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