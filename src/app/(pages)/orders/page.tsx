import { getMyOrders } from "@/service/basket-service";
import { FC } from "react";
import EmptyOrders from "./empty-orders";
import Image from "next/image";


const OrdersPage: FC = async () => {
    const { orders } = await getMyOrders();

    if (!orders || orders.length === 0) {
        return <EmptyOrders />
    }
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Siparişlerim</h1>
            {orders.map((order) => (
                <div key={order._id}>
                    <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-5">
                            <div className="flex items-center gap-3 mb-3 md:mb-0">
                                <div className="w-20 h-20 relative rounded-lg overflow-hidden border border-gray-200">
                                    <Image
                                        src={order.product.photo}
                                        alt={order.product.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            ))}


        </div>
    );
};

export default OrdersPage;