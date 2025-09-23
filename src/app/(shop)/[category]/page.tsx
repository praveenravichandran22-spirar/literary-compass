import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCategory, getBooksByCategory } from '@/lib/data';
import { BookCard } from '@/components/books/BookCard';
import { Breadcrumbs } from '@/components/books/Breadcrumbs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { categoryDrilldown } from '@/ai/flows/category-drilldown-llm';
import { BrainCircuit } from 'lucide-react';

type CategoryPageProps = {
  params: {
    category: string;
  };
};

async function AiSuggestions({ categoryName }: { categoryName: string }) {
  try {
    const result = await categoryDrilldown({ category: categoryName });
    if (!result || result.suggestedCategories.length === 0) return null;

    return (
      <div className="mt-8 p-4 rounded-lg bg-primary/10 border border-primary/20">
        <h3 className="font-headline text-lg font-semibold text-foreground flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-primary" />
          AI-Suggested Genres
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Based on "{categoryName}", you might also like:
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {result.suggestedCategories.map((cat, i) => (
            <Badge key={i} variant="secondary" className="text-sm">{cat}</Badge>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('AI suggestion failed:', error);
    return null;
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategory(params.category);

  if (!category) {
    notFound();
  }

  const books = getBooksByCategory(params.category);

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: category.name }]} />
      
      <div className="mt-6">
        <h1 className="text-4xl font-headline font-bold tracking-tight">{category.name}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{category.description}</p>
      </div>

      {/* AI Suggestions */}
      <AiSuggestions categoryName={category.name} />

      {/* Subcategories */}
      {category.subcategories && category.subcategories.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-headline font-bold tracking-tight">Subcategories</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.subcategories.map(sub => (
              <Link key={sub.slug} href={`/${category.slug}/${sub.slug}`} className="group block">
                <Card className="transition-colors group-hover:bg-card/80">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg group-hover:text-primary">{sub.name}</h3>
                    <p className="text-sm text-muted-foreground">{sub.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Books in this category */}
      <div className="mt-12">
        <h2 className="text-2xl font-headline font-bold tracking-tight">All in {category.name}</h2>
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-6">
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}
