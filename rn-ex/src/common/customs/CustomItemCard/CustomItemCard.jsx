import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from "./styles";

const CustomItemCard = ({ imageSource, productName, quantity }) => {
    return (
        <View style={styles.cardContainer}>

            <View style={styles.imageContainer}>
                <Image source={{ uri: imageSource }} style={styles.image} resizeMode="cover" />
            </View>

            <View style={styles.productNameContainer}>
            <Text style={styles.productName}>{productName}</Text>
            </View>
            <View style={styles.quantityContainer}>
                <Text style={styles.quantityText}>({quantity})</Text>
            </View>
        </View>
    );
};

export default CustomItemCard;
