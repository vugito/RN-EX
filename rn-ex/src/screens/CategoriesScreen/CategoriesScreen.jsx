import React, {useEffect} from 'react';
import ItemsHeaderNavbarLayout from "../../components/sections/Headers/ItemsHeaderNavbarLayout/ItemsHeaderNavbarLayout";
import {useNavigation} from "@react-navigation/native";
import PrivateRoute from "../../routing/PrivateRoute";
import {useCommon} from "../../context/CommonContext";
import CustomItemCard from "../../common/customs/CustomItemCard/CustomItemCard";

const CategoriesScreen = () => {

    const {
        setSelectedCategoryId,
        categories,
        getAllCategories,
    } = useCommon();

    // const CommonContext = useCommon();


    const navigation = useNavigation();

    const handleCardClick = (id) => {
        setSelectedCategoryId(id);
        navigation.navigate('Home', {screen: 'ProductsScreen'});
    };

    const handleBackClick = () => {
        console.log("a");
        navigation.navigate('WelcomeScreen');
    };



    useEffect(() => {

        const GetAllCategories = async ()=>{
            console.log('Categories')
            const response = await getAllCategories();
            console.log(response)
        }



        GetAllCategories();
    }, [])


    return (
        <PrivateRoute children={
            <ItemsHeaderNavbarLayout
                title={"Categories"}
                onClick={handleBackClick}
                main={

                (categories && categories.map((item) => (
                    <CustomItemCard onClick={ ()=>handleCardClick(item.id)} key={item?.id} imageSource={item?.imageUrl} productName={item?.name} quantity={item?.productsQuantity}/>
                )))


            }></ItemsHeaderNavbarLayout>
        }>
        </PrivateRoute>


    );
};

export default CategoriesScreen;