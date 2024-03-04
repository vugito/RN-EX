import React, {useEffect, useState} from 'react';
import {View, Text} from "react-native";
import styles from './styles';
import ItemsHeaderNavbarLayout from "../../components/sections/Headers/ItemsHeaderNavbarLayout/ItemsHeaderNavbarLayout";
import CustomItemCard from "../../common/customs/CustomItemCard/CustomItemCard";
import CustomRowItemCard from "../../common/customs/CustomRowItemCard/CustomRowItemCard";
import CustomChip from "../../common/customs/CustomChip/CustomChip"
import {useNavigation} from "@react-navigation/native";
import PrivateRoute from "../../routing/PrivateRoute";
import {useCommon} from "../../context/CommonContext";
const ProductsScreen = ({title= "Vegatables", backgroundImage}) => {

    const {
        selectedCategoryId,
        setSelectedProductId,
        products,
        getAllProductsByCategoryId,
    } = useCommon();


    const [selected,setSelected]=useState();

    const navigation = useNavigation();

    const handleCardClick = (id) => {
        setSelectedProductId(id);
        navigation.navigate('ItemDetailsScreen');
    };

    const handleBackClick = () => {
        navigation.navigate('Home', { screen: 'CategoriesScreen' });
    };


    useEffect(async() => {
        const GetAllProducts=async ()=>{
            const response = await getAllProductsByCategoryId(selectedCategoryId);
        }
        GetAllProducts();
    }, [selectedCategoryId]);


    return (

        <PrivateRoute children={
            <ItemsHeaderNavbarLayout onClick={handleBackClick} title={title} backgroundImage={backgroundImage} main={
                <>

                    <View style={styles.chipsContainer}>
                        <CustomChip value={"Tomatoes"} selected={selected} setSelected={setSelected} quantity={18}/>
                        <CustomChip value={"Elvins"} selected={selected} setSelected={setSelected} quantity={31}/>
                        <CustomChip value={"Trans"} selected={selected} setSelected={setSelected} quantity={72}/>
                        <CustomChip value={"Gays"} selected={selected} setSelected={setSelected} quantity={11}/>
                        <CustomChip value={"Tomatoes"} selected={selected} setSelected={setSelected} quantity={69}/>
                        <CustomChip value={"Creepies"} selected={selected} setSelected={setSelected} quantity={24}/>
                        <CustomChip value={"STAY HARD"} selected={selected} setSelected={setSelected} quantity={31}/>
                    </View>

                    {/*<CustomRowItemCard*/}
                    {/*    productName="Apple"*/}
                    {/*    productImg={require("../../../assets/images/elvin.jpg")}*/}
                    {/*    productPrice="3.50"*/}
                    {/*    currency="$"*/}
                    {/*    sellingType="kg" onClick={handleCardClick}*/}
                    {/*/>*/}


                    {/*(products && products.map((item) => (*/}
                    {/*    <CustomRowItemCard key={item.id} productName={item.name} productImg={item.img} productPrice={item.price} currency={item.currency} sellingType={item.sellingType} onClick={()=>{*/}
                    {/*        console.log(item.name)}}/>*/}
                    {/*)))*/}

                    {products ? (
                        products.map((item) => (
                            <CustomRowItemCard
                                key={item.id}
                                productName={item.name}
                                productImg={item.img}
                                productPrice={item.price}
                                currency={item.currency}
                                sellingType={item.sellingType}
                                onClick={()=>{handleCardClick(item.id)}}/>
                        ))
                    ) : (
                        <Text>Loading products...</Text>
                    )}


                </>
            }></ItemsHeaderNavbarLayout>
        }>
        </PrivateRoute>


    );
};

export default ProductsScreen;