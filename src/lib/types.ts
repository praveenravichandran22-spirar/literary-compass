export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  imageHint: string;
  category: string;
  subcategory: string;
  description: string;
  rating: number;
  reviews: Review[];
}

export interface CartItem {
  book: Book;
  quantity: number;
}

export interface Subcategory {
  name: string;
  slug: string;
  description: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  subcategories: Subcategory[];
}
