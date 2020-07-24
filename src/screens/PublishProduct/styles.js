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
    imageView: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 10,
        borderColor: "#2F0781",
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
    buttonView: {
        position: 'absolute',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 30,
        color: '#2F0781',
    },
    buttonImage: {
        tintColor: '#2F0781',
    },
});