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

export type { Product, GetAllProductsResponse, AddToBasketResponse, GetProductByIdResponse };