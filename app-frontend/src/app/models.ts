export interface Shop {
  id: number;
  name: string;
  image_url: string;
  address: string;
  phone_number: string;
}

export interface ShopDTO {
  data: Shop[];
}

export interface ShopDetailsDTO {
  data: ShopDetails;
}

export interface ShopDetails {
  id: number;
  name: string;
  image_url: string;
  address: string;
  phone_number: string;
  products: Product[];
}

export interface Product {
  id: number;
  shop_id: number;
  name: string;
  image_url: string;
  description: string;
  price: number;
}
