'use client';

import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

import { slidesData } from '@/lib/slides';
import Navigation from '@/components/presentation/navigation';
import PolicySummary from '@/components/presentation/policy-summary';
import Slide from '@/components/presentation/slide';
import { Card } from '@/components/ui/card';

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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

  const currentSlide = slidesData[currentSlideIndex];
  const slideContentForSummary = [
    currentSlide.title,
    currentSlide.subtitle,
    ...currentSlide.keyPoints,
  ]
    .filter(Boolean)
    .join('. ');

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <header className="mb-6 flex flex-col items-center gap-3 text-center sm:mb-8">
        <ShieldCheck className="h-10 w-10 text-primary" />
        <h1 className="text-3xl font-bold font-headline text-primary sm:text-4xl">
          SecureGiving Shield
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          A presentation on the policy framework for restoring donor trust and
          securing the online donation portal of Mindoro State University.
        </p>
      </header>
      <div className="w-full max-w-4xl flex flex-col gap-6">
        <Card className="relative w-full h-[550px] sm:h-[480px] md:h-[450px] overflow-hidden p-8 shadow-2xl shadow-primary/10">
          <Slide key={currentSlideIndex} slide={currentSlide} />
        </Card>

        <Navigation
          current={currentSlideIndex}
          total={slidesData.length}
          onPrev={handlePrev}
          onNext={handleNext}
        />

        <PolicySummary
          key={currentSlideIndex}
          slideContent={slideContentForSummary}
        />
      </div>
      <footer className="mt-8 text-center text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Mindoro State University. All rights reserved.</p>
      </footer>
    </div>
  );
}
