import { NavigationContainer } from '@/components/navigation-menu/navigation-container';
import { SearchBar } from '@/components/navigation-menu/search-bar';
import { CommunicationContainer } from '@/components/navigation-menu/communication-container';

const NavigationMenu = () => {
  return (
    <div className={'w-full grid grid-cols-4 gap-[2.5%] pb-9'}>
      <div className={'col-span-3 flex justify-start items-center'}>
        <NavigationContainer/>
        <SearchBar/>
        <CommunicationContainer/>
      </div>
    </div>
  );
};

export { NavigationMenu };
