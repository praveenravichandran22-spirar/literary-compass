'use server';
/**
 * @fileOverview An AI agent for drilling down into book categories and subcategories, suggesting related implicit categories using an LLM.
 *
 * - categoryDrilldown - A function that suggests related implicit categories based on the current category selection.
 * - CategoryDrilldownInput - The input type for the categoryDrilldown function.
 * - CategoryDrilldownOutput - The return type for the categoryDrilldown function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CategoryDrilldownInputSchema = z.object({
  category: z
    .string()
    .describe('The current book category selected by the user.'),
});
export type CategoryDrilldownInput = z.infer<typeof CategoryDrilldownInputSchema>;

const CategoryDrilldownOutputSchema = z.object({
  suggestedCategories: z
    .array(z.string())
    .describe('An array of related implicit categories suggested by the LLM.'),
});
export type CategoryDrilldownOutput = z.infer<typeof CategoryDrilldownOutputSchema>;

export async function categoryDrilldown(input: CategoryDrilldownInput): Promise<CategoryDrilldownOutput> {
  return categoryDrilldownFlow(input);
}

const prompt = ai.definePrompt({
  name: 'categoryDrilldownPrompt',
  input: {schema: CategoryDrilldownInputSchema},
  output: {schema: CategoryDrilldownOutputSchema},
  prompt: `You are a book expert. Based on the current book category provided by the user, suggest related implicit categories that the user might be interested in.

Current Category: {{{category}}}

Suggested Categories:`,
});

const categoryDrilldownFlow = ai.defineFlow(
  {
    name: 'categoryDrilldownFlow',
    inputSchema: CategoryDrilldownInputSchema,
    outputSchema: CategoryDrilldownOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
