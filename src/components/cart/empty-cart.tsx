import { FC } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import Link from "next/link";

const EmptyCart: FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 min-h-[60vh] flex flex-col justify-center items-center items-center">
            <MdRemoveShoppingCart className="text-4xl text-gray-400 mb-4" />
            <h1 className="text-gray-600 mb-6">Sepetiniz boş</h1>
            <Link href="/" className="bg-green-600 text-white px-4 py-4 rounded-md font-medium hover:bg-green-700 tarnsition">Alışverişe Devam Et</Link>
        </div>
    );
};

export default EmptyCart;