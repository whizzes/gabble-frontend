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

export type Link = {
  __typename?: 'Link';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  originalUrl: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type LinkCreate = {
  __typename?: 'LinkCreate';
  error?: Maybe<LinkError>;
  link?: Maybe<Link>;
};

export type LinkCreateInput = {
  customHash?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

export type LinkError = {
  __typename?: 'LinkError';
  code: LinkErrorCode;
  message: Scalars['String'];
};

export enum LinkErrorCode {
  CustomHashUsed = 'CUSTOM_HASH_USED',
  InvalidUrl = 'INVALID_URL',
  Unauthorized = 'UNAUTHORIZED',
  Unknown = 'UNKNOWN'
}

export type Me = {
  __typename?: 'Me';
  error?: Maybe<UserError>;
  user?: Maybe<User>;
};

export type MutationRoot = {
  __typename?: 'MutationRoot';
  linkCreate: LinkCreate;
  tokenCreate: TokenCreate;
  userCreate: UserCreate;
};

export type MutationRootLinkCreateArgs = {
  input: LinkCreateInput;
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
  me: Me;
};

export type TokenCreate = {
  __typename?: 'TokenCreate';
  error?: Maybe<UserError>;
  token?: Maybe<AccessToken>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  links: Array<Link>;
  linksIds: Array<Scalars['ID']>;
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
  name: Scalars['String'];
  password: Scalars['String'];
  surname: Scalars['String'];
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

export type LinkCreateMutationVariables = Exact<{
  input: LinkCreateInput;
}>;

export type LinkCreateMutation = {
  __typename?: 'MutationRoot';
  linkCreate: {
    __typename?: 'LinkCreate';
    link?: {
      __typename?: 'Link';
      id: string;
      originalUrl: string;
      createdAt: any;
    } | null;
    error?: {
      __typename?: 'LinkError';
      code: LinkErrorCode;
      message: string;
    } | null;
  };
};

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
      links: Array<{
        __typename?: 'Link';
        id: string;
        originalUrl: string;
        updatedAt: any;
        createdAt: any;
      }>;
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
  links: Array<{
    __typename?: 'Link';
    id: string;
    originalUrl: string;
    updatedAt: any;
    createdAt: any;
  }>;
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

export type UserCreateMutationVariables = Exact<{
  input: UserCreateInput;
}>;

export type UserCreateMutation = {
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
    links {
      id
      originalUrl
      updatedAt
      createdAt
    }
    createdAt
    updatedAt
  }
`;
export const LinkCreateDocument = gql`
  mutation linkCreate($input: LinkCreateInput!) {
    linkCreate(input: $input) {
      link {
        id
        originalUrl
        createdAt
      }
      error {
        code
        message
      }
    }
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
export const UserCreateDocument = gql`
  mutation UserCreate($input: UserCreateInput!) {
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
