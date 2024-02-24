import {Dimensions, StyleSheet} from "react-native";

const screenWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderRadius: 27,
        alignItems:'center',
        justifyContent:"center",
        flexDirection:"row",
        maxHeight:48,
        maxWidth: screenWidth - 40,
        flex:1,
        paddingHorizontal:15

    },
    iconContainer: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 19,
        fontWeight: '400',
        lineHeight: 22,
        color: '#000',
        borderWidth: 0,
        paddingLeft: 5
    },

});

export default styles;