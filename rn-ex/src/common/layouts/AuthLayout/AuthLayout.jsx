import React, {useContext} from 'react';
import {View, Text, ImageBackground, Image} from "react-native";
import styles from './styles';
import BoxIcon from "../../icons/BoxIcon/BoxIcon";
import CustomButton from "../../customs/CustomButton/CustomButton";
import {useAuth} from "../../../context/AuthContext";
import {useNavigation} from "@react-navigation/native";

const AuthLayout = ({buttonText, children, btnOnClick}) => {

    const auth = useAuth();

    const navigate = useNavigation();


    const handleClick = () => {

    }

    return (
        <View style={styles.container}>

            <ImageBackground
                source={require('../../../../assets/images/SplashScreenBG.png')}
                style={styles.backgroundImage}
            >

                <View style={styles.logoContainer}>
                    <Image style={styles.logoImgStyle} source={require('../../../../assets/images/DLogo.png')}/>
                </View>

                {children}

                <View style={styles.btnContainer}>
                    <CustomButton
                        textShown={true}
                        text={buttonText}
                        buttonStyles={styles.buttonStyles}
                        textStyles={styles.textStyles}
                        onClick={btnOnClick}
                    />
                </View>

            </ImageBackground>

        </View>
    );
};

export default AuthLayout;