const PRODUCTS = [
    {
        id: 100,
        name: 'Apple stock',
        price: 350,
        image: require('client/src/common/assets/apple.webp'),
        description: 'Opening price: 123, closing price: 125'
    },
    {
        id: 101,
        name: 'Amazon stock',
        price: 600,
        image: require('client/src/common/assets/amazon.png'),
        description: 'Opening price: 205, closing price: 195'
    }
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}