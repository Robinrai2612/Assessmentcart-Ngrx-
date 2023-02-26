import { Product } from './product.model';

export interface CartItem {
  price: number;
  id: any;
  name: string;
  product: Product;
  quantity: number;
}
