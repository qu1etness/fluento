'use client'
import { CountryDropdownComponent } from '@/components/ui/country-dropdown';
import useTranslationStore from '@/store/useTranslationStoreBase';

const OutputTranslationCard = () => {

  const setOutputLanguage = useTranslationStore.use.setLanguags()
  const { language, value } = useTranslationStore.use.outputValue()

  return (
    <div className={'min-h-78 rounded-4xl shadow-xl bg-black-white w-full relative flex flex-col items-center'}>
      <CountryDropdownComponent setLanguage={setOutputLanguage.output} languageValue={language}/>
      <div className={'flex-1 h-full w-full px-9 py-6'}>
        <span
          className={'w-full h-full resize-none overflow-auto text-2xl outline-none text-muted-foreground'}>{value}</span>
      </div>
    </div>
  );
};

export { OutputTranslationCard };
