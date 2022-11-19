import { SetStateAction } from 'react';

type Props = {
  error: Error | null;
  setError: (
    arg0:
      | string
      | Error
      | void
      | null
      | SetStateAction<Error | string | void | null>
  ) => void;
};

export default function ErrorCard({ error, setError }: Props) {
  if (error) {
    setTimeout(() => {
      setError(null);
    }, 4000);
  }

  return (
    <>
      {error ? (
        <div
          className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg"
          role="alert"
        >
          {error.toString()}
        </div>
      ) : null}
    </>
  );
}
