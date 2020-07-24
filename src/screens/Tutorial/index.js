import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView, Text, View, Image, TouchableHighlight, ScrollView, ImageBackground } from 'react-native';
import Button from '../../components/button.component';
import styles from './styles';

export default function TutorialScreen() {
    const dispatch = useDispatch();
    const tutorialScreens = useSelector(state => state.config.tutorialScreens);
    const [currentScreen, setCurrentScreen] = useState(0);
    const tutorial = tutorialScreens[currentScreen];

    const handleNext = () => {
        if(currentScreen == tutorialScreens.length-1) {
            dispatch({ type: "SET_ALREADY_SHOWINITIALTUTORIAL" });
        } else {
            setCurrentScreen(currentScreen+1);
        }
    }

    return (
        <ImageBackground source={tutorial.image} key={currentScreen} style={styles.imageBackground}>
        <SafeAreaView style={styles.container}>
           <View style={styles.topContainer}>
                <Text style={styles.titleText}>{tutorial.title}</Text>
           </View>
           <View style={styles.bottomContainer}>
                <Text style={styles.text}>{tutorial.text}</Text>
           </View>
           <View style={styles.buttonContainer}>
                <Button 
                    text={"PRÓXIMO"}
                    onTap={handleNext}
                />
           </View>
        </SafeAreaView>
        </ImageBackground>
    );
}