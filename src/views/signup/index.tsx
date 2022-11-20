import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { gql, useClient } from 'urql';
import * as Yup from 'yup';

import Button from '../../components/Button';
import TextField from '../../components/TextField';

export const Signup: React.FC = () => {
  const urqlClient = useClient();
  const formik = useFormik<{
    name: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      lastName: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required(),
      confirmPassword: Yup.string().required(),
    }),
    onSubmit: async (values) => {
      const result = await urqlClient
        .mutation(
          gql`
            mutation ($payload: UserCreateInput!) {
              userCreate(input: $payload) {
                user {
                  id
                  name
                  lastName
                  email
                }
                error {
                  code
                  message
                }
              }
            }
          `,
          {
            payload: {
              name: values.name,
              lastName: values.lastName,
              email: values.email,
              password: values.password,
            },
          }
        )
        .toPromise();

      if (result.error) {
        // Handle Error
        console.error(result.error);
        return;
      }

      console.log(result.data.userCreate);
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
          <form
            className="flex flex-col pt-3 md:pt-8"
            onSubmit={formik.handleSubmit}
          >
            <TextField
              label="Name"
              value={formik.values.name}
              name="name"
              placeholder="John Appleseed"
              error={formik.errors.name}
              onChange={formik.handleChange}
            />
            <TextField
              label="Last Name"
              value={formik.values.lastName}
              name="lastName"
              placeholder="John Appleseed"
              error={formik.errors.lastName}
              onChange={formik.handleChange}
            />
            <TextField
              name="email"
              value={formik.values.email}
              label="Email"
              type="email"
              placeholder="john.appleseed@mail.com"
              error={formik.errors.email}
              onChange={formik.handleChange}
            />
            <TextField
              name="password"
              value={formik.values.password}
              label="Password"
              type="password"
              placeholder="Create a new secret"
              error={formik.errors.password}
              onChange={formik.handleChange}
            />
            <TextField
              name="confirmPassword"
              value={formik.values.confirmPassword}
              label="Confirm Password"
              type="password"
              placeholder="Make sure you will remember it"
              error={formik.errors.confirmPassword}
              onChange={formik.handleChange}
            />
            <Button className="mt-10" type="submit">
              Create an Account
            </Button>
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
