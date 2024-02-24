import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        flex:1,
        flexDirection:"column",
        maxHeight:220,
        maxWidth:180,
        minWidth:160
    },
    imageContainer: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        flex:5
    },
    image:{
        width:'100%',
        height: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    productName: {
        fontSize: 18,
        fontWeight: '700',
        lineHeight:21,
        flex:1,
        color:"#2D0C57",
    },
    quantityContainer: {
        flex:1,
        paddingHorizontal:12,
    },
    productNameContainer:{
        flex:1,
        paddingHorizontal:12,
        marginTop: 10,
    },
    quantityText: {
        color: '#9586A8',
        fontSize: 12,
        fontWeight:'400',
        lineHeight:14
    },
});

export default styles;
