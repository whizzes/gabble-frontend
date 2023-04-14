import type { UserErrorCode } from '$lib/graphql/schema';

export enum LoginError {
  MissingCredentials = 'MISSING_CREDENTIALS'
}
export interface ErrorMessages {
  [LoginError.MissingCredentials]: string;
  [UserErrorCode.Unauthorized]: string;
  default: string;
}
