import React, {useState} from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity} from "react-native";
import styles from './styles';
import BoxIcon from "../../common/icons/BoxIcon/BoxIcon";
import CustomButton from "../../common/customs/CustomButton/CustomButton";
import Carousel from "../../components/Carousel/Carousel"
import HeartIcon from "../../common/icons/HeartIcon/HeartIcon";
import ShoppingCartIconIsFocused from "../../common/icons/ShoppingCartIconIsFocused/ShoppingCartIconIsFocused";
import ChevronLeftIcon from "../../common/icons/ChevronLeftIcon/ChevronLeftIcon";
import {useNavigation} from "@react-navigation/native";
import HeaderNavBar from "../../components/sections/Headers/HeaderNavBar/HeaderNavBar";
import ShoppingCartIcon from "../../common/icons/ShoppingCartIcon/ShoppingCartIcon";

const ProductItemScreen = ({
                               imageUrls,
                               productName,
                               price,
                               currency,
                               sellingType,
                               weight,
                               additionalSellingType,
                               country,
                               description
                           }) => {

    const images = [
        require("../../../assets/images/elvin.jpg"),
        require("../../../assets/images/elvin.jpg"),
        require("../../../assets/images/elvin.jpg"),
    ];
    // const images = imageUrls.map(image => require(image));


    const navigation = useNavigation();


    const handleBackClick = () => {
        navigation.navigate('Home', {screen: 'ProductsScreen'});
    };

    return (
        <View style={styles.container}>

            <HeaderNavBar onClick={handleBackClick} containerStyle={styles.headerContainerStyle}/>

            <Carousel images={images}/>


            <View style={styles.bottomContainer}>


                <View style={styles.productNameContainer}>
                    <Text style={styles.productName}>{productName}</Text>
                </View>


                <View style={styles.bodyContainer}>

                    <View style={styles.body}>
                        <Text style={styles.price}>
                            {price}
                        </Text>
                        <Text style={styles.currencyAndSellingType}>
                            {currency} / {sellingType}
                        </Text>

                    </View>
                    <View style={styles.secondBody}>
                        <Text style={styles.weightAndSellingType}>
                            ~{weight} / {additionalSellingType}
                        </Text>
                    </View>
                </View>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.title}>{country}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>

                <View style={styles.buttonsContainer}>
                    <CustomButton
                        textShown={false}
                        buttonStyles={styles.heartButtonStyles}
                        iconShown={true}
                        icon={<HeartIcon color={styles.heartIcon.color}/>}/>

                    <CustomButton
                        textShown={true}
                        text="Add to cart"
                        iconShown={true}
                        textStyles={styles.addToCartButtonText}
                        buttonStyles={styles.addToCartButton}
                        icon={<ShoppingCartIcon color={styles.shoppingCardIcon.color}/>}/>
                </View>


            </View>

        </View>
    );
};

export default ProductItemScreen;
