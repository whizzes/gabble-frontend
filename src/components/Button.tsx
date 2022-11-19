import { MouseEventHandler, ReactNode } from 'react';
import classNames from 'classnames';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler;
};

export default function Button({ type, className, children, onClick }: Props) {
  const cn = classNames(
    className,
    'transition duration-200 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-lg px-5 py-2'
  );

  return (
    <button type={type} className={cn}>
      {children}
    </button>
  );
}
