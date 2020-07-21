import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { SafeAreaView, Text, View, Image } from 'react-native';
import Button from '../../components/button.component';
import styles from './styles';

export default function Usercreen() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const onLogoutTap = () => {
        dispatch({ type: 'CLEAR_USER' });
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.topSpaceView}>
                    <Image source={require('../../../assets/images/logo/offer-logo-purple.png')} style={styles.logo} />
                </View>
                <View style={{ width: '100%' }}>
                <View style={styles.userView}>
                    <Text style={styles.userText}>{`Nome: ${user.name}`}</Text>
                </View>
                <View style={styles.userView}>
                    <Text style={styles.userText}>{`E-mail: ${user.email}`}</Text>
                </View>
                </View>
                <Button
                    onTap={onLogoutTap}
                    text={"Sair"}
                    icon={require('../../../assets/images/perfil/logout.png')}
                />
            </View>
            <Text style={styles.copyrightText}>Aplicativo desenvolvido por Gabriel A. Dragoni para trabalho de conclusão de curso de Engenharia de Computação, sem fins lucativos.</Text>
        </SafeAreaView>
    );
}