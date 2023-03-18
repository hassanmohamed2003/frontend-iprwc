export interface Cart {
  items: Array<CartItem>;

  total: number
}

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}
