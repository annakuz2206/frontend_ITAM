type Product ={
    id: number
    title: string
    price: number 
}

type DiscountedProduct = Product & {
    persentageВiscount: number;
    finalPrise: number;
    SaleEndDate: string;
}

let item: DiscountedProduct = {
    id: 2410678,
    title: "labyby",
    price: 99_999,
    persentageВiscount: 99,
    finalPrise: 999.99,
    SaleEndDate: "12_12_2024"
}