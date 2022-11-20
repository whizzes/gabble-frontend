import classNames from 'classnames';

import type { ChangeEventHandler } from 'react';

type Props = {
  className?: string;
  name: string;
  label: string;
  id?: string;
  type?: 'email' | 'text' | 'password' | 'number';
  placeholder?: string;
  required?: boolean;
  error?: string;
  value: string;
  onChange: ChangeEventHandler | undefined;
};

export default function TextField({
  id,
  name,
  label,
  className,
  placeholder,
  type = 'text',
  required = false,
  error,
  value,
  onChange,
}: Props) {
  const divClassName = classNames('flex flex-col pt-4', className);

  return (
    <div className={divClassName}>
      <label htmlFor={name} className="text-lg">
        {label}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        value={value}
        name={name}
        placeholder={placeholder}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
        onChange={onChange}
      />
      <p>{error}</p>
    </div>
  );
}
