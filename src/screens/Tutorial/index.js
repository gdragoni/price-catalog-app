import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView, Text, View, Image, TouchableHighlight, ScrollView, ImageBackground, FlatList } from 'react-native';
import Button from '../../components/button.component';
import styles from './styles';

export default function TutorialScreen() {
    const dispatch = useDispatch();
    const tutorialScreens = useSelector(state => state.config.tutorialScreens);
    const [currentScreen, setCurrentScreen] = useState(0);
    const tutorial = tutorialScreens[currentScreen];

    const handleNext = () => {
        if(currentScreen == tutorialScreens.length-1) {
            dispatch({ type: "HIDE_TUTORIAL_SCREEN" });
        } else {
            setCurrentScreen(currentScreen+1);
        }
    }

    const viewabilityConfigRef = React.useRef({ itemVisiblePercentThreshold: 60 });
    const onViewableItemsChangedRef = React.useRef(({ viewableItems }) => {
        const firstViewableItem = viewableItems[0]
        if(firstViewableItem) {
            setCurrentScreen(firstViewableItem.index);
        }
    });

    useEffect(() => {
        if(this.flatListRef) {
            this.flatListRef.scrollToIndex({ animated: true, index: currentScreen });
        }
    }, [currentScreen])

    return (
        <FlatList 
            style={styles.carousel}
            horizontal={true}
            data={tutorialScreens}
            ref={ref => { this.flatListRef = ref }}
            pagingEnabled={true}
            onViewableItemsChanged={onViewableItemsChangedRef.current}
            viewabilityConfig={viewabilityConfigRef.current}
            keyExtractor={t => t.text}
            renderItem={({ item }) => (
                <ImageBackground style={styles.imageBackground} source={item.image}>
                    <View style={styles.topContainer}>
                         <Text style={styles.titleText}>{item.title}</Text>
                    </View>
                    <View style={styles.bottomContainer}>
                         <Text style={styles.text}>{item.text}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                         <Button 
                             text={"PRÓXIMO"}
                             onTap={handleNext}
                         />
                    </View>       
                </ImageBackground>
            )}
        />
    );
}