import React, {useEffect, useState} from 'react';
import {View, Text} from "react-native";
import styles from './styles';
import ItemsHeaderNavbarLayout from "../../components/sections/Headers/ItemsHeaderNavbarLayout/ItemsHeaderNavbarLayout";
import CustomRowItemCard from "../../common/customs/CustomRowItemCard/CustomRowItemCard";
import CustomChip from "../../common/customs/CustomChip/CustomChip"
import {useNavigation} from "@react-navigation/native";
import PrivateRoute from "../../routing/PrivateRoute";
import {useCommon} from "../../context/CommonContext";
import {useBasket} from "../../context/BasketContext";
import {useFavourites} from "../../context/FavouriteContext";

const ProductsScreen = ({title= "Products", backgroundImage}) => {

    const {
        selectedCategoryId,
        setSelectedProductId,
        products,
        getAllProductsByCategoryId,
        currentCategoryTypes,
        getAllTypesByCategoryId
    } = useCommon();

    const{addProductToBasket}=useBasket();

    const{addProductToFavourites}=useFavourites();

    const [searchQuery, setSearchQuery] = useState('');


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
    }, [selectedCategoryId]);



    // useEffect(() => {
    //     const filterProducts = () => {
    //         setFilteredProducts([]);
    //         if (products && selectedCategoryTypes) {
    //             const filteredProducts = products.filter(product => selectedCategoryTypes.includes(product.productType.id)
    //             );
    //             setFilteredProducts(filteredProducts);
    //         }
    //     };
    //
    //     filterProducts();
    // }, [selectedCategoryTypes]);

    useEffect(() => {
        const filterProducts = () => {
            setFilteredProducts([]);
            if (products) {
                let filtered = [...products];
                if (selectedCategoryTypes && selectedCategoryTypes.length > 0) {
                    filtered = filtered.filter(product => selectedCategoryTypes.includes(product.productType.id));
                }
                if (searchQuery !== '') {
                    filtered = filtered.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
                }
                setFilteredProducts(filtered);
                console.log(filtered);
            }
        };

        filterProducts();
    }, [selectedCategoryTypes, searchQuery, products]);

    const AddProductToBasket=(product)=>{
        addProductToBasket(product)
    }

    const AddProductToFavourites=(product)=>{
        addProductToFavourites(product)
    }

    const handleSearchBarChange = (query) => {
        console.log("query: ",query);
        setSearchQuery(query);
    }



    return (

        <PrivateRoute children={
            <ItemsHeaderNavbarLayout onSearchBarValueChange={handleSearchBarChange} searchIsShown={true} onClick={handleBackClick} title={title} backgroundImage={backgroundImage} main={
                <>
                    <View style={styles.chipsContainer}>
                        {currentCategoryTypes ? (
                            currentCategoryTypes.map((item) => (
                                <CustomChip
                                    key={item.id}
                                    value={item.name}
                                    selected={selectedCategoryTypes.includes(item.id)}
                                    setSelected={() => handleCategoryTypeSelection(item.id)}
                                    quantity={item.productsQuantity}
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
                        filteredProducts?.map((item) => (
                            <CustomRowItemCard
                                key={item.id}
                                productName={item.name}
                                productImg={item.imageUrls[0].url}
                                productPrice={item.price}
                                currency={item.currency}
                                sellingType={item.sellingType}
                                onClick={() => handleCardClick(item.id)}
                                onClickAddToBasket={()=>AddProductToBasket(item)}
                                onClickAddToFavourites={()=>AddProductToFavourites(item)}
                            />
                        ))
                    ) : (
                        products ? (
                            products?.map((item) => (
                                <CustomRowItemCard
                                    key={item.id}
                                    productName={item.name}
                                    productImg={item.imageUrls[0].url}
                                    productPrice={item.price}
                                    currency={item.currency}
                                    sellingType={item.sellingType}
                                    onClick={() => handleCardClick(item.id)}
                                    onClickAddToBasket={()=>AddProductToBasket(item)}
                                    onClickAddToFavourites={()=>AddProductToFavourites(item)}
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