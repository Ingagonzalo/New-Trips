import React, { createContext, useState } from 'react'

export const CartContext = createContext([]) //1-creo un contexto

export const CartProvider = ({ children }) => { //2-creo un provedor
    const [productCartList, setProductCartList] = useState([]);
    const isInCart = (productId) => {
        const productExist = productCartList.some(item => item.id === productId);
        return productExist;
    }
    const addItem = (item, quantity) => {
        console.log("item", item, "quantity", quantity)
        const newProduct = {
            ...item,
            quantity
        }
        console.log("newProduct", newProduct)

        //si el producto existe, busquelo en el arreglo, y remplaze la canitda

        if (isInCart(item.id)) {
            const productPos = productCartList.findIndex(product => product.id === item.id);
            const newArreglo = [...productCartList];
            newArreglo[productPos].quantity = newArreglo[productPos].quantity + quantity;
            newArreglo[productPos].price = newArreglo[productPos].quantity * newArreglo[productPos].price;
            setProductCartList(newArreglo);
        } else {
            //sino existe, agregue el poducto al carrito
            const newArreglo = [...productCartList];
            newProduct.price = newProduct.quantity * newProduct.price;
            newArreglo.push(newProduct);
            setProductCartList(newArreglo);
        }
    }
    const removeItem = (itemId) => {
        console.log("itemId", itemId)
        const newArreglo = productCartList.filter(product => product.id !== itemId);
        setProductCartList(newArreglo)
    }
    const clearCart = () => {
        setProductCartList([]);
    }
    const getTotalPrice = () => {
        const totalPrice = productCartList.reduce((acc, item) => acc + item.price, 0);
        console.log(totalPrice);
        return totalPrice;
    }
    const getTotalProducts = () => {
       const totalProducts = productCartList.reduce((acc, item) => acc + item.quantity, 0);
        return totalProducts;
    }
    return (
        <CartContext.Provider value={{ productCartList, addItem, removeItem, clearCart, isInCart, getTotalPrice, getTotalProducts }}>
            {children}
        </CartContext.Provider>
    )
}