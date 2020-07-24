import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width
const logoProportion = 616/792 

export default StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#eee",
        alignItems: 'center',
    },
    topContainer: {
        flex: 1,
        padding: 18,
         width: '100%',
    },
    bottomContainer: {
        width: '100%',
        padding: 18,
    },
    imageButton: {
        width: '100%',
        height: screenWidth*2/3,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 12,
    },
    textInput: {
        height: 60,
        backgroundColor: '#2F0781',
        width: '100%',
        paddingHorizontal: 24,
        marginVertical: 18,
        borderRadius: 12,
        color: 'white',
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 15,
    },
});