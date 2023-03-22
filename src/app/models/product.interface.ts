import {Category} from "./category.interface";

export interface ProductInterface {
  id: string;
  stock: number;
  price: number;
  shortDescription: string;
  description: string;
  category: Category;
  name: string;
  imageSrcCharacter: string;
  imageSrcCover: string;
  totalPrice?: number;
  quantity?: number;

  // image_card: string
  //
  // image_character: string
}
