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

/** A Link record used to redirect to the underlying `original_url` */
export type Link = {
  __typename?: 'Link';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  originalUrl: Scalars['String'];
  ulid: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type LinkCreate = {
  __typename?: 'LinkCreate';
  error?: Maybe<LinkError>;
  link?: Maybe<Link>;
};

export type LinkCreateInput = {
  ulid?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

export type LinkError = {
  __typename?: 'LinkError';
  code: LinkErrorCode;
  message: Scalars['String'];
};

export enum LinkErrorCode {
  Internal = 'INTERNAL',
  Pxid = 'PXID',
  UlidParse = 'ULID_PARSE'
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
  userRegister: UserRegister;
};

export type MutationRootLinkCreateArgs = {
  input: LinkCreateInput;
};

export type MutationRootTokenCreateArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationRootUserRegisterArgs = {
  input: UserRegisterInput;
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

/** A Platform's User */
export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  /**
   * Retrieves links for `User` instance, if and only if the `User` instance
   * belongs to the currently authenticated user.
   */
  links: Array<Link>;
  name: Scalars['String'];
  surname: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserError = {
  __typename?: 'UserError';
  code: UserErrorCode;
  message: Scalars['String'];
};

export enum UserErrorCode {
  EmailTaken = 'EMAIL_TAKEN',
  Internal = 'INTERNAL',
  InvalidEmail = 'INVALID_EMAIL',
  Unauthorized = 'UNAUTHORIZED'
}

export type UserRegister = {
  __typename?: 'UserRegister';
  error?: Maybe<UserError>;
  user?: Maybe<User>;
};

export type UserRegisterInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  surname: Scalars['String'];
};

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
      ulid: string;
      originalUrl: string;
    } | null;
    error?: {
      __typename?: 'LinkError';
      code: LinkErrorCode;
      message: string;
    } | null;
  };
};

export type CreatedLinkFragment = {
  __typename?: 'Link';
  id: string;
  ulid: string;
  originalUrl: string;
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
        ulid: string;
        originalUrl: string;
        createdAt: any;
        updatedAt: any;
        deletedAt?: any | null;
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
    ulid: string;
    originalUrl: string;
    createdAt: any;
    updatedAt: any;
    deletedAt?: any | null;
  }>;
};

export type UserLinksFragment = {
  __typename?: 'Link';
  id: string;
  ulid: string;
  originalUrl: string;
  createdAt: any;
  updatedAt: any;
  deletedAt?: any | null;
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
    error?: {
      __typename?: 'UserError';
      code: UserErrorCode;
      message: string;
    } | null;
  };
};

export type UserCreateMutationVariables = Exact<{
  input: UserRegisterInput;
}>;

export type UserCreateMutation = {
  __typename?: 'MutationRoot';
  userRegister: {
    __typename?: 'UserRegister';
    user?: { __typename?: 'User'; id: string } | null;
    error?: {
      __typename?: 'UserError';
      code: UserErrorCode;
      message: string;
    } | null;
  };
};

export const CreatedLinkFragmentDoc = gql`
  fragment CreatedLink on Link {
    id
    ulid
    originalUrl
  }
`;
export const UserLinksFragmentDoc = gql`
  fragment UserLinks on Link {
    id
    ulid
    originalUrl
    createdAt
    updatedAt
    deletedAt
  }
`;
export const CurrentUserFragmentDoc = gql`
  fragment CurrentUser on User {
    id
    name
    surname
    email
    createdAt
    updatedAt
    links {
      ...UserLinks
    }
  }
  ${UserLinksFragmentDoc}
`;
export const LinkCreateDocument = gql`
  mutation linkCreate($input: LinkCreateInput!) {
    linkCreate(input: $input) {
      link {
        ...CreatedLink
      }
      error {
        code
        message
      }
    }
  }
  ${CreatedLinkFragmentDoc}
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
      error {
        code
        message
      }
    }
  }
`;
export const UserCreateDocument = gql`
  mutation UserCreate($input: UserRegisterInput!) {
    userRegister(input: $input) {
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
