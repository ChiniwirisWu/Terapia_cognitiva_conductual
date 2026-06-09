import { RefObject } from "react";

export const scrollToTop = (mainRef: RefObject<HTMLElement | null>) => {
  if (mainRef.current != null) {
    mainRef.current.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
};
