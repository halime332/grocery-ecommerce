import { AddToBasketResponse } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const userId = process.env.NEXT_PUBLIC_USER_ID;

//sepete ürün ekle

const addToBasket = async (groceryId: string, quantity: number): AddToBasketResponse => {

    const res = await fetch(`${BASE_URL}/api/cart`, {
        method: "POST",
        body: JSON.stringify({ userId, groceryId, quantity }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return res.json();
};

export { addToBasket };