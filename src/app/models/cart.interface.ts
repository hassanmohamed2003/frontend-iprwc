export interface Cart {
  items: Array<CartItem>;

  total_items: number

  total_price: number
}

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}
