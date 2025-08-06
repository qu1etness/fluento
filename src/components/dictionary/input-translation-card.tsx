'use client'
import { CountryDropdownComponent } from '@/components/ui/country-dropdown';
import { useEffect, useId } from 'react';
import useTranslationStore from '@/store/useTranslationStoreBase';
import debounce from 'debounce';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';

interface ITranslationForm {
  translation: string;
}

const InputTranslationCard = () => {

  const textAreaId = useId()

  const setOutputLanguage = useTranslationStore.use.setLanguags()
  const { language } = useTranslationStore.use.inputValue()
  const { value } = useTranslationStore.use.inputValue()
  const setInputValue = useTranslationStore.use.setInputValue()
  const setOutputValue = useTranslationStore.use.setOutputValue()

  const { register, setValue, handleSubmit } = useForm<ITranslationForm>({})

  const onValueChange = (formData: ITranslationForm) => {
    const phrase = formData.translation
    setInputValue(phrase);
  };
  const {data, error, isSuccess} = useQuery({
    queryKey: ['translation', value],
    queryFn: async () => await fetch(`/translation?phrase=${value}&language=${language?.code}`),
  });

    if (isSuccess) {
      console.log(data);
    }

  const debouncedOnValueChanged = debounce(onValueChange, 500)

  useEffect(() => {
    setValue("translation", value);
  }, [value]);

  return (
    <div className={'min-h-78 rounded-4xl shadow-xl bg-black-white w-full relative flex flex-col items-center'}>
      <CountryDropdownComponent setLanguage={setOutputLanguage.input} languageValue={language} />
      <form className={'w-full flex-1 px-9 py-6'} onChange={handleSubmit(debouncedOnValueChanged)}>
        <label htmlFor={textAreaId} className={'flex-1 h-full'}>
        <textarea id={textAreaId} placeholder={'Enter text for translation...'} {...register('translation')}
                  className={'w-full h-full resize-none overflow-auto text-2xl outline-none text-muted-foreground'}
                  rows={4} maxLength={255}
        />
          </label>
      </form>
    </div>
  );
};

export { InputTranslationCard };
