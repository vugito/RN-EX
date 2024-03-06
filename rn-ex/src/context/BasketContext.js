import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BasketServices from "../api-services/BasketServices";



const BasketContext = createContext({});

const BasketService = new BasketServices();

export const BasketProvider = ({ children }) => {

    const [basket, setBasket] = useState([]);

    const addProductToBasket = (productToAdd) => {
        const newBasket = [...basket, productToAdd];
        setBasket(newBasket);
    };

    const removeProductFromBasket = (productIdToRemove) => {
        const index = basket.findIndex(product => product.id === productIdToRemove);
        if (index !== -1) {
            const updatedBasket = [...basket.slice(0, index), ...basket.slice(index + 1)];
            setBasket(updatedBasket);
        }
    };


    const finishShopping =async (token) => {
        console.log("Basket Context token: ",token);
        const response = await BasketService.finishShopping(basket,token);
        console.log("FINISH SHOPPING RESPONSE: ",response);
        if(response){
            setBasket([]);
        }
    }

    useEffect(()=>{
        console.log(basket);
    },[basket])

    return (
        <BasketContext.Provider value={{ basket, addProductToBasket,removeProductFromBasket,FinishShopping: finishShopping }}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = () => useContext(BasketContext);




