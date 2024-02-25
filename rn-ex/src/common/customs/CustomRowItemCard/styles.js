import {StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');


const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        height: 160,
        paddingVertical: 10,
        paddingHorizontal: 20,
        gap: 5,
        // backgroundColor: "rgba(30,30,30,0.5)",
        // borderWidth: 1,
    },
    leftSubContainer: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: "red",
        // borderWidth: 1,

    },
    image: {
        height: "100%",
        borderRadius: 8

    },
    rightSubContainer: {
        flex: 1,
        // borderWidth: 1

    },
    header: {
        flex: 1,
        paddingHorizontal: 20,
        // borderWidth: 1,
        // alignItems: 'center'
    },
    productName: {
        // paddingHorizontal: 20
        fontSize: 18,
        fontWeight: "600"
    },
    body: {
        flex: 1,
        // borderWidth: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        gap: 5,
        alignItems: 'flex-start',
        // justifyContent: "flex-start"
    },
    price: {
        fontSize: 22,
        fontWeight: "700"
    },
    currencyAndSellingType: {
        fontSize: 16,
        fontWeight: "400",
        color: 'rgba(0,0,0,0.5)',

    },
    footer: {
        // borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        paddingHorizontal: 20,
    },
    heartBtnStyle: {
        paddingHorizontal: 25,
        // paddingVertical: 30,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: "#D9D0E3"
    },
    shoppingCartBtnStyle: {
        paddingHorizontal: 25,
        // paddingVertical: 30,
        // backgroundColor: '#fff'
    }


});

export default styles;