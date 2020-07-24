import { StyleSheet, Dimensions } from 'react-native';

const halfWidthScreen = Dimensions.get('window').width/2
const logoProportion = 616/792 

export default StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
    },
    imageBackground: {
      flex: 1,
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
        fontSize: 30,
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
        fontSize: 20,
        fontFamily: 'OpenSans-Bold',
    },
    buttonContainer: {
        width: '100%',
        padding: 18,
    },
});