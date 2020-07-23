import { StyleSheet, Dimensions } from 'react-native';

const halfWidthScreen = Dimensions.get('window').width/2
const logoProportion = 616/792 

export default StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#eee",
        alignItems: 'center',
    },
    formView: {
        flex: 1,
        width: '100%',
        padding: 18,
    },
    text: {
        color: "#2F0781",
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
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
    buttonView: {
        width: '100%',
        paddingHorizontal: 18,
    },
});