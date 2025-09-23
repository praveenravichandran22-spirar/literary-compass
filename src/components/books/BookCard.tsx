import Image from 'next/image';
import Link from 'next/link';
import type { Book } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

type BookCardProps = {
  book: Book;
};

export function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/book/${book.id}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="aspect-[2/3] w-full overflow-hidden">
            <Image
              src={book.imageUrl}
              alt={`Cover of ${book.title}`}
              width={400}
              height={600}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={book.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="font-headline font-semibold text-lg leading-tight truncate group-hover:text-primary">{book.title}</h3>
          <p className="text-muted-foreground text-sm mt-1">{book.author}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <p className="font-semibold text-foreground">${book.price.toFixed(2)}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
