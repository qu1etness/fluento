'use client';

import Link from 'next/link';
import { ComponentProps, JSX } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { headerVariants } from '@/lib/anim';


interface IProps {
  href: string;
  logo: (props?:ComponentProps<'svg'>) => JSX.Element
}


const NavLink = ({ href, children, ref, logo, ...props }: IProps & ComponentProps<'a'>) => {

  const { navLinkVariant, navLinkTextVariant } = headerVariants
  const currentPath = usePathname();
  const isActive = currentPath == href

  return (
    <Link key={props.key} href={href} ref={ref}>
      <motion.li
        className={cn('origin-right relative flex justify-start items-center pr-2',
          isActive && 'bg-background before:absolute before:w-12 before:aspect-square before:-top-12 before:right-0 before:rounded-full before:shadow-background before:shadow-[1.5rem_1.5rem] before:-z-10',
          isActive && 'after:absolute after:w-12 after:aspect-square after:-bottom-12 after:right-0 after:rounded-full after:shadow-background after:shadow-[1.5rem_-1.5rem]')}
        variants={navLinkVariant}
      >
        <div
          className={cn('flex justify-center items-center ml-[14%] py-5 font-medium', isActive ? 'text-nav-link-secondary' : 'text-[#F5F5F5FF]')}
        >
          {logo({ className: !isActive ? 'text-inactive-icons' : 'text-nav-link-secondary' })}
          <motion.span
            layout
            variants={navLinkTextVariant}
            transition={{ ease: 'easeOut', duration: 0.3 }}
            className={cn(
              'origin-left overflow-hidden whitespace-nowrap text-sm',
            )}
          >
            {children}
          </motion.span>
        </div>
      </motion.li>
    </Link>
  );
};

export {NavLink};
