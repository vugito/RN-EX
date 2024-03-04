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
        currentCategoryTypes,
        getAllTypesByCategoryId
    } = useCommon();


    const [selectedCategoryTypes, setSelectedCategoryTypes] = useState([]);

    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleCategoryTypeSelection = (categoryId) => {
        if (selectedCategoryTypes.includes(categoryId)) {
            setSelectedCategoryTypes(selectedCategoryTypes.filter(id => id !== categoryId));
        } else {
            setSelectedCategoryTypes([...selectedCategoryTypes, categoryId]);
        }
    };



    const navigation = useNavigation();

    const handleCardClick = (id) => {
        setSelectedProductId(id);
        navigation.navigate('ItemDetailsScreen');
    };

    const handleBackClick = () => {
        navigation.navigate('Home', { screen: 'CategoriesScreen' });
    };


    useEffect(() => {
        const GetAllProducts=async ()=>{
            const response = await getAllProductsByCategoryId(selectedCategoryId);
        }

        const GetAllTypes=async ()=>{
            const responseTypes = await getAllTypesByCategoryId(selectedCategoryId);
        }

        GetAllTypes();
        GetAllProducts();

        console.log(products)
    }, [selectedCategoryId]);

    useEffect(() => {
        const filterProducts = () => {
            setFilteredProducts([]);
            console.log("filterProductsStart");
            if (products && selectedCategoryTypes) {
                console.log("if selectedCategoryTypes: ",selectedCategoryTypes);
                console.log("products: ",products);
                const filteredProducts = products.filter(product => selectedCategoryTypes.includes(product.productType.id)
                );
                setFilteredProducts(filteredProducts);
            }
        };

        filterProducts();
    }, [selectedCategoryTypes]);




    return (

        <PrivateRoute children={
            <ItemsHeaderNavbarLayout onClick={handleBackClick} title={title} backgroundImage={backgroundImage} main={
                <>
                    <View style={styles.chipsContainer}>
                        {currentCategoryTypes ? (
                            currentCategoryTypes.map((item) => (
                                <CustomChip
                                    key={item.id}
                                    value={item.name}
                                    selected={selectedCategoryTypes.includes(item.id)}
                                    setSelected={() => handleCategoryTypeSelection(item.id)}
                                    // quantity={chip.quantity}
                                />
                            ))
                        ) : (
                            <Text>Loading category Types...</Text>
                        )}
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

                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                            <CustomRowItemCard
                                key={item.id}
                                productName={item.name}
                                productImg={item.img}
                                productPrice={item.price}
                                currency={item.currency}
                                sellingType={item.sellingType}
                                onClick={() => handleCardClick(item.id)}
                            />
                        ))
                    ) : (
                        products ? (
                            products.map((item) => (
                                <CustomRowItemCard
                                    key={item.id}
                                    productName={item.name}
                                    productImg={item.img}
                                    productPrice={item.price}
                                    currency={item.currency}
                                    sellingType={item.sellingType}
                                    onClick={() => handleCardClick(item.id)}
                                />
                            ))
                        ) : (
                            <Text>Loading products...</Text>
                        )
                    )}



                </>
            }></ItemsHeaderNavbarLayout>
        }>
        </PrivateRoute>


    );
};

export default ProductsScreen;