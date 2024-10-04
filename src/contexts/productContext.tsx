import { createContext, ReactNode, useState } from "react";

interface CartContextData {
    cart: CartProps[];
    amountCart: number;
    addItemCart: (items: CartProps) => void;
}

interface CartProps {
    id: string;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number
}

interface CartProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextData);


function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<CartProps[]>([]);
    const [total, setTotal] = useState();
    function addItemCart(newItem: CartProps) {
        const existItemCart = cart.findIndex(item => item.id === newItem.id);
        if (existItemCart !== -1) {
            const cartList = cart;

            cartList[existItemCart].amount = cartList[existItemCart].amount + 1;
            cartList[existItemCart].total = cartList[existItemCart].amount * cartList[existItemCart].price
            return
        }

        const data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart([...cart, data])
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                amountCart: cart.length,
                addItemCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;