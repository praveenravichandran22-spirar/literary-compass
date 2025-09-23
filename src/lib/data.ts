import type { Book, Category } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => {
  const image = PlaceHolderImages.find(img => img.id === id);
  return { 
    url: image?.imageUrl ?? `https://picsum.photos/seed/${id}/400/600`, 
    hint: image?.imageHint ?? 'book cover' 
  };
};

export const books: Book[] = [
  {
    id: 'lessons-in-chemistry',
    title: 'Lessons in Chemistry',
    author: 'Bonnie Garmus',
    price: 17.99,
    imageUrl: getImage('lessons-in-chemistry').url,
    imageHint: getImage('lessons-in-chemistry').hint,
    category: 'books',
    subcategory: 'fiction',
    description: 'A #1 New York Times bestseller, this novel is a vibrant and empowering story of a female chemist in the 1960s who becomes the star of a cooking show.',
    rating: 4.8,
    reviews: [
      { id: '1', user: 'BookLover22', rating: 5, comment: 'Absolutely loved this book! Elizabeth Zott is an icon.' },
      { id: '2', user: 'ScienceNerd', rating: 5, comment: 'A brilliant and witty novel that combines science, cooking, and feminism.' },
    ],
  },
  {
    id: 'the-four-winds',
    title: 'The Four Winds',
    author: 'Kristin Hannah',
    price: 15.99,
    imageUrl: getImage('the-four-winds').url,
    imageHint: getImage('the-four-winds').hint,
    category: 'books',
    subcategory: 'fiction',
    description: 'An epic novel of love, heroism, and hope, set during the Great Depression, that tells the story of a woman who must choose between her land and her family.',
    rating: 4.6,
    reviews: [],
  },
  {
    id: 'the-lincoln-highway',
    title: 'The Lincoln Highway',
    author: 'Amor Towles',
    price: 18.50,
    imageUrl: getImage('the-lincoln-highway').url,
    imageHint: getImage('the-lincoln-highway').hint,
    category: 'books',
    subcategory: 'fiction',
    description: 'A stylistically-daring and endlessly-entertaining novel that follows four young men on an unforgettable journey from Nebraska to New York City in 1954.',
    rating: 4.7,
    reviews: [],
  },
  {
    id: 'tomorrow-and-tomorrow-and-tomorrow',
    title: 'Tomorrow, and Tomorrow, and Tomorrow',
    author: 'Gabrielle Zevin',
    price: 16.99,
    imageUrl: getImage('tomorrow-and-tomorrow-and-tomorrow').url,
    imageHint: getImage('tomorrow-and-tomorrow-and-tomorrow').hint,
    category: 'books',
    subcategory: 'fiction',
    description: 'This is the story of the creative partnership of Sam and Sadie, who are lifelong friends and video game designers. A novel that is a love story, but not one you have read before.',
    rating: 4.9,
    reviews: [],
  },
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 14.99,
    imageUrl: getImage('atomic-habits').url,
    imageHint: getImage('atomic-habits').hint,
    category: 'books',
    subcategory: 'non-fiction',
    description: 'An easy and proven way to build good habits and break bad ones. This book gives you a practical system that will get you 1 percent better every day.',
    rating: 4.9,
    reviews: [
      { id: '3', user: 'GrowthMindset', rating: 5, comment: 'Life-changing. The small habits approach is so effective.' },
    ],
  },
  {
    id: 'the-body-keeps-the-score',
    title: 'The Body Keeps the Score',
    author: 'Bessel van der Kolk',
    price: 19.00,
    imageUrl: getImage('the-body-keeps-the-score').url,
    imageHint: getImage('the-body-keeps-the-score').hint,
    category: 'books',
    subcategory: 'non-fiction',
    description: 'A pioneering researcher transforms our understanding of trauma and offers a bold new paradigm for healing in this New York Times bestseller.',
    rating: 4.8,
    reviews: [],
  },
  {
    id: 'educated',
    title: 'Educated: A Memoir',
    author: 'Tara Westover',
    price: 15.00,
    imageUrl: getImage('educated').url,
    imageHint: getImage('educated').hint,
    category: 'books',
    subcategory: 'non-fiction',
    description: 'An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.',
    rating: 4.7,
    reviews: [],
  },
  {
    id: 'the-silent-patient',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    price: 13.99,
    imageUrl: getImage('the-silent-patient').url,
    imageHint: getImage('the-silent-patient').hint,
    category: 'books',
    subcategory: 'mystery',
    description: 'A shocking psychological thriller of a woman’s act of violence against her husband—and of the therapist obsessed with uncovering her motive.',
    rating: 4.5,
    reviews: [],
  },
  {
    id: 'the-guest-list',
    title: 'The Guest List',
    author: 'Lucy Fokley',
    price: 12.99,
    imageUrl: getImage('the-guest-list').url,
    imageHint: getImage('the-guest-list').hint,
    category: 'books',
    subcategory: 'mystery',
    description: 'A wedding celebration turns dark and deadly in this deliciously wicked and atmospheric thriller reminiscent of Agatha Christie.',
    rating: 4.4,
    reviews: [],
  },
  {
    id: 'then-she-was-gone',
    title: 'Then She Was Gone',
    author: 'Lisa Jewell',
    price: 11.99,
    imageUrl: getImage('then-she-was-gone').url,
    imageHint: getImage('then-she-was-gone').hint,
    category: 'books',
    subcategory: 'mystery',
    description: 'A gripping, stay-up-all-night novel about a mother whose daughter has been missing for ten years, and the dark secrets that are finally coming to light.',
    rating: 4.6,
    reviews: [],
  },
  {
    id: 'dune',
    title: 'Dune',
    author: 'Frank Herbert',
    price: 10.99,
    imageUrl: getImage('dune').url,
    imageHint: getImage('dune').hint,
    category: 'books',
    subcategory: 'sci-fi',
    description: 'A stunning blend of adventure and mysticism, environmentalism and politics, Dune is a powerful, fanstastical story that is at once triumphant and cautionary.',
    rating: 4.8,
    reviews: [],
  },
  {
    id: 'a-court-of-thorns-and-roses',
    title: 'A Court of Thorns and Roses',
    author: 'Sarah J. Maas',
    price: 12.99,
    imageUrl: getImage('a-court-of-thorns-and-roses').url,
    imageHint: getImage('a-court-of-thorns-and-roses').hint,
    category: 'books',
    subcategory: 'fantasy',
    description: 'A thrilling, seductive new series from New York Times bestselling author Sarah J. Maas, blending Beauty and the Beast with faerie lore.',
    rating: 4.6,
    reviews: [],
  },
  {
    id: 'where-the-wild-things-are',
    title: 'Where the Wild Things Are',
    author: 'Maurice Sendak',
    price: 9.99,
    imageUrl: getImage('where-the-wild-things-are').url,
    imageHint: getImage('where-the-wild-things-are').hint,
    category: 'childrens-books',
    subcategory: 'picture-books',
    description: 'A classic picture book that follows the adventure of a young boy named Max who, after being sent to his room, sails away to an island inhabited by Wild Things.',
    rating: 4.9,
    reviews: [],
  },
  {
    id: 'the-very-hungry-caterpillar',
    title: 'The Very Hungry Caterpillar',
    author: 'Eric Carle',
    price: 7.99,
    imageUrl: getImage('the-very-hungry-caterpillar').url,
    imageHint: getImage('the-very-hungry-caterpillar').hint,
    category: 'childrens-books',
    subcategory: 'picture-books',
    description: 'A much-loved classic, this book teaches counting and the days of the week, and tells the story of a caterpillar\'s transformation into a beautiful butterfly.',
    rating: 4.9,
    reviews: [],
  },
  {
    id: 'goodnight-moon',
    title: 'Goodnight Moon',
    author: 'Margaret Wise Brown',
    price: 6.99,
    imageUrl: getImage('goodnight-moon').url,
    imageHint: getImage('goodnight-moon').hint,
    category: 'childrens-books',
    subcategory: 'picture-books',
    description: 'In a great green room, tucked away in bed, is a little bunny. "Goodnight room, goodnight moon." And to all the familiar things in the softly lit room—to the picture of the three little bears sitting on chairs, to the clocks and his socks, to the mittens and the kittens, to everything one by one—the little bunny says goodnight.',
    rating: 4.8,
    reviews: [],
  },
];

export const categories: Category[] = [
  {
    name: 'Books',
    slug: 'books',
    description: 'Explore a vast world of literature, from timeless classics to modern bestsellers.',
    subcategories: [
      { name: 'Fiction', slug: 'fiction', description: 'Dive into imaginative stories and compelling characters.' },
      { name: 'Non-Fiction', slug: 'non-fiction', description: 'Discover real-world knowledge, from history to science.' },
      { name: 'Mystery', slug: 'mystery', description: 'Unravel thrilling plots and solve intricate puzzles.' },
      { name: 'Fantasy', slug: 'fantasy', description: 'Journey to magical realms and epic adventures.'},
      { name: 'Sci-Fi', slug: 'sci-fi', description: 'Explore futuristic worlds and mind-bending concepts.' },
    ],
  },
  {
    name: 'Children’s Books',
    slug: 'childrens-books',
    description: 'Inspire a lifelong love of reading with enchanting stories for young minds.',
    subcategories: [
      { name: 'Picture Books', slug: 'picture-books', description: 'Beautifully illustrated stories for the youngest readers.' },
      { name: 'Chapter Books', slug: 'chapter-books', description: 'Engaging early novels for growing readers.' },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find(c => c.slug === slug);
}

export function getSubCategory(categorySlug: string, subCategorySlug: string) {
  const category = getCategory(categorySlug);
  return category?.subcategories.find(s => s.slug === subCategorySlug);
}

export function getBooksByCategory(categorySlug: string) {
  return books.filter(b => b.category === categorySlug);
}

export function getBooksBySubCategory(subCategorySlug: string) {
  return books.filter(b => b.subcategory === subCategorySlug);
}

export function getBookById(id: string) {
  return books.find(b => b.id === id);
}

export function getRecommendedBooks(currentBookId: string): Book[] {
  // Simple recommendation: return other books from the same subcategory, excluding the current one.
  const currentBook = getBookById(currentBookId);
  if (!currentBook) return [];

  return books.filter(
    book => book.subcategory === currentBook.subcategory && book.id !== currentBookId
  ).slice(0, 4);
}
