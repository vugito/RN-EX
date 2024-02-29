import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import CustomButton from "./src/common/customs/CustomButton/CustomButton";
import HeartIcon from "./src/common/icons/HeartIcon/HeartIcon";
import CustomSearchBar from "./src/common/customs/CustomSearchBar/CustomSearchBar";
import CustomTextInput from "./src/common/customs/CustomTextInput/CustomTextInput";
import CustomChip from "./src/common/customs/CustomChip/CustomChip"
import CheckIcon from "./src/common/icons/CheckIcon/CheckIcon";
import GridIcon from "./src/common/icons/GridIcon/GridIcon"
import BikeIcon from "./src/common/icons/BikeIcon/BikeIcon"
import CustomRowRadioButton from "./src/common/customs/CustomRowRadioButton/CustomRowRadioButton";
import CustomItemCard from "./src/common/customs/CustomItemCard/CustomItemCard";
import DroneIcon from "./src/common/icons/DroneIcon/DroneIcon";
import CustomRowItemCard from "./src/common/customs/CustomRowItemCard/CustomRowItemCard";
import SplashScreen from "./src/screens/SplashScreen/SplashScreen";
import HeaderNavBar from "./src/components/sections/Headers/HeaderNavBar/HeaderNavBar";
import AuthLayout from "./src/common/layouts/AuthLayout/AuthLayout";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen/RegisterScreen";
import ProductItemScreen from "./src/screens/ProductItemScreen/ProductItemScreen";
import PaymentCardScreen from "./src/screens/PaymentCardScreen/PaymentCardScreen";

export default function App() {

    const textStyles = {
        fontSize: 20,
        backgroundColor: 'red'
    }

    const [selected,setSelected]=useState();
    const [selected2,setSelected2]=useState();


    const handleRadioSelect = (value) => {
        setSelected(value);
    };





    return (
        <View style={styles.container}>
            {/*<CustomSearchBar/>*/}
            {/*<CustomButton textShown={true} text="Accept" iconShown={false} textStyles={textStyles}*/}
            {/*              icon={<HeartIcon/>}/>*/}

            {/*<CustomTextInput label={"Label"} placeholder={"Text"}/>*/}

            {/*<CustomChip value={"Chip chip"} selected={selected} setSelected={setSelected} quantity={14}/>*/}
            {/*<GridIcon boxInsideColor={"rgba(114,3,255,0.5)"} color={"#7203FF"}/>*/}


            {/*<CustomRowRadioButton*/}
            {/*    value={"Option 1"}*/}
            {/*    selected={selected === "Option 1"}*/}
            {/*    onSelect={handleRadioSelect}*/}
            {/*    iconComponent={BikeIcon}*/}
            {/*/>*/}

            {/*<CustomRowRadioButton*/}
            {/*    value={"Option 2"}*/}
            {/*    selected={selected === "Option 2"}*/}
            {/*    onSelect={handleRadioSelect}*/}
            {/*    iconComponent={DroneIcon}*/}
            {/*/>*/}

            {/*<CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>*/}

            {/*<CustomRowItemCard*/}
            {/*    productName="Apple"*/}
            {/*    productImg="https://t4.ftcdn.net/jpg/00/59/96/75/360_F_59967553_9g2bvhTZf18zCmEVWcKigEoevGzFqXzq.jpg"*/}
            {/*    productPrice="3.50"*/}
            {/*    currency="$"*/}
            {/*    sellingType="kg"/>*/}


            {/*<SplashScreen/>*/}
            {/*<SplashScreen2/>*/}

            {/*<SignInScreen text="Sign In Screen"/>*/}

            {/*<HeaderNavBar titleShown={true} title="Ckeckout"/>*/}

            {/*<AuthLayout buttonText="SIGN IN"/>*/}

            {/*<LoginScreen/>*/}
            {/*<RegisterScreen/>*/}

            {/*<ProductItemScreen productName={"Boston Lettuce"} price={"1.10"} currency={'€'} weight={'150gr'} additionalSellingType={"piece"} country={"Spain"} sellingType={"price"} description={"Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled."}/>*/}

            <PaymentCardScreen/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#797579',
        // backgroundColor: '#1e111e',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
