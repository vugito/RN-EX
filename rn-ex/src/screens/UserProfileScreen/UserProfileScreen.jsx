import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, Image} from "react-native";
import styles from "./styles"
import BoxIcon from "../../components/icons/BoxIcon/BoxIcon";
import CustomButton from "../../components/customs/CustomButton/CustomButton";
import {useNavigation} from "@react-navigation/native";
import PrivateRoute from "../../routing/PrivateRoute"
import {useAuth} from "../../context/AuthContext";
import HeaderNavBar from "../../components/sections/Headers/HeaderNavBar/HeaderNavBar";

const UserProfileScreen = () => {


    const {getUser,user} = useAuth();

    const navigation = useNavigation();

    const handleFavourites = () => {
        navigation.navigate('Favourite', { screen: 'FavouriteScreen' });
    };

    useEffect(() => {
        getUser();
        console.log("User => ",user)
    }, []);

    return (
        <PrivateRoute children={
            <View style={styles.container}>

                <ImageBackground
                    source={require('../../../assets/images/card_bg.png')}
                    style={styles.backgroundImage}
                >

                    <View style={styles.logoContainer}>
                        <Image style={styles.logoImgStyle} source={require('../../../assets/images/user-profile.png')}/>
                    </View>

                    <View style={styles.bottomContainer}>




                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{user?.name}</Text>
                        </View>

                        <View style={styles.titleContainer}>
                            <Text style={[styles.title, {fontSize: 28}]}>{user?.email}</Text>
                        </View>




                        <View style={styles.descriptionContainer}>
                            <Text style={styles.description}>
                                Some information about user
                            </Text>
                        </View>

                        <View style={styles.buttonsContainer}>
                            <CustomButton textShown={true} onClick={handleFavourites}  buttonStyles={styles.orderNowButton} text="History"
                                          iconShown={false} textStyles={styles.orderNowButtonText}/>
                            <CustomButton textShown={true} onClick={handleFavourites}  buttonStyles={styles.orderNowButton} text="Favourites"
                                          iconShown={false} textStyles={styles.orderNowButtonText}/>

                        </View>

                    </View>

                </ImageBackground>

            </View>
        }>
        </PrivateRoute>


    );
};

export default UserProfileScreen;