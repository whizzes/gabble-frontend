import classNames from 'classnames';

import type { ChangeEventHandler } from 'react';

type TextField = {
  className?: string;
  name: string;
  label: string;
  id?: string;
  type?: 'email' | 'text' | 'password' | 'number';
  placeholder?: string;
  required?: boolean;
  onChange: ChangeEventHandler | undefined;
}

export default function TextField({
  id,
  name,
  label,
  className,
  placeholder,
  type = 'text',
  required = false,
  onChange,
}: TextField) {
  const divClassName = classNames('flex flex-col pt-4', className);

  return (
    <div className={divClassName}>
    <label htmlFor={name} className="text-lg">{label}</label>
    <input type={type} id={id} required={required} placeholder={placeholder} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" onChange={onChange} />
  </div>
  );
}
