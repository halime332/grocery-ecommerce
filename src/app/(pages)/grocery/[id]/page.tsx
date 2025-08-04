import { getProductById } from "@/service/product-service";
import Link from "next/link";
import { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

interface Props {
    params: {
        id: string;
    };
}

const Grocery: FC<Props> = async ({ params }) => {
    const { id } = params;
    const { grocery } = await getProductById(id);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <Link href="/" className="flex items-center gap-2 hover:underline text-green-600">
                    <FaArrowLeft />
                    <span>Anasayfaya Dön</span>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                    <div className="relative h-96 md:w-1/2">
                        {grocery?.photo && (
                            <Image
                                src={grocery.photo}
                                alt={grocery.name || "Grocery"}
                                fill
                                className="object-cover"
                            />
                        )}
                    </div>
                    <div className="p-6 md:w-1/2">
                        <h2 className="text-2xl font-bold mb-2">{grocery?.name}</h2>
                        <p className="text-gray-600 mb-4">{grocery?.description}</p>
                        <p className="text-green-600 font-semibold text-lg">{grocery?.price} TL</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grocery;
