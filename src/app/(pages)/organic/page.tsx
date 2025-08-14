import { FC } from "react";
import { getOrganicProducts } from "@/service/product-service";
import { Product } from "@/types";
import Card from "@/components/home/card";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const OrganicProductsPage: FC = async () => {
    const { groceries } = await getOrganicProducts();

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-6">
                <Link href="/" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors mb-4">
                    <FaArrowLeft />
                    <span>Ana Sayfaya Dön</span>
                </Link>
            </div>
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-green-700 mb-4">Organik Ürünler</h1>
                <p className="text-lg text-gray-600">
                    Doğal ve organik ürünlerle sağlıklı beslenmek artık çok kolay.
                    Tüm ürünlerimiz sertifikalı organik standartlarda üretilmektedir.
                </p>
            </div>

            {groceries.length === 0 ? (
                <div className="text-center py-12">
                    <h2 className="text-2xl font-semibold text-gray-600 mb-4">
                        Şu anda organik ürün bulunmamaktadır
                    </h2>
                    <p className="text-gray-500">
                        Lütfen daha sonra tekrar kontrol ediniz.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {groceries.map((product: Product) => (
                        <Card key={product._id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrganicProductsPage;
