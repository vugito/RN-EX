import React from 'react';
import styles from "./styles"
import {Image, View,Text,Button} from "react-native";
import CustomButton from "../CustomButton/CustomButton";
import HeartIcon from "../../icons/HeartIcon/HeartIcon";
import ShoppingCartIcon from "../../icons/ShoppingCartIcon/ShoppingCartIcon";
//selling type - kg,piece
const CustomItemRowCard = ({ imageSource, productName, price,currency,sellingType }) => {
    return (

        <View style={styles.cardContainer}>

            <View style={styles.imageContainer}>
                <Image source={{ uri: imageSource }} style={styles.image} resizeMode="cover" />
            </View>

            <View style={styles.rightContainer}>

                <View style={styles.productNameContainer}>
                    <View style={styles.productName}>{productName}</View>
                </View>

                <View style={styles.priceContainer}>

                    <Text style={styles.price}>
                        {price}
                    </Text>

                    <Text style={styles.currencyAndSellingType}>
                        {currency} / {sellingType}
                    </Text>

                </View>

                <View style={styles.buttonsContainer}>
                    <CustomButton textShown={false} iconColor="#D9D0E3" buttonStyles={{backgroundColor:"#fff",paddingHorizontal:22,paddingVertical:9}} iconShown={true} icon={HeartIcon}/>
                    <CustomButton textShown={false} iconColor="#fff" buttonStyles={{paddingHorizontal:22,paddingVertical:9}} iconShown={true} icon={ShoppingCartIcon}/>
                </View>

            </View>


        </View>

    );
};

export default CustomItemRowCard;