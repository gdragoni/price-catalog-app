import { StyleSheet, Dimensions } from 'react-native';

const halfWidthScreen = Dimensions.get('window').width/2
const logoProportion = 616/792 

export default StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#eee",
    },
});