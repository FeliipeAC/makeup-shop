export type ProductColor = {
  colour_name: string;
  hex_value: string;
};

export type Makeup = {
  api_featured_image: string;
  brand: string;
  category: string;
  created_at: string;
  currency: string;
  description: string;
  id: number;
  image_link: string;
  name: string;
  price: string;
  price_sign: string;
  product_api_url: string;
  product_colors: ProductColor[];
  product_link: string;
  product_type: string;
  rating: number;
  tag_list: string[];
  updated_at: string;
  website_link: string;
};
