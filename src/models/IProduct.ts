import { IProductType } from "./IProductType";

export interface IProduct {
  id: number,
  name: string,
  photo: string,
  type: IProductType,
  gost: string,
  price: number,
  hit? : boolean
  promotion? : boolean
}
