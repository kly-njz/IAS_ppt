'use server';
/**
 * @fileOverview Summarizes a policy section using Genkit.
 *
 * - summarizePolicySection - A function that summarizes a policy section.
 * - PolicySectionSummarizationInput - The input type for the summarizePolicySection function.
 * - PolicySectionSummarizationOutput - The return type for the summarizePolicySection function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PolicySectionSummarizationInputSchema = z.object({
  policySection: z.string().describe('The policy section to summarize.'),
});
export type PolicySectionSummarizationInput = z.infer<typeof PolicySectionSummarizationInputSchema>;

const PolicySectionSummarizationOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the policy section.'),
});
export type PolicySectionSummarizationOutput = z.infer<typeof PolicySectionSummarizationOutputSchema>;

export async function summarizePolicySection(input: PolicySectionSummarizationInput): Promise<PolicySectionSummarizationOutput> {
  return summarizePolicySectionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'policySectionSummarizationPrompt',
  input: {schema: PolicySectionSummarizationInputSchema},
  output: {schema: PolicySectionSummarizationOutputSchema},
  prompt: `Summarize the following policy section in a concise manner:\n\n{{{policySection}}}`, 
});

const summarizePolicySectionFlow = ai.defineFlow(
  {
    name: 'summarizePolicySectionFlow',
    inputSchema: PolicySectionSummarizationInputSchema,
    outputSchema: PolicySectionSummarizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
