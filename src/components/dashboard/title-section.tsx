'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ComponentProps } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface IProps {
  title: string;
  onPreviousClick?: () => void;
  onNextClick?: () => void;
  canClickNext?: boolean;
  canClickPrev?: boolean
}

const TitleSection = ( { children, title, onPreviousClick, onNextClick, className, canClickNext = true, canClickPrev = true }: IProps & ComponentProps<'div'>) => {

  return (
    <div className={cn('col-span-3 justify-start items-center', className)}>
      <div className={'flex justify-between items-center'}>
        <h2 className={'font-bold text-2xl'}>{title}</h2>
        <div className={'flex gap-4 items-center'}>
          {onPreviousClick &&
            <Button variant={'ghost'} size={'svg'} disabled={!canClickPrev} onClick={onPreviousClick}>
              <ChevronLeft />
            </Button>
          }
          {children && <span>{children}</span>}
          {onNextClick &&
            <Button variant={'ghost'} size={'svg'} disabled={!canClickNext} onClick={onNextClick}>
              <ChevronRight onClick={onNextClick} />
            </Button>
          }
        </div>
      </div>
    </div>
  );
};

export { TitleSection };
