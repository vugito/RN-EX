import React from 'react';
import {View, Text, ImageBackground, Image} from "react-native";
import styles from "./styles"
import BoxIcon from "../../components/icons/BoxIcon/BoxIcon";
import CustomButton from "../../components/customs/CustomButton/CustomButton";
import {useNavigation} from "@react-navigation/native";
import PrivateRoute from "../../routing/PrivateRoute"

const SplashScreen = () => {

    const navigation = useNavigation();

    const handleOrderNow = () => {
        navigation.navigate('HomeScreen', { screen: 'CategoriesScreen' });
    };

    return (
        <PrivateRoute children={
            <View style={styles.container}>

                <ImageBackground
                    source={require('../../../assets/images/SplashScreenBG.png')}
                    style={styles.backgroundImage}
                >

                    <View style={styles.logoContainer}>
                        <Image style={styles.logoImgStyle} source={require('../../../assets/images/DLogo.png')}/>
                    </View>

                    <View style={styles.bottomContainer}>

                        <View style={styles.iconContainer}>
                            <BoxIcon containerstyle={styles.icon}/>
                        </View>


                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Non-Contact Deliveries</Text>
                        </View>


                        <View style={styles.descriptionContainer}>
                            <Text style={styles.description}>
                                When placing an order, select the option “Contactless delivery” and the courier will leave
                                your order at the door.
                            </Text>
                        </View>

                        <View style={styles.buttonsContainer}>
                            <CustomButton textShown={true} onClick={handleOrderNow}  buttonStyles={styles.orderNowButton} text="ORDER NOW"
                                          iconShown={false} textStyles={styles.orderNowButtonText}/>
                            <CustomButton textShown={true} onClick={handleOrderNow} buttonStyles={styles.dismissButton} text="DISMISS"
                                          iconShown={false} textStyles={styles.dismissButtonText}/>

                        </View>

                    </View>

                </ImageBackground>

            </View>
        }>
        </PrivateRoute>


    );
};

export default SplashScreen;