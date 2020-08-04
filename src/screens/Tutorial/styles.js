import { StyleSheet, Dimensions } from 'react-native';

const widthScreen = Dimensions.get('window').width

export default StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
    },
    imageBackground: {
      width: widthScreen,
      resizeMode: 'cover',
    },
    topContainer: {
        flex: 3,
        justifyContent: 'center',
        padding: 18,
    },
    titleText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 50,
        fontFamily: 'OpenSans-Bold',
    },
    bottomContainer: {
        flex: 4,
        justifyContent: 'center',
        padding: 18,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'OpenSans-Bold',
    },
    buttonContainer: {
        width: '100%',
        padding: 18,
    },
});