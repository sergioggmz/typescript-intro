
export interface Product {
    description: string;
    price: number;
}
interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// const phone: Product = {
//     description: 'Nokia 5200',
//     price: 160.0
// }

// const tablet: Product = {
//     description: 'iPad Air',
//     price: 250.0
// }




export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const { tax, products } = options;
    let total = 0;

    products.forEach(({ price }) => total += price);
    return [total, total * tax]
}


