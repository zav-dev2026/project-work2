export interface ShopDTO {
  id: number;
  name: string;
  image_url: string;
  address: string;
  phone_number: string;
  products: ProductDTO[];
}

export interface ProductDTO {
  id: number;
  shop_id: number;
  name: string;
  image_url: string;
  description: string;
  price: number;
}
