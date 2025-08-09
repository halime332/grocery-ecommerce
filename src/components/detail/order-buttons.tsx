"use client";

import { Product } from "@/types";
import { FC } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { addToBasket, checkoutSingleItem } from "@/service/basket-service";
import { toast } from "react-toastify";

interface Props {
    grocery: Product;

}
const OrderButtons: FC<Props> = ({ grocery }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(0);


    //sepete ekle
    const handleAddToCart = () => {
        if (quantity < 1 || quantity > grocery.stock) return;
        setIsLoading(true);

        addToBasket(grocery._id, quantity)
            .then(() => {
                setQuantity(0);
                toast.success(`${quantity} ${grocery.unit} ${grocery.name} sepete eklendi`);
            })
            .catch((err) => {
                console.log(err);
                toast.error("Sepete Ekleme Hatası");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    //hemen satın al
    const handleBuyNow = () => {
        if (quantity < 1 || quantity > grocery.stock) return;
        setIsLoading(true);

        checkoutSingleItem(grocery, quantity)
            .then((res) => {
                setQuantity(0);
                window.open(res.url, "_blank");
                toast.success(`${quantity} ${grocery.unit} ${grocery.name} satın alındı`);
            })
            .catch((err) => {
                console.log(err);
                toast.error("Satın Alma Hatası");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div >
            {/*Miktar Seçimi */}
            <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded">
                    <button
                        disabled={quantity === 0 || isLoading}
                        onClick={() => setQuantity(quantity - 1)} className="cursor-pointer p-3 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                        <FaMinus />
                    </button>
                    <span className="px-3 py-2 border-x border-gray-300 min-w-[40px] text-center">{quantity}</span>

                    <button
                        disabled={quantity === grocery.stock || isLoading}
                        onClick={() => setQuantity(quantity + 1)} className="cursor-pointer p-3 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                        <FaPlus />
                    </button>
                </div>
            </div>
            {/*Butonlar */}
            <div className="flex items-center gap-3 mt-4">
                <button
                    disabled={isLoading} onClick={handleAddToCart} className="flex-1 flex items-center justify-center gap-2 textgreen-600 border border-green-600 hover:bg-green-100 cursor-pointer transition-color px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed">
                    <FaShoppingCart />
                    Sepete Ekle
                </button>

                <button
                    disabled={isLoading}
                    onClick={handleBuyNow} className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-700 transition-color text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed">
                    Hemen Satın Al
                </button>
            </div>
        </div>
    )
}

export default OrderButtons;