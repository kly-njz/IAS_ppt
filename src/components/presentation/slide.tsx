import { CheckCircle } from 'lucide-react';
import type { SlideData } from '@/lib/slides';

type SlideProps = {
  slide: SlideData;
};

export default function Slide({ slide }: SlideProps) {
  return (
    <div className="absolute inset-0 flex flex-col justify-center p-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <div className="space-y-4">
        {slide.subtitle && (
          <p
            className="font-headline text-sm font-medium uppercase tracking-wider text-accent animate-in fade-in"
            style={{ animationDelay: '200ms', animationFillMode: 'both' }}
          >
            {slide.subtitle}
          </p>
        )}
        <h2
          className="font-headline text-3xl font-bold text-primary md:text-4xl animate-in fade-in"
          style={{ animationDelay: '300ms', animationFillMode: 'both' }}
        >
          {slide.title}
        </h2>
        <ul className="space-y-3 pt-4">
          {slide.keyPoints.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-3 animate-in fade-in slide-in-from-bottom-5"
              style={{
                animationDelay: `${500 + index * 150}ms`,
                animationFillMode: 'both',
              }}
            >
              <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
              <span className="text-foreground/80">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
