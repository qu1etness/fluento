import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useSearchBarToggle = (): [boolean, Dispatch<SetStateAction<boolean>>] => {

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return [open, setOpen]
}