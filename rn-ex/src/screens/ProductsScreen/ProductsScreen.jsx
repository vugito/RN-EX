import React from 'react';
import {View, Text} from "react-native";
import styles from './styles';
import ItemsHeaderNavbarLayout from "../../components/sections/Headers/ItemsHeaderNavbarLayout/ItemsHeaderNavbarLayout";
import CustomItemCard from "../../common/customs/CustomItemCard/CustomItemCard";
import CustomRowItemCard from "../../common/customs/CustomRowItemCard/CustomRowItemCard";
const ProductsScreen = ({title, backgroundImage}) => {
    return (
        <ItemsHeaderNavbarLayout title={title} backgroundImage={backgroundImage} main={
            <>

            </>
        }></ItemsHeaderNavbarLayout>
    );
};

export default ProductsScreen;