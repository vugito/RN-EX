import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from "./src/common/customs/CustomButton/CustomButton";
import HeartIcon from "./src/common/icons/HeartIcon/HeartIcon";
import CustomSearchBar from "./src/common/customs/CustomSearchBar/CustomSearchBar";
import CustomTextInput from "./src/common/customs/CustomTextInput/CustomTextInput";
import CustomChip from "./src/common/customs/CustomChip/CustomChip"
import CheckIcon from "./src/common/icons/CheckIcon/CheckIcon";
import GridIcon from "./src/common/icons/GridIcon/GridIcon"
import BikeIcon from "./src/common/icons/BikeIcon/BikeIcon"
import {useState} from "react";
import CustomRowRadioButton from "./src/common/customs/CustomRowRadioButton/CustomRowRadioButton";
import CustomItemCard from "./src/common/customs/CustomItemCard/CustomItemCard";

export default function App() {

    const textStyles = {
        fontSize: 20,
        backgroundColor: 'red'
    }

    const [selected,setSelected]=useState();


    return (
        <View style={styles.container}>
            {/*<CustomSearchBar/>*/}
            {/*<CustomButton textShown={true} text="Accept" iconShown={false} textStyles={textStyles}*/}
            {/*              icon={<HeartIcon/>}/>*/}

            {/*<CustomTextInput label={"Label"} placeholder={"Text"}/>*/}

            {/*<CustomChip value={"Petux Elvin"} selected={selected} setSelected={setSelected} quantity={14}/>*/}
            {/*<GridIcon boxInsideColor={"rgba(114,3,255,0.5)"} color={"#7203FF"}/>*/}



            {/*<CustomRowRadioButton selected={selected} setSelected={setSelected} value={"I'll pick it up myself"} iconComponent={BikeIcon}/>*/}

            {/*<CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin"} quantity={31}/>*/}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F5F5',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
