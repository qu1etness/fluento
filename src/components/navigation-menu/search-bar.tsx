'use client'
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';
import { useSearchBarToggle } from '@/hooks/use-search-bar-toggle';

interface ISearchGroup {
  group: {
    name: string;
    content:
      {
        title: string;
        path: string;
      }[];
  };
}

const searchList: ISearchGroup[] = [
  {
    group: {
      name: 'Dashboard',
      content: [
        {
          title: 'Word sets',
          path: '/dashboard'
        },
        {
          title: 'Statistic',
          path: '/dashboard'
        },
        {
          title: 'Quick start',
          path: '/dashboard'
        },
      ]
    },
  }
]

const SearchBar = () => {

  const [isOpen, setIsOpen] = useSearchBarToggle()
  const onTriggerClick = () => {
    setIsOpen(true)
  }

  return (
    <>
      <Button size={'svg'} onClick={onTriggerClick}
              className={'bg-black-white rounded-full py-2.5 px-5 flex-1 ml-6 mr-18 max-w-4xl cursor-pointer text-muted-foreground hover:text-white'}>
        <p className=" text-sm flex items-center justify-between w-full">
            <span className={'flex items-center gap-2'}>
              <Search />
              Search...{' '}
            </span>
          <kbd
            className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center content-center gap-1 rounded border px-1.5 mx-2 font-poppins text-[10px] font-medium opacity-100 select-none">
            <span className="text-xs items-center content-center text-center">⌘</span>
            <span className={'text-sm text'}>ctrl+K</span>
          </kbd>
        </p>
      </Button>

      <CommandDialog modal={true} open={isOpen} onOpenChange={setIsOpen} className={'sm:max-w-[640px] top-1/3'}>
        <CommandInput placeholder={'What are you searching for?'} className={''} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {searchList.map((item, index) => (
            <CommandGroup key={index} heading={item.group.name}>
              {item.group.content.map((item, index) => (
                <CommandItem className={'cursor-pointer'} key={index}>{item.title}</CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export { SearchBar };
