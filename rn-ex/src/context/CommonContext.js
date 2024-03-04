import React, { createContext, useState, useContext } from 'react';
import CommonDataServices from "../api-services/CommonDataServices"

import AsyncStorage from '@react-native-async-storage/async-storage';

const CommonContext = createContext({});

const CommonDataService = new CommonDataServices();

export const CommonProvider = ({ children }) => {

    const [categories, setCategories] = useState(null);

    const [products,setProducts] = useState(null);

    const [currentProduct,setCurrentProduct] = useState(null); // like static variables in c#

    const [selectedCategoryId,setSelectedCategoryId]=useState(null);

    const [selectedProductId,setSelectedProductId]=useState(null);


    const getAllCategories = async () => {
        try {
            setCategories(null);

            const response = await CommonDataService.getAllCategories();

            console.log("GetAllCats: => ",response);

            if (response !== null || response !== 'undefined') {
                setCategories(response);
            } else {
                throw new Error('Get Categories failed');
            }
        } catch (error) {
            console.error('Get Categories error:', error);
            throw error;
        }
    };

    const getAllProductsByCategoryId = async (categoryId) => {
        try {

            const response= await CommonDataService.getAllProductsByCategoryId(categoryId);

            console.log("get All Products: ",response);

            // const data = await response.json();

            // console.log(data)

            if (response !==null || response !== 'undefined') {
                setProducts(response.products);
            } else {
                throw new Error('Get Products failed');
            }
        } catch (error) {
            console.error('Get Categories error:', error);
            throw error;
        }
    };

    const getProductDetailsById = async (productId) => {
        try {
            const response = await CommonDataService.getProductById(productId);

            console.log("GetProdDetails: => ",response);

            if (response !== null || response !== 'undefined') {
                setCurrentProduct(response);
            } else {
                throw new Error('Get Product Details failed');
            }
        } catch (error) {
            console.error('Get Product Details error:', error);
            throw error;
        }
    };


    return (
        // fixed {register}
        <CommonContext.Provider value={{ categories, products, currentProduct, getAllCategories, getAllProductsByCategoryId, getProductDetailsById,selectedCategoryId,setSelectedCategoryId,selectedProductId,setSelectedProductId }}>
            {children}
        </CommonContext.Provider>
    );
};

export const useCommon = () => useContext(CommonContext);




