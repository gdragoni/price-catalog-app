import { StyleSheet, Dimensions } from 'react-native';

const halfWidthScreen = Dimensions.get('window').width/2
const logoProportion = 616/792 

export default StyleSheet.create({
    backgroundView: {
        flex: 1,
        backgroundColor: '#2F0781',
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    flatList: { 
        width: '100%',
        backgroundColor: "#eee",
    },
    bottomContainer: {
        width: '100%',
        height: 60,
        backgroundColor: '#2F0781',
        alignItems: 'center',
        flexDirection: 'row',
    },
    commentTextInput: {
        fontFamily: 'OpenSans-SemiBold',
        color: 'white',
        flex: 1,
        paddingLeft: 18,
        height: 60,
    },
    commentButtonView: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    commentImageButton: {
        height: 30,
        width: 30,
        tintColor: 'white',
    },
    emptyText: { 
        textAlign: 'center', 
        paddingBottom: 24, 
        fontFamily: 'OpenSans-SemiBold',
        color: "#2F0781",
    },
});