import PremiumBanner from "@/components/header/premium-banner";

const Header = () => {
    return (
        <div className={'w-1/5 h-full'}>
            <header className={'w-1/5 fixed bg-gradient-to-b from-secondary to-[#47384B] rounded-r-4xl h-full'}>
                <nav className={'p-10 w-full h-full flex'}>
                    <div className={'gap-4'}></div>
                    <PremiumBanner/>
                </nav>
            </header>
        </div>
    );
};

export default Header;
