import { notFound } from 'next/navigation';
import { getSubCategory, getBooksBySubCategory } from '@/lib/data';
import { BookCard } from '@/components/books/BookCard';
import { Breadcrumbs } from '@/components/books/Breadcrumbs';

type SubCategoryPageProps = {
  params: {
    category: string;
    subcategory: string;
  };
};

export default function SubCategoryPage({ params }: SubCategoryPageProps) {
  const subCategory = getSubCategory(params.category, params.subcategory);

  if (!subCategory) {
    notFound();
  }

  const category = { name: params.category.charAt(0).toUpperCase() + params.category.slice(1).replace('-', ' '), slug: params.category };
  const books = getBooksBySubCategory(params.subcategory);

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: category.name, href: `/${category.slug}` },
          { label: subCategory.name },
        ]}
      />
      
      <div className="mt-6">
        <h1 className="text-4xl font-headline font-bold tracking-tight">{subCategory.name}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{subCategory.description}</p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-headline font-bold tracking-tight">Books in {subCategory.name}</h2>
        {books.length > 0 ? (
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-6">
            {books.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="mt-6 text-center py-16 px-4 border-2 border-dashed rounded-lg">
            <h3 className="text-xl font-semibold">No books found</h3>
            <p className="text-muted-foreground mt-2">There are currently no books in this subcategory. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
