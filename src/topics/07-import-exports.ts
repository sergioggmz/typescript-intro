import { Product, taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 500
    }
]
const tax = 0.15;
const [total, totalTax] = taxCalculation({ products: shoppingCart, tax });
console.log('Total', total);
console.log('Tax', totalTax);

