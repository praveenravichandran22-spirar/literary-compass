"use client";

import { useEffect, useState } from 'react';
import { Book } from '@/lib/types';
import { useBrowsingHistory } from '@/hooks/use-browsing-history';
import { getProductRecommendations } from '@/ai/flows/product-recommendations';
import { getBookById } from '@/lib/data';
import { BookCard } from './BookCard';
import { Skeleton } from '../ui/skeleton';
import { isDev } from '@/lib/utils';

interface ProductRecommendationsProps {
  currentBook: Book;
}

export function ProductRecommendations({ currentBook }: ProductRecommendationsProps) {
  const { history, addBookToHistory } = useBrowsingHistory();
  const [recommendations, setRecommendations] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    addBookToHistory(currentBook.id);
  }, [currentBook.id, addBookToHistory]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setIsLoading(true);
      try {
        const historyDetails = history
          .map(id => {
            const book = getBookById(id);
            return book ? `${book.title} by ${book.author}` : '';
          })
          .filter(Boolean)
          .join(', ');

        const aiResponse = await getProductRecommendations({
          bookMetadata: `Title: ${currentBook.title}, Author: ${currentBook.author}, Genre: ${currentBook.subcategory}, Description: ${currentBook.description}`,
          userBrowsingHistory: historyDetails || 'No browsing history.',
          communityRatings: `The current book has a rating of ${currentBook.rating} out of 5.`,
        });
        
        const recommendedBooks = aiResponse.recommendations
          .map(id => getBookById(id))
          .filter((b): b is Book => b !== undefined)
          .filter(b => b.id !== currentBook.id); // Filter out the current book
        
        // Ensure we have a few recommendations, fall back to simple logic if AI fails or finds none
        if (recommendedBooks.length > 0) {
            setRecommendations(recommendedBooks.slice(0, 4));
        } else {
            // Fallback to simple subcategory-based recommendation
            const fallbackRecs = (await import('@/lib/data')).getRecommendedBooks(currentBook.id);
            setRecommendations(fallbackRecs);
        }

      } catch (error) {
        if(isDev()) {
            console.error("Failed to get AI recommendations:", error);
        }
        // Fallback to simple recommendation on error
        const fallbackRecs = (await import('@/lib/data')).getRecommendedBooks(currentBook.id);
        setRecommendations(fallbackRecs);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();
  }, [currentBook, history]);

  return (
    <div className="mt-12">
      <h2 className="font-headline text-2xl font-bold tracking-tight">You Might Also Like</h2>
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:gap-x-6">
        {isLoading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="aspect-[2/3] w-full" />
              <Skeleton className="h-5 w-4/5" />
              <Skeleton className="h-4 w-3/5" />
              <Skeleton className="h-5 w-1/4" />
            </div>
          ))
        ) : (
          recommendations.map(book => <BookCard key={book.id} book={book} />)
        )}
      </div>
    </div>
  );
}
