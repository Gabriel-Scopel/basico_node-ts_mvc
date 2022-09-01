type Product = {
    title: string,
    price: number
};

const data: Product[] = [
    {title: 'produtoX', price: 10},
    {title: 'produtoY', price: 20},
    {title: 'produtoZ', price: 30}
];

export const Product = {
    getAll:(): Product[]=>{
        return data;
    },
    getFromPriceAfter:(price: number): Product[]=>{
        return data.filter(item =>{
            if(item.price >= price){
                return true;
            }else{
                return false;
            }
        })

    }
}