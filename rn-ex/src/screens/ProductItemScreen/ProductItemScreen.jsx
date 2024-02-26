import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import styles from './styles';
import BoxIcon from "../../common/icons/BoxIcon/BoxIcon";
import CustomButton from "../../common/customs/CustomButton/CustomButton";
import Carousel from "../../components/Carousel/Carousel"
import HeartIcon from "../../common/icons/HeartIcon/HeartIcon";
import ShoppingCartIcon from "../../common/icons/ShoppingCartIcon/ShoppingCartIcon";

const ProductItemScreen = ({imageUrls,productName,price,currency,sellingType,weight,additionalSellingType,country,description}) => {

    const images = [
        require("../../../assets/images/elvin.jpg"),
        require("../../../assets/images/elvin.jpg"),
        require("../../../assets/images/elvin.jpg"),
    ];


    // const images = imageUrls.map(image => require(image));



    return (
        <View style={styles.container}>

            <ImageBackground
                source={require('../../../assets/images/SplashScreenBG.png')}
                style={styles.backgroundImage}>

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
                        <CustomButton textShown={false} buttonStyles={styles.heartButtonStyles} iconShown={true} icon={<HeartIcon/>}/>
                        <CustomButton textShown={true} text="Add to cart" iconShown={true} textStyles={styles.addToCartButtonText} buttonStyles={styles.addToCartButton} icon={<ShoppingCartIcon/>}/>
                    </View>


                </View>

            </ImageBackground>

        </View>
    );
};

export default ProductItemScreen;
