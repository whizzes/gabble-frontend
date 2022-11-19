import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Button from '../../components/Button';
import TextField from '../../components/TextField';

export const Signup: React.FC = () => {
  const formik = useFormik<{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required(),
      confirmPassword: Yup.string().required(),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="w-full flex flex-wrap">
      <div className="w-1/2 shadow-2xl">
        <img
          className="object-cover w-full h-screen hidden md:block"
          src="https://images.unsplash.com/photo-1668854084710-386c7d25f771?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80"
          alt="Background"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Create a new Account</p>
          <form className="flex flex-col pt-3 md:pt-8">
            <TextField
              label="Name"
              value={formik.values.name}
              name="name"
              placeholder="John Appleseed"
              onChange={formik.handleChange}
            />
            <TextField
              name="email"
              value={formik.values.email}
              label="Email"
              type="email"
              placeholder="john.appleseed@mail.com"
              onChange={formik.handleChange}
            />
            <TextField
              name="password"
              value={formik.values.password}
              label="Password"
              type="password"
              placeholder="Create a new secret"
              onChange={formik.handleChange}
            />
            <TextField
              name="confirmPassword"
              value={formik.values.confirmPassword}
              label="Confirm Password"
              type="password"
              placeholder="Make sure you will remember it"
              onChange={formik.handleChange}
            />
            <Button className="mt-10">Create an Account</Button>
          </form>
          <div className="text-center pt-12 pb-12">
            <p>
              Already have an account?{' '}
              <NavLink to="/login" className="underline font-semibold">
                Log in here.
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
