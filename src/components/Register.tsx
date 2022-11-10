import { useState } from 'react';
import Button from './Button';
import ErrorCard from './ErrorCard';
import Input from './Input';

export default function Register() {
  const [error, setError] = useState(null);
  const [credentials, setCredentials] = useState({
    name: '',
    last_name: '',
    role: '',
    email: '',
    password: '',
  });
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    console.log(credentials);
  };

  return (

      <div className="h-screen flex justify-center flex-col bg-slate-50">
        <div className="w-1/1 sm:w-1/2 lg:w-1/3 m-auto p-6 bg-white rounded-md shadow-lg">
          <h1 className=" text-center text-2xl">Register</h1>
          <hr className="my-3" />
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <Input
              name="name"
              type="text"
              id="name"
              className="block my-2 w-full"
              required
              placeholder="Joe"
              onChange={(e:any) => {
                setCredentials({
                  ...credentials,
                  name: e.target.value,
                });
              }}
            />

            <label htmlFor="email">Email</label>
            <Input
              name="email"
              type="email"
              id="email"
              className="block my-2 w-full"
              required
              placeholder="example@example.com"
              onChange={(e:any) => {
                setCredentials({
                  ...credentials,
                  email: e.target.value,
                });
              }}
            />

            <label htmlFor="password">Password</label>
            <Input
              name="password"
              type="password"
              id="password"
              className="block my-2.5 w-full"
              required
              placeholder="password"
              onChange={(e:any) => {
                setCredentials({
                  ...credentials,
                  password: e.target.value,
                });
              }}
            />

            <div className="flex justify-between">
              <a
                href="/login"
                className="text-base text-blue-500 cursor-pointer"
              >
                Login
              </a>
            </div>
            <Button className="mr-2 mt-3 mb-2 w-full" type="submit" onClick={(()=>{})}>
              Sign up
            </Button>
          </form>
          <ErrorCard error={error} setError={setError} />
        </div>
      </div>
  );
}
