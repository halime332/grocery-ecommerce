type Product = {

    _id: string,
    name: string,
    category: string,
    price: number,
    unit: string,
    stock: number,
    origin: string,
    isOrganic: boolean,
    description: string,
    nutritionalValue: string,
    expiryDays: number,
    photo: string,
    __v: number

}

type Cart = {
    _id: string;
    userId: string;
    items: {
        grocery: Product;
        quantity: number;
        price: number;
        name: string;
        _id: string;
    }[];

    totalAmount: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

type Order = {
    _id: string;
    products: Product[];
    quantity: number;
    money_spend: number;
    currency: "TRY";
    customer_id: string;
    customer_phone: string;
    customer_name: string;
    delivery_address: string;
    is_delivery: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;

};

//Promise tipleri

type GetAllProductsResponse = Promise<{
    groceries: Product[];
}>;

type GetProductByIdResponse = Promise<{
    grocery: Product;
}>;




type AddToBasketResponse = Promise<{
    message: string;
    cart: Cart;
}>;

type CheckoutSingleItemResponse = Promise<{
    url: string;
}>;

type GetCartItemsResponse = Promise<{
    cart: Cart;
}>;

type GetMyOrdersResponse = Promise<{
    orders: Order[];
}>;

export type {
    Cart, Product, GetAllProductsResponse, AddToBasketResponse, GetProductByIdResponse, CheckoutSingleItemResponse, GetCartItemsResponse, Order, GetMyOrdersResponse,
};