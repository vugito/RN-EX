import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        // marginHorizontal:15
        flexDirection: 'column',
        width: Dimensions.get('screen').width * 0.90,
        height: 70,
        gap: 5
    },
    label: {
        flex: 1,
        fontSize: 14,
        fontWeight: '400',
        lineHeight:22,
        paddingHorizontal: 14,
        color:"#9586A8",
    },
    input: {
        flex: 1,
        fontSize: 17,
        fontWeight: '400',
        lineHeight:22,
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 10,
        backgroundColor:"#fff",
    },
});

export default styles;
