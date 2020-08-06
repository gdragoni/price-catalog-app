import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView, Text, View, TextInput } from 'react-native';
import Button from '../../components/button.component';
import styles from './styles';

export default function MapFilterScreen({ navigation }) {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    const [range, setRange] = useState(filter.range);
    
    const filterHandler = () => {
        dispatch({ type: "SET_FILTER_RANGE", payload: range });
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formView}>
                <Text style={styles.text}>Raio de busca (em Km)</Text>
                <TextInput 
                    style={styles.textInput}
                    keyboardType={'number-pad'}
                    placeholderTextColor={"white"}
                    onChangeText={text => setRange(text)}
                    value={range}
                />
            </View>
            <View style={styles.buttonView}>
                <Button
                    onTap={filterHandler}
                    style={styles.button}
                    text={"Aplicar"}
                />
            </View>
        </SafeAreaView>
    );
}