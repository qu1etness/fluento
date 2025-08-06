"use client";
import React, { useState, ComponentProps } from 'react';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// utils
import { cn } from "@/lib/utils";

// assets
import { ChevronDown, CheckIcon } from "lucide-react";
import { CircleFlag } from "react-circle-flags";

// data
import initialLanguages from '@/data/initialLanguage';
import { Language, LanguageCode } from 'deepl-node';

// Country interface
export interface Country {
  language: string;
  name: string;
  supports_formality: boolean;
}

// Dropdown props
interface CountryDropdownProps {
  onChange?: (country: Country) => void;
  defaultValue?: string;
  disabled?: boolean;
  placeholder?: string;
  slim?: boolean;
  languageValue?: Language
  setLanguage: (name: string, code: LanguageCode) => void
}

const CountryDropdownComponent = (
  {
    disabled = false,
    placeholder = 'Select a country',
    className,
    setLanguage,
    ref,
    languageValue,
    ...props
  }: CountryDropdownProps & ComponentProps<'button'>
) => {

  const [open, setOpen] = useState(false);

  const handleSelect = (country: Language) => {
      setLanguage( country.name, country.code)
      setOpen(false);
    };

  const triggerClasses = cn(
    'flex w-[101%] h-max items-center justify-between whitespace-nowrap border-5 border-background rounded-[1.8rem] px-9 py-4 text-xl cursor-pointer placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
    className
  );
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        ref={ref}
        className={triggerClasses}
        disabled={disabled}
        {...props}
      >
        {languageValue ? (
          <div className="flex items-center flex-grow w-0 gap-2 overflow-hidden">
            <div className="inline-flex items-center justify-center w-5 h-5 shrink-0 overflow-hidden rounded-full">
              <CircleFlag
                countryCode={languageValue.code.toLowerCase()}
                height={20}
              />
            </div>
            <span className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
                {languageValue.name}
              </span>
          </div>
        ) : (
          <span className={'font-semibold text-xl'}>{placeholder}</span>
        )}
        <ChevronDown size={24} />
      </PopoverTrigger>
      <PopoverContent
        collisionPadding={10}
        side="bottom"
        className="w-full p-0"
      >
        <Command className="w-90 max-h-[500px] sm:max-h-[270px]">
          <CommandList>
            <div className="sticky top-0 z-10 bg-popover">
              <CommandInput placeholder="Search country..." />
            </div>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {initialLanguages
                .map((option, key: number) => (
                  <CommandItem
                    className="flex items-center w-full gap-2"
                    key={key}
                    onSelect={() => handleSelect(option)}
                  >
                    <div className="flex flex-grow w-0 space-x-2 overflow-hidden">
                      <div
                        className="inline-flex items-center justify-center w-5 h-5 shrink-0 overflow-hidden rounded-full">
                        <CircleFlag
                          countryCode={option.code.toLowerCase()}
                          height={20}
                        />
                      </div>
                      <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                        {option.name}
                      </span>
                    </div>
                    <CheckIcon
                      className={cn(
                        'ml-auto h-4 w-4 shrink-0 dark:white',
                        option.name === languageValue?.name
                          ? 'opacity-100'
                          : 'opacity-0'
                      )}
                    />
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};


export { CountryDropdownComponent }
