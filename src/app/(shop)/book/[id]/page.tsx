import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getBookById } from '@/lib/data';
import { Breadcrumbs } from '@/components/books/Breadcrumbs';
import { Star, StarHalf, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ProductRecommendations } from '@/components/books/ProductRecommendations';
import { Badge } from '@/components/ui/badge';

type BookPageProps = {
  params: { id: string };
};

function Rating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 text-amber-500">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} className="w-5 h-5 fill-current" />
      ))}
      {halfStar && <StarHalf className="w-5 h-5 fill-current" />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} className="w-5 h-5" />
      ))}
    </div>
  );
}

export default function BookPage({ params }: BookPageProps) {
  const book = getBookById(params.id);

  if (!book) {
    notFound();
  }

  const categoryName = book.category.charAt(0).toUpperCase() + book.category.slice(1).replace('-', ' ');
  const subCategoryName = book.subcategory.charAt(0).toUpperCase() + book.subcategory.slice(1).replace('-', ' ');

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: categoryName, href: `/${book.category}` },
          { label: subCategoryName, href: `/${book.category}/${book.subcategory}` },
          { label: book.title },
        ]}
      />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Left Column: Image */}
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <Image
              src={book.imageUrl}
              alt={`Cover of ${book.title}`}
              width={400}
              height={600}
              className="w-full rounded-lg shadow-xl object-cover"
              data-ai-hint={book.imageHint}
            />
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-headline font-bold tracking-tight">{book.title}</h1>
          <p className="mt-2 text-xl text-muted-foreground">by {book.author}</p>
          
          <div className="mt-4 flex items-center gap-4">
            <Rating rating={book.rating} />
            <span className="text-muted-foreground">{book.rating.toFixed(1)} ({book.reviews.length} reviews)</span>
          </div>

          <div className="mt-6">
            <Badge variant="outline" className="text-sm">{subCategoryName}</Badge>
          </div>

          <p className="mt-6 text-3xl font-bold text-foreground">${book.price.toFixed(2)}</p>

          <Button size="lg" className="mt-6 w-full sm:w-auto">Add to Cart</Button>
          
          <Separator className="my-8" />

          <div>
            <h2 className="font-headline text-2xl font-bold tracking-tight">Description</h2>
            <p className="mt-4 text-base text-foreground/80 leading-relaxed">{book.description}</p>
          </div>

          <Separator className="my-8" />
          
          <div>
            <h2 className="font-headline text-2xl font-bold tracking-tight">Reviews</h2>
            {book.reviews.length > 0 ? (
              <div className="mt-4 space-y-6">
                {book.reviews.map(review => (
                  <div key={review.id} className="flex gap-4">
                    <UserCircle className="w-10 h-10 text-muted-foreground flex-shrink-0" />
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">{review.user}</p>
                        <Rating rating={review.rating} />
                      </div>
                      <p className="mt-1 text-foreground/80">{review.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-muted-foreground">No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
      
      {/* AI Recommendations */}
      <ProductRecommendations currentBook={book} />
    </div>
  );
}
