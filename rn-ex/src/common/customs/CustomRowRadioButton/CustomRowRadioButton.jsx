import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./styles";
import CheckIcon from "../../icons/CheckIcon/CheckIcon";


const CustomRowRadioButton = ({ value, selected,setSelected,iconComponent,buttonStyle }) => {
    const handleSelect=()=>{
        setSelected(!selected);
    }

    const IconComponent = iconComponent;

    return (

        <TouchableOpacity style={styles.clickableRadioButton} onPress={handleSelect}>
            <View style={[styles.radioButtonContainer,buttonStyle, selected && styles.selectedradioButton]}>


                <View style={styles.permanentIconContainer}>
                    {IconComponent && selected ? (
                        <IconComponent color="#6C0EE4"/>
                    ) : <IconComponent />}
                </View>


                <View style={styles.textContainer}>
                    <Text style={[styles.radioButtonText, selected && styles.selectedRadioButtonText]}>{value}</Text>
                </View>


                <View style={styles.selectedIconContainer}>
                    {selected ? (
                        <CheckIcon color="#6C0EE4"/>
                    ) : null}
                </View>

            </View>
        </TouchableOpacity>

    );
};

export default CustomRowRadioButton;