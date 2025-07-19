import {AnimatePresence, motion} from "motion/react";

import { headerVariants, mountAnim } from '@/lib/anim';

interface IProps  {
    isOpen: boolean
}

const PremiumBanner = ({ isOpen }:IProps) => {
    return (
        <AnimatePresence mode={'popLayout'}>
            {isOpen ?
                (<motion.div
                    key={'promoCard'}
                    initial={{opacity: 0, x: "-100px"}}
                    animate={{opacity: 1, x: 0,}}
                    exit={{opacity: 0, x: "-100px"}}
                    className={'min-w-max w-auto bottom-0 bg-white/20 mx-8 grid p-4 gap-1 rounded-3xl backdrop-blur-sm backdrop-filter'}>
                    <span className={'font-bold text-base text-white'}>Upgrade to PRO</span>
                    <span
                        className={'font-normal text-xs text-[#959BA5]'}>Unlock premium <br/> features for free.</span>
                    <button
                        className={'text-white mt-2 py-1 px-3.5 w-max bg-gradient-to-r from-[#CF81BE] via-[#BE94EA] to-[#9D74FC] rounded-full '}>
                        <span className={'uppercase text-sm'}>try now</span>
                    </button>
                </motion.div>)
                :
                (<motion.button
                    key={'miniPromoButton'}
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2, ease: "easeIn" }
                    }}
                    initial={{opacity: 0, x: "-50px"}}
                    animate={{opacity: 1, x: 0,}}
                    exit={{opacity: 0, x: "-100px"}}
                    className={'text-white flex flex-col py-1 max-w-7 mx-2 bg-gradient-to-r from-[#CF81BE] cursor-pointer via-[#BE94EA] to-[#9D74FC] rounded-full'}>
                    {
                        "try now".split('').map((char, index) => (
                            <motion.span variants={headerVariants.miniButtonTextVariant} {...mountAnim} custom={index} key={index} className={'uppercase h-4.5 text-sm'}>
                        {char == " " ? "\u00A0" : char}
                    </motion.span>
                        ))
                    }
                </motion.button>)
            }
        </AnimatePresence>
    );
};

export default PremiumBanner;
