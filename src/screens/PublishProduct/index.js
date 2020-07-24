import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView, Text, View, TouchableHighlight, Image, TextInput, Alert } from 'react-native';
import ImageView from "react-native-image-viewing";
import Button from '../../components/button.component';
import styles from './styles';
import api from '../../network/api';
import ImagePicker from 'react-native-image-picker';

export default function PublishProductScreen({ route, navigation }) {
    const { market } = route.params;
    const [isLoading, setIsLoading] = useState(false);
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();

    const sendProduct = async () => {
        try{
            setIsLoading(true);
            const response = await api.post('/produto/add', {
                marketID: market._id,
                description,
            });
            const formData = new FormData();
            formData.append("file", image);
            const uploadResponse = axios.post(`/produto/upload?id=${response._id}`, formData, {
                "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
            });
            setIsLoading(false);
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
          console.log('Response = ', response);

          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = { uri: response.uri };

            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };
            setImage(source);
          }
        });
        console.log(market);
    }

    useEffect(() => {

        
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableHighlight onPress={openImagePicker} style={styles.imageButton}>
                    <View>
                    <Image source={image || require('../../../assets/images/product/add-photo.png')} style={styles.image} />
                    </View>
                </TouchableHighlight>
                <TextInput
                    style={styles.textInput} 
                    placeholderTextColor={'white'}
                    placeholder={"Descrição (opcional)"}
                />
            </View>
            <View style={styles.bottomContainer}>
                <Button 
                    text={"Enviar"}
                    icon={require('../../../assets/images/comment/send.png')}
                    isLoading={isLoading}
                />
            </View>
        </SafeAreaView>
    );
}