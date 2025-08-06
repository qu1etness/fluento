import { motion } from 'framer-motion';


import LogOutLogo from '../../../public/svgs/log-out.svg';
import BookLogo from '../../../public/svgs/book.svg';
import SettingsLogo from '../../../public/svgs/set.svg';
import CompassLogo from '../../../public/svgs/compass.svg';
import ScheduleLogo from '../../../public/svgs/schedule.svg';
import HomeLogo from '../../../public/svgs/home.svg';
import { NavLink } from '@/components/header/nav-link';
import { headerVariants } from '@/lib/anim';
import { ComponentProps, JSX } from 'react';

const links: {
  logo: (props?: ComponentProps<'svg'>) => JSX.Element;
  path: string;
  title: string;
}[] = [
  {
    logo: ( props ) => <HomeLogo {...props} />,
    title: 'Dashboard',
    path: '/dashboard'
  },
  {
    logo: ( props ) => <BookLogo {...props} />,
    title: 'Dictionary',
    path: '/dictionary'
  },
  {
    logo: ( props ) => <CompassLogo {...props} />,
    title: 'Explore',
    path: '/explore'
  },
  {
    logo: (props ) => <ScheduleLogo {...props} />,
    title: 'Schedule',
    path: '/schedule'
  },
  {
    logo: ( props ) => <SettingsLogo {...props} />,
    title: 'Settings',
    path: '/settings'
  },
  {
    logo: ( props ) => <LogOutLogo {...props} />,
    title: 'Log Out',
    path: '/log-out'
  }
];

const firstPartLinks = links.slice(0, -2)
const secondPartLinks = links.slice(-2)

const NavBar = () => {
  return (
    <nav className={'w-full'}>
      <motion.ul
        className={'grid'}
        variants={headerVariants.rightMarginVariants}
      >
        {firstPartLinks.map((item, index) => (
          <NavLink key={index} href={item.path} logo={item.logo}> {item.title} </NavLink>
        ))}
        <li className={'py-5 text-background flex justify-start pl-[14%]'}>
          <div className={'h-[1px] w-[65%] bg-white/20 rounded-full'}></div>
        </li>
        {secondPartLinks.map((item, index) => (
          <NavLink key={index} href={item.path} logo={item.logo}> {item.title} </NavLink>
        ))}
      </motion.ul>
    </nav>
  );
};

export { NavBar };
