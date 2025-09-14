'use server';

import { summarizePolicySection } from '@/ai/flows/policy-section-summarization';

export async function getPolicySummary(policySection: string) {
  try {
    const result = await summarizePolicySection({ policySection });
    return result.summary;
  } catch (error) {
    console.error('Error summarizing policy section:', error);
    return 'An error occurred while generating the summary. Please try again later.';
  }
}
