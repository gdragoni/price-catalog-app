import { StyleSheet, Dimensions } from 'react-native';

const halfWidthScreen = Dimensions.get('window').width/2
const logoProportion = 616/792 

export default StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#eee",
        alignItems: 'center',
    },
    topContainer: {
        alignItems: 'center',
        width: '100%',
        padding: 18,
        flex: 1,
        justifyContent: 'space-between',
    },
    userView: {
        borderRadius: 12,
        backgroundColor: '#2F0781',
        width: '100%',
        padding: 18,
        marginTop: 20,
    },
    userText: {
        textAlign: 'left',
        color: 'white',
        fontFamily: 'OpenSans-SemiBold',
        marginVertical: 12,
    },
    copyrightText: {
        fontFamily: 'OpenSans-Regular',
        textAlign: 'center',
        paddingHorizontal: 50,
        color: '#2F0781',
        paddingVertical: 18,
    },
    logo: {
        width: halfWidthScreen,
        height: halfWidthScreen*logoProportion,
        resizeMode: 'cover',
        borderRadius: 12,
        overflow: 'hidden',
        marginTop: 20,
    },
});