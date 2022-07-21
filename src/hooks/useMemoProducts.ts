import { useMemo } from "react"
import { IProduct } from "../models/IProduct"
import { IProductType } from "../models/IProductType"

export const useMemoProducts = (
    cards: IProduct[], 
    currentPrice: [number, number],
    typeProducts: IProductType[], 
    gosts: string[], 
  )=> {

  let sortedCards = useSortTypeAndGostCards(cards, typeProducts, gosts)
  let pricedCards = useSortPriceCards (sortedCards, currentPrice)

  return pricedCards
}

const useSortTypeAndGostCards = (cards:IProduct[], typeProducts:IProductType[], gosts: string[])=> useMemo(()=> { 
  return cards.filter((card)=> {
    if (typeProducts?.length && gosts?.length) {
      const isSameType = typeProducts.find((type)=> type.id == card.type.id)
      return  isSameType && gosts.includes(card.gost)? true : false
    } else if (typeProducts.length) {
      const isSameType = typeProducts.find((type)=> type.id == card.type.id)
      return isSameType ? true : false
    } else if (gosts.length) {
      return gosts.includes(card.gost)? true : false
    } else {
      return true
    }
  })
},[cards, typeProducts, gosts])

const useSortPriceCards = (cards:IProduct[], price:[number,number])=> useMemo(()=> { 
  return cards.filter((card)=> {
    return card.price > price[0] && card.price < price[1]
  })

},[cards, price])