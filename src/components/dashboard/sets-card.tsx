import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SetsCard = ({ className, ref, imagePath, title  }: { imagePath: string | StaticImageData; title: string } & ComponentProps<'div'>) => {
  return (
    <div className={cn('rounded-3xl px-4 pb-4 select-none', className)}
         ref={ref}
    >
      <div className={'flex justify-between items-start'}>
        <Image src={imagePath} alt={typeof imagePath === 'string' ? imagePath : imagePath.src} width={132} height={132}
               priority />
        <Button variant={'ghost'} size={'svg'} className={'p-2.5 rounded-full bg-white/30 mt-4 cursor-pointer text-white hover:text-red-600'}><Heart fill="currentColor" className={''}/></Button>
      </div>
      <h3 className={'mt-2 text-lg font-bold text-white'}>{title}</h3>
    </div>
  );
};

export { SetsCard };
