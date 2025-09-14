'use client';

import { useState, useEffect } from 'react';
import { Wand2 } from 'lucide-react';

import { getPolicySummary } from '@/app/actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function PolicySummary({
  slideContent,
}: {
  slideContent: string;
}) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    getPolicySummary(slideContent).then((result) => {
      if (isMounted) {
        setSummary(result);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [slideContent]);

  return (
    <Card className="bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-headline">
          <Wand2 className="text-accent" />
          AI-Powered Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">{summary}</p>
        )}
      </CardContent>
    </Card>
  );
}
