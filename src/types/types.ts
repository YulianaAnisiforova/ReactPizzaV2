export type PizzaType = {
    id: number,
    imageUrl: string,
    title: string,
    types: number[],
    sizes: number[],
    price: number,
    category: number,
    rating: number,
}

export const PizzaDoughType = ['тонкое', 'традиционное']

export type CartType = {
    id: number,
    title: string,
    price: number,
    imageUrl: string,
    type: string,
    size: number,
    count: number,
}