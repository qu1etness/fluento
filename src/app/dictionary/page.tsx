import { TitleSection } from '@/components/dashboard/title-section';
import { InputTranslationCard } from '@/components/dictionary/input-translation-card';
import { OutputTranslationCard } from '@/components/dictionary/output-translation-card';
import { SideToggle } from '@/components/dictionary/side-toggle';
import { Metadata } from 'next';
import { availableLanguages } from '@/actions/available-languages';

export const metadata: Metadata = {
  title: "Dictionary",
  description: '...',
}



const Page =  async () => {

  console.log(await availableLanguages());
  return (
    <div className={'w-full'}>
      <TitleSection title={'Translation'} className={'mb-7.5'} />
      <div className={'flex gap-1 justify-between items-center'}>
        <InputTranslationCard />
        <SideToggle />
        <OutputTranslationCard />
      </div>
    </div>
  );
};

export default Page;
