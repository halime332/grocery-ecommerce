import { FC } from "react";
import { getAllProducts } from "@/service/product-service";
import { Product } from "@/types";
import Card from "./card";

const Products: FC = async () => {
    const { groceries } = await getAllProducts();

    // elimizdeki diziyi istediğimiz formata dönüştürmek için
    const groupedProducts = groceries.reduce<Record<string, Product[]>>(
        (obj, groduct) => {
            // ürünün kategorisini al
            const category = groduct.category;
            // nesnenin içerisinde ilgili kategoriyle alakalı bir alan yoksa oluştur
            if (!obj[category]) {
                obj[category] = [];
            }
            //nesnenin içerisinde ilgili kategoriyle alakalı bir alan  varsa o alana ürünü ekle
            obj[category].push(groduct);
            // nesneyi döndür
            return obj;
        },
        {}
    );



    return (
        <div className="flex flex-col gap-10 ">
            {Object.keys((groupedProducts)).map((category, key) => (
                <div key={key}>
                    <h2 className="text-2xl font-bold mb-5">{category}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {groupedProducts[category].map((product) => (
                            <Card key={product._id} product={product} />
                        ))}
                    </div>
                </div>))}
        </div>
    );
};

export default Products;