"use client";

import { clearCart } from "@/service/basket-service";
import { FC } from "react"
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ClearBtn: FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleClearCart = async () => {
        clearCart()
            .then(() => {
                toast.success("Sepetiniz  temizlendi");
                router.refresh(); //sayfayı yenile
            })
            .catch((error) => {
                toast.error("Sepetiniz temizlenemedi");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <button disabled={isLoading} onClick={handleClearCart} className="text-red-600 hover:text-red-700 transition flex items-center gap-1 text-sm cursor-pointer">
            <FaTrash />
            <p>Sepeti Boşalt</p>
        </button>
    );
};

export default ClearBtn;