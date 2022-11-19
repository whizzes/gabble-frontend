import cn from 'classnames';
import { MouseEventHandler, ReactNode } from 'react';

type Button = {
  type?: "button" | "submit" | "reset";
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler;
};


export default function Button({type, className, children, onClick}:Button) {
  
  return (
    <button
      type={type}
      className={cn(
        className,
        'transition duration-200 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5',
      )}
    >
      {children}
    </button>
  );
}


