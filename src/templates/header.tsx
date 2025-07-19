"use client"

import { useState } from 'react';
import { motion } from "motion/react";

import {NavBar} from "@/components/header/nav-bar";
import CloseButton from "@/components/header/close-button";
import PremiumBanner from "@/components/header/premium-banner";
import { headerVariants } from '@/lib/anim';

const Header = () => {
    const [isOpen, setIsOpen] = useState(true)

  return (
    <motion.div
      className={'h-full'}
      initial={false}
      variants={
        headerVariants.sidebarVariants
      }
      animate={isOpen ? 'open' : 'closed'}
    >
      <motion.header
        className={'py-8 fixed flex flex-col content-between bg-gradient-to-b from-secondary justify-between to-[#47384B] rounded-r-[2.5rem] h-full overflow-hidden'}
        initial={false}
        variants={
          headerVariants.sidebarVariants
        }>
        <CloseButton setIsOpen={setIsOpen} />
        <NavBar />
        <PremiumBanner isOpen={isOpen} />
      </motion.header>
    </motion.div>
  );
}

export default Header;
