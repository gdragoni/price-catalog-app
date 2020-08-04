import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles';
import { SafeAreaView, View, Text, ImageBackground, Image, TextInput, Alert, TouchableHighlight } from 'react-native';
import Button from '../../components/button.component';
import api from '../../network/api';
import TutorialScreen from '../../screens/Tutorial';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const showTutorialScreen = useSelector(state => state.config.showTutorialScreen);
    const alreadyShowInitialTutorial = useSelector(state => state.config.alreadyShowInitialTutorial);

    useEffect(() => {
      if(!alreadyShowInitialTutorial) {
        dispatch({ type: 'SET_INITIAL_TUTORIAL_SCREENS' });
      }
    }, [alreadyShowInitialTutorial])

    if(showTutorialScreen) {
      return (
        <TutorialScreen />
      )
    }

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
                Alert.alert("Erro", 
                err && err.response ?
                err.response.data.message
                : err)
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
                        icon={require('../../../assets/images/perfil/logout.png')}
                        isLoading={isLoading}
                        onTap={handleSignInPress}
                    />
                    <TouchableHighlight
                        style={styles.regButton}
                        onPress={() => navigation.push('Register')}
                    >
                        <Text style={styles.regButtonText}>Primeiro acesso?</Text>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}