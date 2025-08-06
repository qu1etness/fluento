import { create } from 'zustand'
import createSelectors from '@/store/createSelectors';
import { Language, LanguageCode } from 'deepl-node';


interface IValues {
  language?: Language
  value: string;
}

interface ITranslationStore {
  inputValue: IValues,
  outputValue: IValues,
  setInputValue: (text:string) => void,
  setOutputValue: (text:string) => void,
  setLanguags: {input: (name: string, code: LanguageCode) => void, output: (name: string, code: LanguageCode) => void }
  switchSides: () => void
}

const useTranslationStoreBase = create<ITranslationStore>((set, get) =>   ({
  inputValue: {
    language: undefined,
    value: ''
  },
  outputValue: {
    language: undefined,
    value: ''
  },
  setInputValue: (text) => set((state) => ({ inputValue: {...state.inputValue, value: text} })),
  setOutputValue: (text) => set((state) => ({ inputValue: {...state.inputValue, value: text} })),
  setLanguags: {
    input: (name, code) =>  set(state => ({ inputValue: { ...state.inputValue, language: { name, code } }})),
    output: (name, code) =>  set(state => ({ outputValue: { ...state.outputValue, language: { name, code } }})),
  },
  switchSides: () => {
    const { inputValue, outputValue } = get();
    set({
      inputValue: outputValue,
      outputValue: inputValue
    });
  }
}))

const useTranslationStore = createSelectors(useTranslationStoreBase)


export default useTranslationStore