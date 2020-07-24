import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';
import Button from '../../components/button.component';
import ToninhoEasterEgg from '../../components/toninhoEasterEgg';
import styles from './styles';

export default function UserScreen() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const onLogoutTap = () => {
        dispatch({ type: 'CLEAR_USER' });
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <ScrollView style={{ width: '100%' }}>
                    <View style={styles.topSpaceView}>
                        <ToninhoEasterEgg />
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <View style={styles.userView}>
                            <Text style={styles.userText}>{`Nome: ${user.name}`}</Text>
                        </View>
                        <View style={styles.userView}>
                            <Text style={styles.userText}>{`E-mail: ${user.email}`}</Text>
                        </View>
                    </View>
                </ScrollView>
                <Button
                    onTap={onLogoutTap}
                    text={"Sair"}
                    icon={require('../../../assets/images/perfil/logout.png')}
                />
            </View>
            <Text style={styles.copyrightText}>Aplicativo desenvolvido por Gabriel A. Dragoni para trabalho de conclusão de curso de Engenharia de Computação, sem fins lucativos. Os dados presentes nesse aplicativo são fictícios</Text>
        </SafeAreaView>
    );
}