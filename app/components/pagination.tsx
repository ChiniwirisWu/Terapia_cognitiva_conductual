"use client";

import { usePageProviderContext, PageRoutes, PageRoutesType } from '@/components/pageProvider';
import { FontColorsType } from '@/constants';
import React, { useState, createContext, useContext } from 'react';
import { useRouter } from "next/navigation";


type BackdropEffectContextType = {
  handleMouseEnter: (e: React.MouseEvent<HTMLButtonElement>) => void,
  handleMouseOut: (e: React.MouseEvent<HTMLButtonElement>) => void,
};

const BackdropEffectContext = createContext<BackdropEffectContextType | null>(null);

const useBackdropEffectContext = () => {
  const context = useContext(BackdropEffectContext);

  if (!context) {
    throw new Error("No context provided");
  }

  return context;
};


// Pagination component stuff
export default function Pagination({ textColor }: { textColor: FontColorsType }) {
  const { pageRouteSelected, setPageRouteSelected } = usePageProviderContext();

  const [backdropStyle, setBackdropStyle] = useState({
    opacity: "0",
    width: "0px",
    height: "0px",
    transform: "translate(0px, 0px)"
  });

  // mouse effect handlers
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setBackdropStyle({
      opacity: '1',
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      transform: `translate(${e.currentTarget.offsetLeft}px, ${e.currentTarget.offsetTop}px)`,
    });

    console.log(rect)
  };

  const handleMouseOut = () => {
    setBackdropStyle((prev) => ({ ...prev, opacity: "0" }));
  };
  //

  return (
    <div className="flex bg-gray-500/15 p-1 rounded-lg relative z-0">
      <BackdropEffectContext.Provider value={{ handleMouseEnter, handleMouseOut }}>
        <Button title={PageRoutes.hero} selected={pageRouteSelected} setSelected={setPageRouteSelected} textColor={textColor} />
        <Button title={PageRoutes.log} selected={pageRouteSelected} setSelected={setPageRouteSelected} textColor={textColor} />
        <Button title={PageRoutes.details} selected={pageRouteSelected} setSelected={setPageRouteSelected} textColor={textColor} />
        <Button title={PageRoutes.about} selected={pageRouteSelected} setSelected={setPageRouteSelected} textColor={textColor} />
      </BackdropEffectContext.Provider>

      <div
        className={`
          absolute bg-gray-500/20 backdrop-blur-lg rounded-lg
          left-0 top-0 pointer-events-none transition-all
          ease-in-out -z-10 duration-300
        `}
        style={{
          opacity: backdropStyle.opacity,
          width: backdropStyle.width,
          height: backdropStyle.height,
          transform: backdropStyle.transform
        }}
      />
    </div>
  )
}


// Button component stuff
type ButtonType = {
  title: PageRoutesType,
  selected: PageRoutesType,
  setSelected: (selected: PageRoutesType) => void,
  textColor: FontColorsType
}

function Button({ title, selected, setSelected, textColor }: ButtonType) {

  const { handleMouseEnter, handleMouseOut } = useBackdropEffectContext();

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseOut}
      onClick={() => setSelected(title)}
      className={`cursor-pointer px-10 py-1 rounded relative z-10 outline-none`}
    >
      <p className={`text-${textColor} transition-color duration-300 pointer-events-none ${selected == title && "underline"}`}>{title}</p>
    </button>
  );
};
