import React, {useEffect, useState} from 'react';
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
import {useCommon} from "../../context/CommonContext";
import PrivateRoute from "../../routing/PrivateRoute";
import {useBasket} from "../../context/BasketContext";
import {useFavourites} from "../../context/FavouriteContext";

const ProductItemScreen = () => {

    // const images = [
    //     require("../../../assets/images/elvin.jpg"),
    //     require("../../../assets/images/elvin.jpg"),
    //     require("../../../assets/images/elvin.jpg"),
    // ];

    const {
        selectedProductId,
        getProductDetailsById,
        currentProduct
    } = useCommon();

    const{addProductToBasket}=useBasket();

    const{addProductToFavourites}=useFavourites();

    const navigation = useNavigation();


    useEffect( () => {
        const GetProductDetailsById = async () => {
            console.log('Product Details => ')

            const response = await getProductDetailsById(selectedProductId);
        }

        GetProductDetailsById();
    }, []);

    const images = currentProduct?.imageUrls?.map(image => image.url) || [];


    const handleBackClick = () => {
        navigation.navigate('Home', {screen: 'ProductsScreen'});
    };


    const AddProductToBasket=(product)=>{
        addProductToBasket(product)
    }

    const AddProductToFavourites=(product)=>{
        addProductToFavourites(product)
    }


    return (
        <PrivateRoute children={
            <View style={styles.container}>

                <HeaderNavBar onClick={handleBackClick} containerStyle={styles.headerContainerStyle}/>

                <Carousel images={images}/>


                <View style={styles.bottomContainer}>


                    <View style={styles.productNameContainer}>
                        <Text style={styles.productName}>{currentProduct?.name}</Text>
                    </View>


                    <View style={styles.bodyContainer}>

                        <View style={styles.body}>
                            <Text style={styles.price}>
                                {currentProduct?.price}
                            </Text>
                            <Text style={styles.currencyAndSellingType}>
                                {currentProduct?.currency} / {currentProduct?.sellingType}
                            </Text>

                        </View>
                        <View style={styles.secondBody}>
                            <Text style={styles.weightAndSellingType}>
                                ~{currentProduct?.weight} / piece
                            </Text>
                        </View>
                    </View>

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.title}>{currentProduct?.manufactureCountry}</Text>
                        <Text style={styles.description}>{currentProduct?.description}</Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <CustomButton
                            textShown={false}
                            buttonStyles={styles.heartButtonStyles}
                            iconShown={true}
                            icon={<HeartIcon color={styles.heartIcon.color}/>}
                            onClick={()=>AddProductToFavourites(currentProduct)}
                        />

                        <CustomButton
                            textShown={true}
                            text="Add to cart"
                            iconShown={true}
                            textStyles={styles.addToCartButtonText}
                            buttonStyles={styles.addToCartButton}
                            icon={<ShoppingCartIcon color={styles.shoppingCardIcon.color}/>}
                            onClick={()=>AddProductToBasket(currentProduct)}
                        />
                    </View>


                </View>

            </View>
        }>
        </PrivateRoute>


    );
};

export default ProductItemScreen;
