import Link from 'next/link';
import { ArrowRight, BookText, ToyBrick } from 'lucide-react';
import { categories } from '@/lib/data';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

const categoryIcons: { [key: string]: React.ReactNode } = {
  'books': <BookText className="w-10 h-10 text-primary" />,
  'childrens-books': <ToyBrick className="w-10 h-10 text-primary" />,
};

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'lessons-in-chemistry');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] bg-card flex items-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Hero background image of a book"
            fill
            className="object-cover object-center opacity-20"
            priority
            data-ai-hint="library background"
          />
        )}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl font-headline font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
            Find Your Next Great Read
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Explore a universe of stories, from gripping thrillers to timeless classics. Your literary journey begins here.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/books">
                Start Exploring <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
              Discover by Category
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Browse our curated collections to find books that match your interests.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {categories.map((category) => (
              <Link key={category.slug} href={`/${category.slug}`} className="group block">
                <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                  <CardHeader className="flex flex-row items-center gap-6 p-6">
                    <div>
                      {categoryIcons[category.slug] || <BookText className="w-10 h-10 text-primary" />}
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-headline group-hover:text-primary">{category.name}</CardTitle>
                      <CardDescription className="mt-2 text-base">
                        {category.description}
                      </CardDescription>
                    </div>
                    <ArrowRight className="ml-auto h-6 w-6 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
