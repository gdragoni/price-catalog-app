import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import styles from './styles';
import { SafeAreaView, View, Text, ImageBackground, Image, TextInput, Alert, ScrollView } from 'react-native';
import Button from '../../components/button.component';
import api from '../../network/api';
import { validateEmail } from '../../utils/validation';

export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const handleSignInPress = async () => {
        if(email.length === 0 || password.length === 0 || password.length === 0 || confirmPassword === 0) {
            Alert.alert("Atenção", "Preencha todos os campos para continuar!")
        } else if (!validateEmail(email)) {
            Alert.alert("Atenção", "E-mail digitado é inválido! Confirme se digitou o e-mail corretamente")
        } else if(password != confirmPassword) {
            Alert.alert("Atenção", "Senhas diferentes! Confirme se digitou a senha corretamente!")
        } else if (password.length < 8) {
            Alert.alert("Atenção", "A senha deve ter no mínimo 8 caracteres!")
        } else {
            try {
                setIsLoading(true);
                const response = await api.post('/user/register', {
                    name,
                    email,
                    password,
                });
                setIsLoading(false);
                Alert.alert("Sucesso!", response.data.message || "Usuário cadastrado!", [
                    {
                        text: "Ok",
                        onPress: () => navigation.goBack(),
                    }
                ], { cancelable: false });
            } catch(err) {
                setIsLoading(false);
                Alert.alert("Erro", 
                err.response.data.message || "Houve um problema com o cadastro, verifique sua conexão!")
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
                <ScrollView style={styles.scrollView}>
                    <TextInput 
                        style={styles.textInput}
                        autoCapitalize={'words'}
                        autoCorrect={false}
                        autoCompleteType={"name"}
                        placeholder={"Nome"}
                        placeholderTextColor={"white"}
                        onChangeText={text => setName(text)}
                        value={name}
                    />
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
                    <TextInput 
                        style={styles.textInput}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        autoCompleteType={"password"}
                        placeholder={"Confirmar Senha"}
                        secureTextEntry={true}
                        placeholderTextColor={"white"}
                        onChangeText={text => setConfirmPassword(text)}
                        value={confirmPassword}
                    />
                    <Button 
                        text={"CADASTRAR"}
                        isLoading={isLoading}
                        onTap={handleSignInPress}
                    />
                    </ScrollView>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}