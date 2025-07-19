'use client'

import { ChevronLeft } from 'lucide-react';
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button';

const StepButton = ({ direction = "previous", className, ref } :{ direction?: "previous" | "next" } & ComponentProps<"button"> ) => {

  const router = useRouter()

  const isNext = direction === "next"
  const stepClick = () => {
    if (isNext) {
      router.forward()
      return
    }
    router.back()
  }

  return (
    <Button size={'svg'} variant={'ghost'} className={cn('rounded-full cursor-pointer ', isNext && ' rotate-180', className)}
            ref={ref}
            onClick={stepClick}
    >
      <ChevronLeft />
    </Button>
  );
};

export { StepButton };
