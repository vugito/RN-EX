import React from 'react';
import {ScrollView, Text, View, Image} from "react-native";
import styles from "./styles";
import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";
import CustomSearchBar from "../../../../common/customs/CustomSearchBar/CustomSearchBar";
import CustomItemCard from "../../../../common/customs/CustomItemCard/CustomItemCard";

const ItemsHeaderNavbarLayout = ({main,title,backgroundImage,onClick}) => {
    return (


        <View style={styles.container}>


            <HeaderNavBar onClick={onClick} titleShown={true} backroundImage={backgroundImage}/>

            <ScrollView>

                <View style={styles.main}>

                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>{title}</Text>
                    </View>

                    <View style={styles.searchContainer}>
                        <CustomSearchBar/>
                    </View>

                    <View style={styles.mainContainer}>
                        {main}
                    </View>

                </View>

            </ScrollView>

        </View>
    );
};

export default ItemsHeaderNavbarLayout;