export interface Cart {
  items: Array<CartItem>;
}

export interface CartItem {
  id: string
  name: string
  price: string
  quantity: number
}
