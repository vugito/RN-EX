import React from 'react';
import {View, Text} from "react-native";
import styles from './styles';
import ItemsHeaderNavbarLayout from "../../components/sections/Headers/ItemsHeaderNavbarLayout/ItemsHeaderNavbarLayout";
import {useNavigation} from "@react-navigation/native";
import PrivateRoute from "../../routing/PrivateRoute";
import CustomTemp from "../../components/customs/CustomTemp/CustomTemp";
import {useFavourites} from "../../context/FavouriteContext";

const FavouritesScreen = ({title= "Favourites", backgroundImage}) => {

    const {
        favourites,
        removeProductFromFavourites
    } = useFavourites();

    const navigation = useNavigation();

    const handleBackClick = () => {
        navigation.navigate('Profile');
    };

    return (
        <PrivateRoute children={
            <ItemsHeaderNavbarLayout searchIsShown={false} onClick={handleBackClick} title={title} backgroundImage={backgroundImage} main={
                <>
                    <View style={styles.chipsContainer}>
                        {favourites ? (
                            favourites.map((item,index) => (
                                <CustomTemp
                                    key={index}
                                    productName={item.name}
                                    productImg={item.img}
                                    productPrice={item.price}
                                    sellingType={item.sellingType}
                                    currency={item.currency}
                                    onBtnClick={()=>removeProductFromFavourites(item.id)}
                                />
                            ))
                        ) : (
                            <Text>Loading category Types...</Text>
                        )}
                    </View>

                </>
            }></ItemsHeaderNavbarLayout>
        }>
        </PrivateRoute>


    );
};

export default FavouritesScreen;