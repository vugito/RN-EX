import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import styles from './styles';
import HeaderNavBar from "../../components/sections/Headers/HeaderNavBar/HeaderNavBar";
import CreditCardIcon from "../../common/icons/CreditCardIcon/CreditCardIcon";
import HomeIcon from "../../common/icons/HomeIcon/HomeIcon";
import CustomRowRadioButton from "../../common/customs/CustomRowRadioButton/CustomRowRadioButton";
import DroneIcon from "../../common/icons/DroneIcon/DroneIcon";
import WalkingIcon from "../../common/icons/WalkingIcon/WalkingIcon";
import BikeIcon from "../../common/icons/BikeIcon/BikeIcon";
import CustomRadioButton from "../../common/customs/CustomRadioButton/CustomRadioButton";

const CheckoutScreen = () => {

    const [selectedDeliveryOption,setSelectedDeliveryOption]=useState();

    const handleDeliveryOptionSelect = (value) => {
        setSelectedDeliveryOption(value);
    };


    const [isNonContactDelivery,setIsNonContactDelivery]= useState(false);

    const handleNonContactDelivery = () => {
        setIsNonContactDelivery(!isNonContactDelivery);
    };


    return (
        <View style={styles.container}>
            <HeaderNavBar title={"Checkout"} titleShown={true}/>

            <View style={styles.main}>

                <View style={styles.row}>

                    <View style={styles.rowHeader}>

                        <Text style={styles.Title}>
                            Payment Method
                        </Text>

                        <TouchableOpacity>
                            <Text style={styles.changeButton}>CHANGE</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.rowMain}>

                        <View style={styles.cardContainer}>

                            <CreditCardIcon/>

                            <Text style={styles.cardNumber}>**** **** **** 4747</Text>

                        </View>

                    </View>

                </View>

                <View style={[styles.row, styles.rowDeliveryAdress]}>

                    <View style={styles.rowHeader}>

                        <Text style={styles.Title}>
                            Delivery address
                        </Text>

                        <TouchableOpacity>
                            <Text style={styles.changeButton}>CHANGE</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.rowMain}>

                        <View style={styles.cardContainer}>

                            <HomeIcon/>

                            <View style={styles.textsContainer}>
                                <Text style={[styles.cardNumber, styles.adressText]}>Alexandra Smith</Text>
                                <Text style={[styles.cardNumber, styles.adressText]}>Cesu 31 k-2 5.st, SIA Chili</Text>
                                <Text style={[styles.cardNumber, styles.adressText]}>Riga</Text>
                                <Text style={[styles.cardNumber, styles.adressText]}>LV–1012</Text>
                                <Text style={[styles.cardNumber, styles.adressText]}>Latvia</Text>

                            </View>

                        </View>

                    </View>

                </View>

                <View style={[styles.row,styles.deliveryOptionsRow]}>

                    <View style={styles.rowHeader}>

                        <Text style={styles.Title}>
                            Delivery options
                        </Text>

                        <TouchableOpacity>
                            <Text style={styles.changeButton}>CHANGE</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.rowMain}>

                        <View style={styles.deliveryOptionsContainer}>

                            <CustomRowRadioButton
                                value={"I’ll pick it up myself"}
                                selected={selectedDeliveryOption === "I’ll pick it up myself"}
                                onSelect={handleDeliveryOptionSelect}
                                iconComponent={WalkingIcon}
                            />

                            <CustomRowRadioButton
                                value={"By courier"}
                                selected={selectedDeliveryOption === "By courier"}
                                onSelect={handleDeliveryOptionSelect}
                                iconComponent={BikeIcon}
                            />

                            <CustomRowRadioButton
                                value={"By Drone"}
                                selected={selectedDeliveryOption === "By Drone"}
                                onSelect={handleDeliveryOptionSelect}
                                iconComponent={DroneIcon}
                            />

                        </View>

                    </View>

                </View>

                <View style={styles.rowHeader}>

                    <Text style={styles.Title}>
                        Non-contact-delivery
                    </Text>

                    <TouchableOpacity>
                        <CustomRadioButton isChecked={isNonContactDelivery} onRadioButtonChange={handleNonContactDelivery}/>
                    </TouchableOpacity>

                </View>


            </View>

        </View>
    );
};

export default CheckoutScreen;