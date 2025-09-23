// src/ai/flows/product-recommendations.ts
'use server';

/**
 * @fileOverview A product recommendation AI agent.
 *
 * - getProductRecommendations - A function that handles the product recommendation process.
 * - ProductRecommendationsInput - The input type for the getProductRecommendations function.
 * - ProductRecommendationsOutput - The return type for the getProductRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductRecommendationsInputSchema = z.object({
  bookMetadata: z
    .string()
    .describe('The metadata of the book, including title, author, genre, and description.'),
  userBrowsingHistory: z
    .string()
    .describe('The user browsing history, including the books they have viewed and their ratings.'),
  communityRatings: z
    .string()
    .describe('The community ratings for the book and similar books.'),
});
export type ProductRecommendationsInput = z.infer<
  typeof ProductRecommendationsInputSchema
>;

const ProductRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('The list of recommended books based on the input data.'),
});
export type ProductRecommendationsOutput = z.infer<
  typeof ProductRecommendationsOutputSchema
>;

export async function getProductRecommendations(
  input: ProductRecommendationsInput
): Promise<ProductRecommendationsOutput> {
  return productRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productRecommendationsPrompt',
  input: {schema: ProductRecommendationsInputSchema},
  output: {schema: ProductRecommendationsOutputSchema},
  prompt: `You are a book recommendation expert. Based on the book's metadata, user browsing history, and community ratings, you will provide a list of recommended books that the user might enjoy.

Book Metadata: {{{bookMetadata}}}
User Browsing History: {{{userBrowsingHistory}}}
Community Ratings: {{{communityRatings}}}

Recommendations:`,
});

const productRecommendationsFlow = ai.defineFlow(
  {
    name: 'productRecommendationsFlow',
    inputSchema: ProductRecommendationsInputSchema,
    outputSchema: ProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
