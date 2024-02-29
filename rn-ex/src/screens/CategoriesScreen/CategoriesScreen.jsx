import React from 'react';
import {View, Text, ScrollView } from "react-native";
import styles from './styles';
import HeaderNavBar from "../../components/sections/Headers/HeaderNavBar/HeaderNavBar";
import CustomSearchBar from "../../common/customs/CustomSearchBar/CustomSearchBar";
import CustomItemCard from "../../common/customs/CustomItemCard/CustomItemCard";
const CategoriesScreen = () => {
    return (
        <View style={styles.container}>

            <HeaderNavBar titleShown={true}/>

            <ScrollView>
            <View style={styles.main}>

                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Categories</Text>
                </View>

                <View style={styles.searchContainer}>
                        <CustomSearchBar/>
                </View>

                <View style={styles.itemContainer}>

                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>
                    <CustomItemCard imageSource={"https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1714003200&v=beta&t=MoQZZJ6VGFm49LIxZtNbZOTE9ix9H8vSiSXBy5fl4vs"} productName={"Elvin Süleymanov"} quantity={31}/>

                </View>

            </View>

            </ScrollView>

        </View>
    );
};

export default CategoriesScreen;