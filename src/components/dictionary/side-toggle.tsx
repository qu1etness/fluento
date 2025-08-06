'use client'
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';
import useTranslationStore from '@/store/useTranslationStoreBase';

const SideToggle = () => {

  const switchSides = useTranslationStore.use.switchSides()

  return (
    <Button size={'svg'} variant={'ghost'} onClick={switchSides}>
      <motion.div
        whileTap={{ rotate: 275 }}
      >
        <ArrowLeftRight />
      </motion.div>
    </Button>
  );
};

export { SideToggle };
