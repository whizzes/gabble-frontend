import cn from 'classnames';
import { ChangeEventHandler } from 'react';

type TextField = {
  name: string;
  label: string
  id: string
  type: string
  placeholder: string
  onChange: ChangeEventHandler | undefined
  required: true | false
  className: string
}

export default function TextField({
  name,
  label,
  id,
  type,
  placeholder,
  onChange,
  required = false,
  className,
}:TextField) {
  return (
    <>
    <label htmlFor={id}>{label}</label>
    <input
      name={name}
      type={type}
      id={id}
      className={cn(
        className,
        'px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none',
      )}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
    </>
  );
}
