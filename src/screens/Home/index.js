import * as React from 'react';
import { useDispatch } from 'react-redux'

import { SafeAreaView, Text, TouchableHighlight } from 'react-native';

export default function HomeScreen() {
    const dispatch = useDispatch();

    onTap = () => {
        dispatch({ type: 'SET_USER', payload: { token: "" } });
    }

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableHighlight onPress={onTap}>
                <Text>Home Screen</Text>
            </TouchableHighlight>
        </SafeAreaView>
    );
}
