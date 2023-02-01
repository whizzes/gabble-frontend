import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String'];
};

export type Me = {
  __typename?: 'Me';
  error?: Maybe<UserError>;
  user?: Maybe<User>;
};

export type MutationRoot = {
  __typename?: 'MutationRoot';
  linkCreate: Scalars['Boolean'];
  tokenCreate: TokenCreate;
  userCreate: UserCreate;
};

export type MutationRootTokenCreateArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationRootUserCreateArgs = {
  input: UserCreateInput;
};

export type QueryRoot = {
  __typename?: 'QueryRoot';
  linkList: Scalars['Boolean'];
  me: Me;
};

export type TokenCreate = {
  __typename?: 'TokenCreate';
  error?: Maybe<UserError>;
  token?: Maybe<AccessToken>;
};

/**
 * Platform User. A platform user may have priviledges for different
 * operations based on its `Role`.
 */
export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  surname: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserCreate = {
  __typename?: 'UserCreate';
  error?: Maybe<UserError>;
  user?: Maybe<User>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  lastName: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserError = {
  __typename?: 'UserError';
  code: UserErrorCode;
  message: Scalars['String'];
};

export enum UserErrorCode {
  EmailTaken = 'EMAIL_TAKEN',
  Unauthorized = 'UNAUTHORIZED',
  Unknown = 'UNKNOWN'
}

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentUserQuery = {
  __typename?: 'QueryRoot';
  me: {
    __typename?: 'Me';
    user?: {
      __typename?: 'User';
      id: string;
      name: string;
      surname: string;
      email: string;
      createdAt: any;
      updatedAt: any;
    } | null;
  };
};

export type CurrentUserFragment = {
  __typename?: 'User';
  id: string;
  name: string;
  surname: string;
  email: string;
  createdAt: any;
  updatedAt: any;
};

export type TokenCreateMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type TokenCreateMutation = {
  __typename?: 'MutationRoot';
  tokenCreate: {
    __typename?: 'TokenCreate';
    token?: { __typename?: 'AccessToken'; accessToken: string } | null;
  };
};

export type CreateUserMutationVariables = Exact<{
  input: UserCreateInput;
}>;

export type CreateUserMutation = {
  __typename?: 'MutationRoot';
  userCreate: {
    __typename?: 'UserCreate';
    user?: { __typename?: 'User'; id: string } | null;
    error?: {
      __typename?: 'UserError';
      code: UserErrorCode;
      message: string;
    } | null;
  };
};

export const CurrentUserFragmentDoc = gql`
  fragment CurrentUser on User {
    id
    name
    surname
    email
    createdAt
    updatedAt
  }
`;
export const GetCurrentUserDocument = gql`
  query GetCurrentUser {
    me {
      user {
        ...CurrentUser
      }
    }
  }
  ${CurrentUserFragmentDoc}
`;
export const TokenCreateDocument = gql`
  mutation TokenCreate($email: String!, $password: String!) {
    tokenCreate(email: $email, password: $password) {
      token {
        accessToken
      }
    }
  }
`;
export const CreateUserDocument = gql`
  mutation CreateUser($input: UserCreateInput!) {
    userCreate(input: $input) {
      user {
        id
      }
      error {
        code
        message
      }
    }
  }
`;
