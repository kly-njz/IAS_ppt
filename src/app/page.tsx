'use client';

import { useState, useEffect } from 'react';
import { ShieldCheck, Bot } from 'lucide-react';

import { slidesData } from '@/lib/slides';
import Navigation from '@/components/presentation/navigation';
import Slide from '@/components/presentation/slide';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getPolicySummary } from '@/app/actions';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [year, setYear] = useState<number | null>(null);
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const currentSlide = slidesData[currentSlideIndex];

  useEffect(() => {
    const fetchSummary = async () => {
      if (currentSlide) {
        setIsLoading(true);
        try {
          const result = await getPolicySummary(
            JSON.stringify(currentSlide)
          );
          setSummary(result);
        } catch (error) {
          console.error(error);
          setSummary('Failed to load summary.');
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchSummary();
  }, [currentSlide]);

  const handleNext = () => {
    if (currentSlideIndex < slidesData.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <header className="mb-6 flex flex-col items-center gap-3 text-center sm:mb-8">
        <ShieldCheck className="h-10 w-10 text-primary" />
        <h1 className="text-3xl font-bold font-headline text-primary sm:text-4xl">
          Carlo Jimenez
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          A presentation on the policy framework for restoring donor trust and
          securing the online donation portal of Mindoro State University.
        </p>
      </header>
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Card className="relative w-full h-[550px] sm:h-[480px] md:h-[450px] overflow-hidden p-8 shadow-2xl shadow-primary/10">
            <Slide key={currentSlideIndex} slide={currentSlide} />
          </Card>

          <Navigation
            current={currentSlideIndex}
            total={slidesData.length}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>
        <div className="w-full">
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-headline">AI Summary</CardTitle>
              <Bot className="h-6 w-6 text-accent" />
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ) : (
                <p className="text-sm text-foreground/80">{summary}</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <footer className="mt-8 text-center text-xs text-muted-foreground">
        {year && <p>&copy; {year} Mindoro State University. All rights reserved.</p>}
      </footer>
    </div>
  );
}
