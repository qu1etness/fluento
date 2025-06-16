const PremiumBanner = () => {
    return (
        <div
            className={'mt-auto w-full bg-white/20 grid p-4 gap-1 rounded-3xl backdrop-blur-sm backdrop-filter'}>
            <span className={'font-bold text-base text-white'}>Upgrade to PRO</span>
            <span
                className={'font-normal text-xs text-[#959BA5]'}>Unlock premium <br/> features for free.</span>
            <button
                className={'text-white mt-2 py-1 px-3.5 w-max bg-gradient-to-r from-[#CF81BE] via-[#BE94EA] to-[#9D74FC] rounded-full '}>
                <span className={'uppercase text-sm '}>try now</span>
            </button>
        </div>
    );
};

export default PremiumBanner;
