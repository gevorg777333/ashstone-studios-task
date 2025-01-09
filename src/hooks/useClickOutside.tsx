import React, {Dispatch, SetStateAction, useEffect} from 'react';

export function useClickOutside(
  ref: React.RefObject<HTMLDivElement>,
  closeModal: Dispatch<SetStateAction<boolean>>,
) {
  const handleClick = (e: MouseEvent) => {
    // @ts-ignore
    if (ref.current && !ref.current.contains(e.target)) {
      closeModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, handleClick]);
}
