import { IProduct } from "./IProduct";

type basketItem = {product: IProduct, amount: number}

export interface IBasket {
  products: basketItem[],
}
