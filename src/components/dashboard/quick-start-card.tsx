import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export interface IQuickCard {
  imagePath: string;
  title: string;
  time: number;
}
const gradients = ['bg-linear-to-br/srgb from-[#FF9295] from-10% to-80% to-[#ABCBF3]', 'bg-linear-to-br/srgb from-[#E885C4]/70 from-5% via-[#B1B7FF] to-[#D0E1FE]', 'bg-linear-to-r/srgb from-[#DE87AB]/80 from-10% to-70% to-[#88F3E4]']

const QuickStartCard = ({ imagePath, title, time, index }: IQuickCard & { index: number }) => {
  return (
    <Link href={''} className={'w-full bg-black-white rounded-3xl flex gap-4 p-4 items-center justify-start'}>
      <Image src={imagePath} alt={title} width={64} height={64} priority className={cn('rounded-4 aspect-square rounded-2xl',
        gradients[index]
      )} />
      <div className={'gap-4'}>
        <p>
          <span className={'font-medium text-sm'}>{title}</span>
        </p>
        <span className={'text-muted-foreground text-xs'}>{time}{' '}min</span>
      </div>
    </Link>
  );
};

export { QuickStartCard };
