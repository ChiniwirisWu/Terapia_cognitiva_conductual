'use client';

import IconButton from './IconButton';
import Pagination from './pagination';

import { IoIosSwitch } from 'react-icons/io';
import { SiWorldhealthorganization } from 'react-icons/si';
import { useState, useEffect } from 'react';

import { FontColors, FontColorsType } from '@/constants';


export default function Header() {
  const [headerColor, setHeaderColor] = useState<FontColorsType>(FontColors.white);

  useEffect(() => {
    // creacion de un handler para cambiar el color
    const handleColorChange = (event: Event) => {
      const customEvent = event as CustomEvent<FontColorsType>; // este evento me va a retornar un FontColorsType
      const recievedColor = customEvent.detail;

      if (Object.values(FontColors).includes(recievedColor)) {
        setHeaderColor(recievedColor);
      }
    }

    window.addEventListener("changeHeaderColor", handleColorChange);
    return () => window.removeEventListener("changeHeaderColor", handleColorChange);
  }, []);

  return (
    <div className="flex w-full justify-between
      px-6 py-6 fixed top-0 z-10
      ">
      <div>
        <IconButton Icon={SiWorldhealthorganization} textSize="text-4xl" textColor={headerColor} />
      </div>

      <div>
        <Pagination textColor={headerColor} />
      </div>

      <div>
        <IconButton Icon={IoIosSwitch} blur textColor={headerColor} />
      </div>
    </div>
  )
};
