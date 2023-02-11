import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children?: ReactNode;
  element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
  const { 
    children, 
    element = document.body // место расположения элемента в DOM
    } = props;
  return createPortal(children, element);
};
