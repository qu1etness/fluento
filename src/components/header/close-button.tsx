import {motion} from "motion/react";
import {Dispatch, SetStateAction} from "react";
import {ChevronsRight} from "lucide-react";

import { headerVariants } from '@/lib/anim';

interface IProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const CloseButton = ({ setIsOpen } : IProps) => {
    const { horizontalMarginVariants, closeTextVariants } = headerVariants

    return (
      <motion.button onClick={() => setIsOpen(prevState => !prevState)}
                     className={'rounded-full bg-background relative flex justify-end items-center cursor-pointer overflow-hidden'}
                     variants={horizontalMarginVariants}
                     initial={false}
      >
            <span className={'absolute inset-0 m-auto flex justify-center gap-[1px]'}>
            {
                'Close'.split('').map((char, index) => (
                  <motion.span key={index}
                               className={'font-medium text-sm flex justify-center items-center text-active-font'}
                               custom={index}
                               variants={closeTextVariants}
                               transition={{ ease: 'easeInOut' }}
                  >
                      {char}
                  </motion.span>
                ))
            }
            </span>
          <motion.span
            className={'aspect-square h-full rounded-full flex justify-center items-center'}
            variants={{
                open: { rotate: 180 },
                closed: { rotate: 0, transition: { ease: 'easeInOut' } }
            }}
          >
              <ChevronsRight width={20} height={20} />
          </motion.span>
      </motion.button>
    );
};

export default CloseButton;
