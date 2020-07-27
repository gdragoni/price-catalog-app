import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width

export default StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#eee",
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    flatlist: {
        width: screenWidth,
    },
    addButtonContainer: {
        position: 'absolute',
        alignItems: 'center',
    },
    addButtonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DFB233',
        borderRadius: 12,
        paddingHorizontal: 24,
        paddingVertical: 9,
        marginBottom: 18,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    addButtonText: {
        color: 'white',
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
        marginRight: 8,
    },
    addButtonImage: {
        width: 20,
        height: 20,
        tintColor: 'white',
    },
    emptyText: { 
        textAlign: 'center', 
        paddingTop: 24, 
        fontFamily: 'OpenSans-SemiBold',
        color: "#2F0781",
    },
});