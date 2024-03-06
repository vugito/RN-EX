import React, {useEffect, useState} from 'react';
import {View, Text} from "react-native";
import styles from './styles';
import ItemsHeaderNavbarLayout from "../../components/sections/Headers/ItemsHeaderNavbarLayout/ItemsHeaderNavbarLayout";
import {useNavigation} from "@react-navigation/native";
import PrivateRoute from "../../routing/PrivateRoute";
import {useBasket} from "../../context/BasketContext";
import CustomTemp from "../../components/customs/CustomTemp/CustomTemp";
import CustomButton from "../../components/customs/CustomButton/CustomButton";
import {useAuth} from "../../context/AuthContext";


const BasketScreen = ({title= "Basket", backgroundImage}) => {

    const {
        basket,
        removeProductFromBasket,
        FinishShopping
    } = useBasket();

    const {
        getUserToken
    } = useAuth();

    const navigation = useNavigation();

    const handleBackClick = () => {
        navigation.navigate('Home', { screen: 'CategoriesScreen' });
    };


    const RemoveFromBasket=(productId)=> removeProductFromBasket(productId);


    const finishShopping=async ()=>{
        const token = await getUserToken();
        console.log("Finish basket screen token: ",token);
        await FinishShopping(token);
    }

    return (

        <PrivateRoute children={
            <ItemsHeaderNavbarLayout mainContainerStyle={styles.mainContainerStyle} searchIsShown={false} onClick={handleBackClick} title={title} backgroundImage={backgroundImage} main={
                <>
                    <View style={styles.chipsContainer}>
                        {basket ? (
                            basket.map((item,index) => (
                                <CustomTemp
                                    key={index}
                                    productName={item.name}
                                    productImg={item.imageUrls[0].url}
                                    productPrice={item.price}
                                    sellingType={item.sellingType}
                                    currency={item.currency}
                                    onBtnClick={()=>RemoveFromBasket(item.id)}
                                />
                            ))
                        ) : (
                            <Text>Loading category Types...</Text>
                        )}
                    </View>

                    <CustomButton
                        textShown={true}
                        text={"FINISH HIM !!!"}
                        buttonStyles={styles.buttonStyles}
                        textStyles={styles.textStyles}
                        onClick={finishShopping}
                    />

                </>
            }></ItemsHeaderNavbarLayout>
        }>
        </PrivateRoute>


    );
};

export default BasketScreen;