import React from 'react';
import styles from './styles';
import {Pressable, Text} from "react-native";

const CustomButton = ({iconShown, icon, textShown, text, textStyles, buttonStyles,iconColor}) => {

    const IconComponent = icon;

    return (
        <Pressable style={[styles.container, buttonStyles]}>
            {iconShown &&  <IconComponent color={iconColor}/>}
            {textShown &&
                <Text style={[styles.text, textStyles]}>{text}</Text>}
        </Pressable>
    );
};


export default CustomButton;