import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    cardContainer:{
        flex:1,
        minWidth:390,
        minHeight:140,
        maxWidth:400,
        maxHeight:160,
        flexDirection:"row"
    },
    imageContainer:{
        flex:100,
        padding:18
    },
    rightContainer:{
        flex:85,
        padding:18
    },
    image:{
        width:'100%',
        height: '100%',
        borderRadius:8,
    },
    buttonsContainer:{
        flex:6,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    priceContainer:{
        flex:3,
        alignItems:"center",
        justifyContent:"flex-start",
        flexDirection:"row",
        gap:10
    },
    productNameContainer:{
        flex:3,
        alignItems:"flex-start",
        justifyContent:"flex-start"
    },
    productName:{
        color:"#2D0C57",
        fontWeight:'600',
        fontSize:18,
        lineHeight:22,
        textAlign:"center",
        // fontFamily:"SFProText-Regular"
    },
    price:{
        fontWeight:'700',
        fontSize:22,
        lineHeight:22,
        color:"#2D0C57"
    },
    currencyAndSellingType:{
        fontWeight:'400',
        fontSize:16,
        lineHeight:22,
        color:"#9586A8"
    }


});

export default styles;