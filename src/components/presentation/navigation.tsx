import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

type NavigationProps = {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function Navigation({
  current,
  total,
  onPrev,
  onNext,
}: NavigationProps) {
  const progressValue = ((current + 1) / total) * 100;
  const isFirstSlide = current === 0;
  const isLastSlide = current === total - 1;

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={onPrev}
          disabled={isFirstSlide}
          aria-label="Previous Slide"
        >
          <ArrowLeft />
        </Button>
        <div className="flex-grow text-center text-sm font-medium text-muted-foreground">
          Slide {current + 1} of {total}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
          disabled={isLastSlide}
          aria-label="Next Slide"
        >
          <ArrowRight />
        </Button>
      </div>
      <Progress value={progressValue} aria-label={`Progress: ${Math.round(progressValue)}%`} />
    </div>
  );
}
