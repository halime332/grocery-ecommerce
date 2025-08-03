import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { TbWeight } from "react-icons/tb";
import CardAction from "./card-action";

interface Props {
    product: Product;
}
const Card: FC<Props> = ({ product }) => {

    return (
        <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition overflow-hidden bg-white">

            <Link href={`/grocery/${product._id}`}>
                <div className="relative overflow-hidden h-46 ">
                    <Image
                        src={product.photo}
                        alt={product.name}
                        className="object-cover" fill />
                </div>
            </Link>

            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h1 className="text-lg font-bold text-gray-900">{product.name}</h1>
                        <span className="text-sm text-gray-500">{product.origin}</span>
                    </div>
                    <p className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-md text-xs text-gray-200">
                        <TbWeight />
                        {product.unit}
                    </p>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2 h-10 mb-3">
                    {product.description}

                </p>

                <div className="flex justify-between items-center mb-3">
                    <p className="text-xl font-bold text-green-700">
                        {product.price} ₺
                    </p>

                    <CardAction productId={product._id} />

                </div>
            </div>

        </div>

    )

};

export default Card;