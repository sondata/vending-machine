const ProductTypes = {
    BOTTLE: 'bottle-water',
    CAN: 'hockey-puck',
    PACKAGE: 'box'
} as const;

export type ProductType = keyof typeof ProductTypes;


export type Product = {
    id: number;
    name: string;
    price: number;
    type: ProductType;
    count: number;
}
