import React, {useState} from 'react';
import {View, Text} from "react-native";
import styles from './styles';
import ItemsHeaderNavbarLayout from "../../components/sections/Headers/ItemsHeaderNavbarLayout/ItemsHeaderNavbarLayout";
import CustomItemCard from "../../common/customs/CustomItemCard/CustomItemCard";
import CustomRowItemCard from "../../common/customs/CustomRowItemCard/CustomRowItemCard";
import CustomChip from "../../common/customs/CustomChip/CustomChip"
const ProductsScreen = ({title, backgroundImage}) => {

    const [selected,setSelected]=useState();

    return (
        <ItemsHeaderNavbarLayout title={title} backgroundImage={backgroundImage} main={
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

                <CustomRowItemCard
                    productName="Apple"
                    productImg={require("../../../assets/images/elvin.jpg")}
                    productPrice="3.50"
                    currency="$"
                    sellingType="kg"/>

                <CustomRowItemCard
                    productName="Apple"
                    productImg={require("../../../assets/images/elvin.jpg")}
                    productPrice="3.50"
                    currency="$"
                    sellingType="kg"/>

                <CustomRowItemCard
                    productName="Apple"
                    productImg={require("../../../assets/images/elvin.jpg")}
                    productPrice="3.50"
                    currency="$"
                    sellingType="kg"/>

                <CustomRowItemCard
                    productName="Apple"
                    productImg={require("../../../assets/images/elvin.jpg")}
                    productPrice="3.50"
                    currency="$"
                    sellingType="kg"/>

                <CustomRowItemCard
                    productName="Apple"
                    productImg={require("../../../assets/images/elvin.jpg")}
                    productPrice="3.50"
                    currency="$"
                    sellingType="kg"/>

                <CustomRowItemCard
                    productName="Apple"
                    productImg={require("../../../assets/images/elvin.jpg")}
                    productPrice="3.50"
                    currency="$"
                    sellingType="kg"/>

                <CustomRowItemCard
                    productName="Apple"
                    productImg={require("../../../assets/images/elvin.jpg")}
                    productPrice="3.50"
                    currency="$"
                    sellingType="kg"/>

                <CustomRowItemCard
                    productName="Apple"
                    productImg={require("../../../assets/images/elvin.jpg")}
                    productPrice="3.50"
                    currency="$"
                    sellingType="kg"/>



            </>
        }></ItemsHeaderNavbarLayout>
    );
};

export default ProductsScreen;