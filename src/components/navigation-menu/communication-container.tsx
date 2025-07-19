import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import MessageIcon from '@/../public/svgs/chat.svg'
import BellIcon from '@/../public/svgs/notif.svg'

const CommunicationContainer = () => {
  return (
    <div className={'gap-4 flex ml-auto'}>
      <Button variant={'ghost'} size={'svg'} className={'bg-black-white rounded-full p-2.5 cursor-pointer dark:hover:bg-input/50'}>
        <MessageIcon className={'text-foreground'}/>
      </Button>
      <Button variant={'ghost'} size={'svg'} className={'bg-black-white text-black-white rounded-full p-2.5 cursor-pointer dark:hover:bg-input/50'}>
        <BellIcon className={'text-foreground'}/>
      </Button>
      <ModeToggle/>
    </div>
  );
};

export { CommunicationContainer };
