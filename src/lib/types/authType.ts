export interface ICredentials {
  email: string;
  password: string;
}

export interface IRegisterPayload {
  lastname: string;
  firstname: string;
  email: string;
  password: string;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}
