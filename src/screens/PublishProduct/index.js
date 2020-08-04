import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView, Text, View, TouchableHighlight, Image, TextInput, Alert } from 'react-native';
import ImageView from "react-native-image-viewing";
import Button from '../../components/button.component';
import styles from './styles';
import api from '../../network/api';
import ImagePicker from 'react-native-image-picker';
import TutorialScreen from '../../screens/Tutorial';

export default function PublishProductScreen({ route, navigation }) {
    const { market, refreshProductList } = route.params;
    const [isLoading, setIsLoading] = useState(false);
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const alreadyShowPhotoTutorial = useSelector(state => state.config.alreadyShowPhotoTutorial);
    const showTutorialScreen = useSelector(state => state.config.showTutorialScreen);
    const dispatch = useDispatch();

    const sendProduct = async () => {
        try{
            setIsLoading(true);
            const response = await api.post('/produto/add', {
                marketID: market._id,
                description,
                image: image.uri,
            });
            setIsLoading(false);
            refreshProductList();
            Alert.alert("Sucesso!", response.data.message || "Produto cadastrado!", [
                {
                    text: "Ok",
                    onPress: () => navigation.goBack(),
                }
            ], { cancelable: false });
        } catch(err) {
            setIsLoading(false);
            Alert.alert("Erro", err.response ? err.response.message : "Ocorreu um erro ao enviar a publicação");
        }
    }

    const openImagePicker = () => {
        const options = {
          title: 'Escolha a imagem do produto',
          quality: 0.1,
          maxWidth: 800,
          maxHeight: 800,
          takePhotoButtonTitle: "Câmera",
          chooseFromLibraryButtonTitle: "Galeria",
          mediaType: 'photo',
        };

        ImagePicker.showImagePicker(options, (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = { uri: 'data:image/jpeg;base64,' + response.data };
            setImage(source);
          }
        });
    }

    const handlePublish = () => {
        if(image == null) {
            return Alert.alert('Atenção', "Adicione uma foto para continuar!")
        } else {
            sendProduct()
        }
    }

    useEffect(() => {
        if(!alreadyShowPhotoTutorial) {
            dispatch({ type: "SET_PHOTO_TUTORIAL_SCREENS" });
        } else if(alreadyShowPhotoTutorial && !showTutorialScreen) {
            openImagePicker();
        }
    }, [alreadyShowPhotoTutorial, showTutorialScreen]);

    if(showTutorialScreen) {
        return (
            <TutorialScreen />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableHighlight onPress={openImagePicker} style={styles.imageButton}>
                    <View style={styles.imageView}>
                        <View style={styles.buttonView}>
                            <Image style={styles.buttonImage} source={require('../../../assets/images/product/add-photo.png')} />
                            <Text style={styles.buttonText}>Adicionar foto</Text>
                        </View>
                        { image ? <Image source={image} style={styles.image} /> : null }
                    </View>
                </TouchableHighlight>
                <TextInput
                    style={styles.textInput} 
                    placeholderTextColor={'white'}
                    placeholder={"Descrição (opcional)"}
                    value={description}
                    onChangeText={setDescription}
                />
            </View>
            <View style={styles.bottomContainer}>
                <Button 
                    text={"Enviar"}
                    icon={require('../../../assets/images/comment/send.png')}
                    isLoading={isLoading}
                    onTap={handlePublish}
                />
            </View>
        </SafeAreaView>
    );
}