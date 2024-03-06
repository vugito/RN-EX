import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BasketServices from "../api-services/BasketServices";



const BasketContext = createContext({});

const BasketService = new BasketServices();

export const BasketProvider = ({ children }) => {

    const [basket, setBasket] = useState([]);

    const addProductToBasket = (productToAdd) => {
        console.log("productToAdd: ",JSON.stringify(productToAdd));
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
        const basketIds=basket.map(x=>x.id);
        const response = await BasketService.finishShopping(basketIds,token);
        if(response){
            setBasket([]);
        }
    }

    useEffect(()=>{
        console.log(JSON.stringify(basket));
    },[basket])

    return (
        <BasketContext.Provider value={{ basket, addProductToBasket,removeProductFromBasket,FinishShopping: finishShopping }}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = () => useContext(BasketContext);




