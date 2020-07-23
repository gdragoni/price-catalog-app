import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#2F0781",
    },
    mapView: {
        flex: 1,
    },
    modalView: {
        position: 'absolute', 
        width: '100%', 
        height: 150, 
        backgroundColor: '#2F0781', 
        zIndex: 1, 
        borderBottomLeftRadius: 12, 
        borderBottomRightRadius: 12, 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingVertical: 9,
    },
    modalImage: {
        height: "100%", 
        width: 200, 
        resizeMode: "contain",
    },
});