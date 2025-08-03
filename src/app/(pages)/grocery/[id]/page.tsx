import { getProductById } from "@/service/product-service";
import Link from "next/link";
import { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

interface Props {
    params: Promise<{
        id: string;
    }>
}

const Grocery: FC<Props> = async ({ params }) => {
    const { id } = await params;
    const { grocery } = await getProductById(id);

    return (
        <div className="container mx-auto px-4 py-8 ">
            <div className="mb-8">
                <Link href="/" className="flex items-center gap-2 hover:underline text-green-600">
                    <FaArrowLeft />
                    <span>Anasayfaya Dön</span>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                    <div className="relative  h-96 md:w-1/2">
                        <Image src={grocery.photo} alt={grocery.name} fill className="object-cover w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Grocery;