import * as React from 'react';
import { useDispatch } from 'react-redux'

import { SafeAreaView, Text, TouchableHighlight } from 'react-native';

export default function Usercreen() {
    const dispatch = useDispatch();

    const onTap = () => {
        dispatch({ type: 'CLEAR_USER' });
    }

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableHighlight onPress={onTap}>
                <Text>User Screen</Text>
            </TouchableHighlight>
        </SafeAreaView>
    );
}