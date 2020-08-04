import { StyleSheet, Dimensions } from 'react-native';

const halfWidthScreen = Dimensions.get('window').width/2
const logoProportion = 616/792 

export default StyleSheet.create({
    container: {
        flex: 1, 
        width: '100%',
        height: '100%',
    },
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
    },
    topSpaceView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: halfWidthScreen,
        height: halfWidthScreen*logoProportion,
        resizeMode: 'cover',
        borderRadius: 12,
        overflow: 'hidden',
    },
    bottomSpaceView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    textInput: {
        height: 60,
        backgroundColor: '#2F0781',
        width: '100%',
        paddingHorizontal: 24,
        marginVertical: 8,
        borderRadius: 12,
        color: 'white',
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 15,
    },
    regButton: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    regButtonText: {
        color: 'white',
        fontFamily: 'OpenSans-Bold',
    },
});