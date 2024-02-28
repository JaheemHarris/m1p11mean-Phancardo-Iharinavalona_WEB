import { Roles } from '../enums/roleEnum';

export interface IUserType {
  _id: string;
  lastname: string;
  firstname: string;
  email: string;
  role?: Roles;
}
