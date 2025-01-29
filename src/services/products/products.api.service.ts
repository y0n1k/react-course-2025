import {IProduct} from "../../models/product/IProduct.ts";

export const getProductsById = async (id:number):Promise<{users:IProduct[]}> => {
    return await fetch('https://dummyjson.com/carts'+'/'+id)
        .then(value => value.json())
}