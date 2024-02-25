import React from 'react';
import styles from './styles';
import {View, Text,Image} from "react-native";
// import {Image} from 'expo-image';
import CustomButton from "../CustomButton/CustomButton";
import HeartIcon from "../../icons/HeartIcon/HeartIcon";
import ShoppingCartIcon from "../../icons/ShoppingCartIcon/ShoppingCartIcon";


const CustomRowItemCard = ({productImg, productName, productPrice, currency, sellingType}) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.leftSubContainer}>
                <Image source={{ uri: productImg }} style={styles.image} resizeMode="cover"/>
            </View>

            <View style={styles.rightSubContainer}>
                <View style={styles.header}>
                    <Text style={styles.productName}>{productName}</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.price}>
                        {productPrice}
                    </Text>
                    <Text style={styles.currencyAndSellingType}>
                        {currency} / {sellingType}
                    </Text>
                </View>
                <View style={styles.footer}>
                    <CustomButton
                        iconShown={true}
                        icon={<HeartIcon color="#9586A8"/>}
                        iconColor="red"
                        buttonStyles={styles.heartBtnStyle}
                    />
                    <CustomButton
                        iconShown={true}
                        icon={<ShoppingCartIcon color="#fff"/>}
                        iconColor="red"
                        buttonStyles={styles.shoppingCartBtnStyle}
                    />
                </View>
            </View>
        </View>
    );
};

export default CustomRowItemCard;